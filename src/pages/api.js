import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ApiRedirect() {
  const destination = useBaseUrl('/docs/api-reference/');
  return <Redirect to={destination} />;
}