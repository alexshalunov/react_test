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

// Возвращаем объект, который содержит type и payload - данные
const putData = (dataFromServer) => {
    return {
        type: t.ACTION_PUT_DATA,
        payload: dataFromServer
    }
}
// Возвращаем не объект, а функцию, в которой выполняем асинхронный запрос
// получаем данные из API и диспатчим данные в событие putData
const loadData = () => (dispatch, getState) => {
    console.log( getState() )
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => dispatch(putData(json)))
}

export {
    changeFirstName,
    changeSecondName,
    putData,
    loadData
}