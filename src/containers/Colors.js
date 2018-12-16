import ColorList from '../components/ColorList';
import { sortColors } from '../lib/array-helpers'
import { removeColor, rateColor } from '../actions';
import { connect } from 'react-redux';

const Colors = connect(
    (state, props) =>
        ({
            colors: sortColors(state.colors, props.match.params.sort)
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList)

export default Colors;