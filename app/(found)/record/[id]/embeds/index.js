import {lazy} from 'react';

// need to wrap around the components with lazy function
export const PoisonWormsEmbed = lazy(() => import('./posion-worms-embed.js'))
export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed.js'))
