import { connect } from "react-redux";
import FilterBar from "./FilterBar";
import {
  filterGoods,
  setColumnFilter,
  setConditionFilter, setFilteringValue,
} from "../../State/Slices/GoodsListSlice";

let mapStateToProps = (state) => {
  return {};
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
    }
  };
};

const FilterBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);

export default FilterBarContainer;
