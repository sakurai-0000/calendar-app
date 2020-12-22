import { connect } from 'react-redux';
import Headers from './presentation';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Headers);

