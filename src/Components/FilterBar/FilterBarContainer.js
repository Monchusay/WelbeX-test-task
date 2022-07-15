import { connect } from "react-redux";
import FilterBar from "./FilterBar";
import {
  filterGoods, resetFilters,
  setColumnFilter,
  setConditionFilter, setFilteringValue,
} from "../../State/Slices/GoodsListSlice";

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setColumnFilter: (value) => {
      dispatch(setColumnFilter(value));
    },
    setConditionFilter: (value) => {
      dispatch(setConditionFilter(value));
    },
    setFilteringValue:(filterText) => {
      dispatch(setFilteringValue(filterText))
    },
    filterGoods: () => {
      dispatch(filterGoods())
    },
    resetFilters: () => {
      dispatch(resetFilters())
    }
  };
};

const FilterBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);

export default FilterBarContainer;
