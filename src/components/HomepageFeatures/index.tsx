import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI That Actually Ships Code',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The fastest, most accurate code-writing brain on earth — turns vague ideas into bulletproof, typed, tested production code faster than a senior dev on their best day.
      </>
    ),
  },
  {
    title: 'Spec-Driven Superpower',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        One pristine spec file rules everything: generate flawless backends, frontends, APIs, DB schemas, and docs in 7+ languages — zero inconsistency, zero manual copy-paste, ever.
      </>
    ),
  },
  {
    title: 'The End of Tech Debt',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Update a single line in your spec and watch your entire multi-repo empire rebuild itself perfectly in seconds. Drift is dead. This is the future senior engineers dream about.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
