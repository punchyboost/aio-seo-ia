// Dans client/src/components/Analytics.tsx

import { useEffect } from 'react';
import { useLocation } from 'wouter';
import ReactGA from 'react-ga4';

const Analytics = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Suivi de la page vue à chaque changement d'URL
    ReactGA.send({ hitType: 'pageview', page: location });
  }, [location]);

  return null; // Ce composant ne rend rien
};

export default Analytics;
