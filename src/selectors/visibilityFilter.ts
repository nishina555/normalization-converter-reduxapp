import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";

export const selectVisibilityFilter = (
  state: AppState
): VisibilityFilterTypes => state.ui.visibilityFilter;
