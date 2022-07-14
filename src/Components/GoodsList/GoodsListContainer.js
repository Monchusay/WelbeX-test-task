import { connect } from "react-redux";
import GoodsList from "./GoodsList";

let mapStateToProps = (state) => {
  return {
    goods: state.GoodsList.filtratedGoods,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const GoodsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodsList);

export default GoodsListContainer;
