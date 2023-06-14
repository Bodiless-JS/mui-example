import type { ComponentType } from 'react';
import { withoutHydration, /* withoutHydrationInline */ } from '@bodiless/hydration';
import type { MuiCardProps } from './types';
import MuiCardClean from './MuiCardClean';

/**
 * This clean component is always static.  That means it is never hydrated
 * in the browser, and must not contain any client-side interactivity.
 *
 * If anything inserted into a component slot (or any children) requires
 * interactivity, Use MuiCardClean instead.
 */
const MuiCardStatic: ComponentType<MuiCardProps> = withoutHydration()(
  MuiCardClean
);
// @TODO Use withoutHydrationInline if your component renders inline
// const MuiCardStatic: ComponentType<MuiCardProps> = withoutHydrationInline()(
//   MuiCardClean
// );

export {
  MuiCardClean,
  MuiCardStatic,
};
export { default as muiExampleMuiCard } from './tokens';
export { default as muiExampleMuiCardStatic } from './tokens';
