import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className='container'>
        <p className={styles.heroCaption}>Choi Byeong Chan</p>
        <Heading as='h1' className={styles.heroTitle}>
          Chan-Byeong
        </Heading>
        <p className='flex__start'>
          <span className={styles.heroSubtitle}>Frontend Engineer</span>
        </p>
        <p className='flex__start'>
          <span>
            <strong>Github </strong>
            <a className='link' href='https://github.com/chan-byeong'>
              github.com/chan-byeong
            </a>
          </span>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} Blog`} description='Chan-Byeong Blog'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
