import { connect } from 'react-redux';
import SwitchLabels from './presentation';
import { hinataSetSwitchChech } from "../../../../redux/swich/actions";

const mapStateToProps = state => ({ hinataInfo: state.hinataInfo });

const mapDispatchToProps = dispatch => ({
    onSwitch: checked => {
        dispatch(hinataSetSwitchChech(checked));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SwitchLabels);

