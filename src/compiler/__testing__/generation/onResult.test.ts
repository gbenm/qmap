import { compile } from "@qmap/compiler"
import { checkAccessQueryNode, checkFunctionQueryNode, checkOnResultNode, checkPrimitiveNode, checkSelectQueryNode } from "../asserts"

test("On Result", () => {
  const { errors, definitions, descriptor } = compile(`/*qmap*/{
    products: take(products, @{5}),
    %{products.name},
    compact_product: %{
      products { id, name }
    },
    labels: createLabels(%{products})
  }`)

  expect(errors).toEqual([])
  expect(definitions.length).toBe(4)

  const [
    takeFn,
    onresultAccess,
    onresultWithRename,
    createLabelsWithProductsFromResult
  ] = definitions

  checkFunctionQueryNode(takeFn, {
    name: "take",
    alias: "products",
    consumer(args) {
      expect(args.length).toBe(2)
      checkSelectQueryNode(args[0], { name: "products" })
      checkPrimitiveNode(args[1], 5)
    },
  })

  checkOnResultNode(onresultAccess, {
    alias: "products_name",
    checkNode(node) {
      checkAccessQueryNode(node, {
        keys: ["products", "name"]
      })
    },
  })

  checkOnResultNode(onresultWithRename, {
    alias: "compact_product",
    checkNode(node) {
      checkSelectQueryNode(node, {
        name: "products",
        consumer(definitions) {
          expect(definitions.length).toBe(2)
          checkSelectQueryNode(definitions[0], { name: "id" })
          checkSelectQueryNode(definitions[1], { name: "name" })
        },
      })
    },
  })

  checkFunctionQueryNode(createLabelsWithProductsFromResult, {
    alias: "labels",
    name: "createLabels",
    consumer(args) {
      expect(args.length).toBe(1)
      checkOnResultNode(args[0], {
        alias: "products",
        checkNode(node) {
          checkSelectQueryNode(node, { name: "products" })
        },
      })
    },
  })

  expect(descriptor).toEqual({
    index: {
      products: {
        index: {},
        all: true
      }
    }
  })
})
