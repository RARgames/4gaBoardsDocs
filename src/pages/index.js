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
        <div style={{ align: 'center', marginBottom: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <a href="https://4gaboards.com" target="_blank">
              <img src="/img/4gaboards512w-white.webp" alt="4ga Boards" style={{ maxWidth: '256px' }} />
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1rem' }}>
            <img src="https://img.shields.io/github/v/release/RARgames/4gaBoards?color=orange" alt="4ga Boards Latest Release" />
            <img src="https://img.shields.io/github/license/rargames/4gaBoards" alt="4ga Boards License" />
            <img src="https://img.shields.io/github/contributors/rargames/4gaboards" alt="4ga Boards Contributors" />
          </div>
          <Heading as="h1" className="color-dark-h">
            {<Translate>4ga Boards Documentation</Translate>}
          </Heading>
          <div style={{ marginBottom: '1rem'}} className="color-dark-primary">
            {<Translate>Straightforward boards system for realtime project management</Translate>}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <video style={{ width: '50%' }} autoPlay muted loop>
              <source src="/img/4gaBoards_Preview_github.mp4" type="video/mp4" /> 4ga Boards Preview Video
            </video>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
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
            to="/docs/user-manual">
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
            to="/docs/admin-manual">
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
            to="/docs/developer-manual">
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
