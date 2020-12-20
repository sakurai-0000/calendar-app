import { connect } from 'react-redux';
import SwitchLabels from './presentation';
import { hinataSetSwitchChech } from "../../redux/hinata/actions";

const mapStateToProps = state => ({ hinata: state.hinata });

const mapDispatchToProps = dispatch => ({
    setCheck: checked => {
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

