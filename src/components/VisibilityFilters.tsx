import { FC } from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../types/constants/visibilityFilterType";
import { setFilter } from "../reducers/visibilityFilterSlice";
import { AppState } from "../store/index";
import { VisibilityFilterTypes } from "../types/state/visibilityFilter";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./VisibilityFilters.module.css";

const VisibilityFilters: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeFilter: VisibilityFilterTypes = useSelector(
    (state: AppState) => state.visibilityFilter
  );
  return (
    <>
      {(
        Object.keys(VISIBILITY_FILTERS) as Array<
          keyof typeof VISIBILITY_FILTERS
        >
      ).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              styles.filter,
              currentFilter === activeFilter && styles.filterActive
            )}
            onClick={() => dispatch(setFilter(currentFilter))}
          >
            {currentFilter}
          </span>
        );
      })}
    </>
  );
};

export default VisibilityFilters;
