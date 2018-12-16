import ColorDetails from '../components/ColorDetails';
import {connect} from 'react-redux';
import { findById} from '../lib/array-helpers';

const Color = connect(
    (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)

export default Color;