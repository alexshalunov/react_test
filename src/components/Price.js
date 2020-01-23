import React, { Component } from 'react'
import {number} from 'prop-types'

class Price extends Component{

    
    render(){
        function divideNumberByPieces(x, delimiter) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
        }

        const price = this.props.price

        return(
            <>                
                {divideNumberByPieces(price)},0 ₽
            </>
        )
    }

}

export default Price


Price.propTypes = {
    price: number
}

Price.defaultProps = {
    price: 0
}