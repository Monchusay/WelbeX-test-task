import { connect } from "react-redux";
import SortBar from "./SortBar";
import {sortByAmount, sortByDistance, sortByName} from "../../../State/Slices/GoodsListSlice";

let mapStateToProps = (state) => {
    return {};
};

let mapDispatchToProps = (dispatch) => {
    return {
        sortByAmount: () => {
            dispatch(sortByAmount());
        },
        sortByDistance: () => {
            dispatch(sortByDistance())
        },
        sortByName: () => {
            dispatch(sortByName())
        }
    };
};

const SortBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortBar);

export default SortBarContainer;