import Test from './TestComponent'

import { bindActionCreators } from 'redux';
import { changeFirstName, changeSecondName } from '../../store/test/actions';
import { connect } from 'react-redux';

const putStateToProps = (state) => {
    // Выдергивает поля из State и добавляет их в Props
    return{
        firstName: state.testUser.firstName,
        secondName: state.testUser.secondName,
        testTitle: state.testUser.data.title,
    }
}
const putActionsToProps = (dispatch) => {
    // Привязывает функции ActionCreators к нашим Props
    return{
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    }
}
export default connect(putStateToProps, putActionsToProps)(Test)