import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Archive",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>프로젝트를 소개합니다.</>,
    to: "/projects",
  },
  {
    title: "Posts",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        공부한 기록과 개발 관련 이야기를 <br /> 블로그에 아카이빙하고 있습니다.
      </>
    ),
    to: "/blog",
  },
  {
    title: "Resume",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        이력서를 확인하고 싶으시다면,
        <br /> 이곳에서 확인해주세요
      </>
    ),
    to: "/resume",
  },
];

function Feature({ title, Svg, description, to }: FeatureItem) {
  return (
    <Link to={to} className={clsx("col col--4 link")}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
