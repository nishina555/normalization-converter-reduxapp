import { VISIBILITY_FILTERS } from "../constants/visibilityFilterType";

export type VisibilityFilterTypes =
  typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];
