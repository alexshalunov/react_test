import React, {Component} from 'react'
import {string} from 'prop-types'

class Star extends Component{

    render(){
        const {color} = this.props
        return(
            <svg className="star" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.53834 2.41194C9.70914 2.0013 10.2909 2.0013 10.4617 2.41194L11.9488 5.98748C12.1648 6.50683 12.6532 6.86169 13.2139 6.90664L17.074 7.2161C17.5173 7.25164 17.6971 7.80489 17.3593 8.09423L14.4184 10.6135C13.9912 10.9794 13.8046 11.5536 13.9351 12.1007L14.8336 15.8675C14.9368 16.3001 14.4662 16.642 14.0867 16.4102L10.7819 14.3917C10.3019 14.0985 9.69814 14.0985 9.21812 14.3917L5.91334 16.4102C5.53379 16.6421 5.06317 16.3001 5.16636 15.8675L6.06488 12.1007C6.19539 11.5536 6.00883 10.9794 5.58165 10.6135L2.64067 8.09423C2.3029 7.80489 2.48266 7.25164 2.92599 7.2161L6.78608 6.90663C7.34677 6.86169 7.83518 6.50683 8.05119 5.98748L9.53834 2.41194Z" stroke={color}/>
            </svg>
        )
    }

}


export default Star

Star.propTypes = {
    color: string,
    // fill: string
}

Star.defaultProps = {
    color: '#8F949B',
    // fill: 'none'
}