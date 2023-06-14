import {
  staticTokenCollection,
  StaticBlock as StaticComponent,
  // Use `StaticInline` if your component renders inline elements.
  // StaticInline as StaticComponent,
} from '@bodiless/hydration';

export { default as muiExampleMuiCard } from './tokens';
export const muiExampleMuiCardStatic = staticTokenCollection;
export { default as MuiCardClean } from './MuiCardClean';
export const MuiCardStatic = StaticComponent;
