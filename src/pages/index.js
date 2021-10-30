import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Check Note Here
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Notebook - Made by G7M7T1 and Xpakeb13 and AsheOne - Welcome to the website, here are our study notes and our blog"
    >
      <Head>
        <meta name="author" content="G7M7T1" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Notebook" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notebook-lang.vercel.app/" />
        <meta property="og:title" content="Notebook" />
        <meta
          property="og:description"
          content="Notebook - Made by G7M7T1 and Xpakeb13 and AsheOne - Welcome to the website, here are our study notes and our blog"
        />
        <meta
          property="og:image"
          content="https://notebook-lang.vercel.app/img/11.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://notebook-lang.vercel.app/"
        />
        <meta property="twitter:title" content="Notebook" />
        <meta
          property="twitter:description"
          content="Notebook - Made by G7M7T1 and Xpakeb13 and AsheOne - Welcome to the website, here are our study notes and our blog"
        />
        <meta
          property="twitter:image"
          content="https://notebook-lang.vercel.app/img/11.png"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
