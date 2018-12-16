import {connect} from 'react-redux';

import AddColorForm from '../components/AddColorForm';
import { addColor } from '../actions';

const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(AddColorForm)

export default NewColor;