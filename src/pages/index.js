import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {<Translate>4ga Boards Documentation</Translate>}
        </Heading>
        <p className="hero__subtitle">{<Translate>Get Advantage. Straightforward boards system for realtime project management.</Translate>}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/home">
            <Translate>Go straight into action</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Get Advantage of 4ga Boards by browsing through the documentation.">
      <HomepageHeader />
      <main style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap' }}>
          {/* For Users Block */}
          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center', padding: '20px', border: '1px solid #ffbd00', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: '#D8D4CE' }}>
            <h2><Translate>For Users</Translate></h2>
            <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/structure">
            <Translate>Check documentation</Translate>
          </Link>
        </div>
        <div style = {{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px', color: '#D8D4CE'}}>
          <p><Translate>Discover how to use the platform to accomplish your goals efficiently.</Translate></p>
          </div> 
          </div>
          {/* For Admins Block */}
          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center', padding: '20px', border: '1px solid #ffbd00', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: '#D8D4CE'}}>
            <h2><Translate>For Admins</Translate></h2>
            <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/admin-settings">
            <Translate>Check documentation</Translate>
          </Link>
        </div>
        <div style = {{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px', color: '#D8D4CE'}}>
          <p><Translate>Manage your team, settings, and workflows with ease.</Translate></p>
          </div> 
          </div>
          {/* For Developers Block */}
          <div style={{ flex: '1', minWidth: '250px', textAlign: 'center', padding: '20px', border: '1px solid #ffbd00', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', color: '#D8D4CE' }}>
            <h2><Translate>For Developers</Translate></h2>
            <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/developers">
            <Translate>Check documentation</Translate>
          </Link>
        </div>
        <div style = {{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px', color: '#D8D4CE'}}>
          <p><Translate>Learn how to self host 4ga Boards on your own servers.</Translate></p>
          </div> 
          </div>
        </div>
      </main>
    </Layout>
  );
}
