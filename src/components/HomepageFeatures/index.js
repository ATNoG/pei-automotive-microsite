import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-Time Safety Insights',
    image: require('@site/static/img/road-block.png').default,
    description: (
      <>
        Receive timely alerts about nearby incidents, hazardous weather, and road conditions—helping you anticipate and react with safety.
      </>
    ),
  },
  {
    title: 'Connected Infrastructure',
    image: require('@site/static/img/antenna.png').default,
    description: (
      <>
        The Automotive App builds a living digital twin of the road network by merging data from cameras, radars, and weather stations.
        Behind every alert lies a network of connected devices working together.
      </>
    ),
  },
  {
    title: 'Designed for Drivers',
    image: require('@site/static/img/car.png').default,
    description: (
      <>
        Built for ease of use, the Automotive App provides a clear and responsive interface optimized for Android Auto. 
        Drivers can receive alerts and view nearby events, all without distraction.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
