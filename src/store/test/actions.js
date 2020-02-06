import * as t from './types'


const changeFirstName = (newFirstName) => {
    return {
        type: t.ACTION_CHANGE_FIRST_NAME,
        payload: newFirstName
    }
}
  
const changeSecondName = (newSecondName) => {
    return {
        type: t.ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    }
}

export {
    changeFirstName,
    changeSecondName
}