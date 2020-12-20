// ==========ここから追加する==========
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";
// ==========ここまで追加する==========

import Counter from "./presentation";

// ==========ここから追加する==========
const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});

export default connect(
    mapStateProps,
    mapDispatchProps
)(Counter);
// ==========ここまで追加する==========
