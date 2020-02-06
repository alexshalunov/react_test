import Home from './Home'
import { connect } from 'react-redux';

const putStateToProps = (state) => {
    // Выдергивает поля из State и добавляет их в Props    
    return{
        firstName: state.testUser.firstName,
        secondName: state.testUser.secondName,
    }
}

export default connect(putStateToProps)(Home)