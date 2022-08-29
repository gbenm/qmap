import { compile } from "@qmap/compiler"
import { checkAccessQueryNode, checkNewObjectQueryNode, checkSelectQueryNode } from "../asserts"

test ("simple", () => {
  const { errors, descriptor, definitions } = compile(`/*qmap*/{
    product: {
      product_id,
      product_name
    }
  }`)

  expect(errors).toEqual([])

  expect(definitions.length).toBe(1)

  checkNewObjectQueryNode(definitions[0], {
    alias: "product",
    consumer(definitions) {
      expect(definitions.length).toBe(2)
      checkSelectQueryNode(definitions[0], { name: "product_id" })
      checkSelectQueryNode(definitions[1], { name: "product_name" })
    },
  })

  expect(descriptor).toEqual({
    index: {
      product_id: { index: {}, all: true },
      product_name: { index: {}, all: true },
    }
  })
})

test ("with global access", () => {
  const { errors, descriptor, definitions } = compile(`/*qmap*/{
    transaction {
      product: {
        &.provider,
        product_id,
        product_name
      }
    }
  }`)

  expect(errors).toEqual([])

  expect(definitions.length).toBe(1)

  checkSelectQueryNode(definitions[0], {
    name: "transaction",
    consumer(definitions) {
      expect(definitions.length).toBe(1)
      checkNewObjectQueryNode(definitions[0], {
        alias: "product",
        consumer(definitions) {
          expect(definitions.length).toBe(3)
          checkAccessQueryNode(definitions[0], {
            isGlobal: true,
            keys: ["provider"],
          })
          checkSelectQueryNode(definitions[1], { name: "product_id" })
          checkSelectQueryNode(definitions[2], { name: "product_name" })
        },
      })
    },
  })

  expect(descriptor).toEqual({
    index: {
      provider: { index: {}, all: true },
      transaction: {
        index: {
          product_id: { index: {}, all: true },
          product_name: { index: {}, all: true },
        }
      }
    }
  })
})

