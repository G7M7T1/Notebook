import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "G7M7T1",
    Svg: require("../../static/img/2.svg").default,
    description: <>Text here</>,
  },
  {
    title: "Xpakeb13",
    Svg: require("../../static/img/1.svg").default,
    description: <>Text here</>,
  },
  {
    title: "AsheOne",
    Svg: require("../../static/img/3.svg").default,
    description: <>Text here</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <br></br>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
  );
}
