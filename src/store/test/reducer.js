import * as t from './types' //подключили типы экшенов

const initialState = {
    firstName: 'Aleksey',
    secondName: 'Shalunov'
}

// http://www.filltext.com/?rows=5&id={index}&firstName={firstName}&secondName={lastName}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case t.ACTION_CHANGE_FIRST_NAME:
            return {
                ...state, 
                firstName: action.payload
            }
        case t.ACTION_CHANGE_SECOND_NAME:
            return {
                ...state, 
                secondName: action.payload
            }
    }
    return state
}

export { reducer }