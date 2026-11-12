import React, { createContext, lazy, Suspense, useContext, useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import 'swagger-ui-react/swagger-ui.css';
import styles from './styles.module.css';

const SwaggerUI = lazy(() => import('swagger-ui-react'));
const VersionContext = createContext(null);

function VersionSelector() {
  const { versions, selected, setSelected } = useContext(VersionContext);
  return (
    <label className={styles.version}>
      API version
      <span className={styles.versionSelect}>
        <select value={selected} onChange={(event) => setSelected(event.target.value)}>
          {versions.map((version) => <option key={version.file} value={version.file}>{version.file === 'openapi.yaml' ? 'Beta Latest' : version.name}</option>)}
        </select>
      </span>
    </label>
  );
}

const versionSelectorPlugin = () => ({
  wrapComponents: {
    InfoContainer: (Original) => (props) => (
      <>
        <Original {...props} />
        <VersionSelector />
      </>
    ),
    ServersContainer: (Original) => (props) => (
      <>
        <h2 className={styles.settingsTitle}>Settings</h2>
        <Original {...props} />
      </>
    ),
  },
});

const swaggerPlugins = [versionSelectorPlugin];

function ApiReferenceContent() {
  const apiUrl = useBaseUrl('/api/');
  const [versions, setVersions] = useState([]);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${apiUrl}versions.json`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load API versions');
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) throw new Error('No API versions found');
        setVersions(data);
        setSelected(data[0].file);
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') setError(true);
      });
    return () => controller.abort();
  }, [apiUrl]);

  if (error) return <p role="alert">Unable to load the API reference.</p>;
  if (!selected) return <p>Loading API reference...</p>;

  return (
    <VersionContext.Provider value={{ versions, selected, setSelected }}>
      <div className={styles.swagger}>
        <Suspense fallback={<p>Loading API reference...</p>}>
          <SwaggerUI
            url={`${apiUrl}${selected.split('/').map(encodeURIComponent).join('/')}`}
            plugins={swaggerPlugins}
            deepLinking
            persistAuthorization
            tryItOutEnabled={false}
          />
        </Suspense>
      </div>
    </VersionContext.Provider>
  );
}

export default function ApiReference() {
  return <BrowserOnly fallback={<p>Loading API reference...</p>}>{() => <ApiReferenceContent />}</BrowserOnly>;
}