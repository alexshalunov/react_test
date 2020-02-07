import React from 'react'
import { useDispatch } from 'react-redux'
import { loadData } from '../../store/test/actions'

export const Connected = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(loadData());    

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))

    return(
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}