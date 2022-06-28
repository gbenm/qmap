import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Declarativo",
    description: (
      <>
        Seleccione y manipule al JSON mediante <b>queries</b>
      </>
    ),
  },
  {
    title: "Control sobre los datos",
    description: (
      <>
        Agregue <b>schemas</b> para limitar
        los datos que se pueden consumir
      </>
    ),
  },
  {
    title: "Evite el over fetching mientras que agiliza las peticiones",
    description: (
      <>
        Vea que es lo que se debe incluir y agreguelo si es necesario
      </>
    ),
  },
]

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
