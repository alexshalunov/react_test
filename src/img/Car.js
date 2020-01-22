import React, {Component} from 'react'
import {string} from 'prop-types'

class Car extends Component{

    render(){
        const {typeCar} = this.props
        return(
            <>
                {(typeCar === 'refrigerator')?(
                    <svg width="61" height="26" viewBox="0 0 61 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9 21H35C35.1 19.9 36.1 19 37.3 19H19C19.4 19.6 19.7 20.3 19.9 21Z" fill="#D9DFE5"/>
                        <path d="M7.5 19C7.2 19 7 19.1 7 19.3V21H10.1C10.3 20.3 10.6 19.6 11 19H7.5Z" fill="#D9DFE5"/>
                        <path d="M46 19H42.7C43.9 19 44.9 19.9 45 21H46V19Z" fill="#D9DFE5"/>
                        <path d="M49 1H47V3H51.8C51.4 1.8 50.3 1 49 1Z" fill="#D9DFE5"/>
                        <path d="M59 19C59 18.4 59.4 18 60 18V14H55.4C55.1 14 54.9 13.9 54.7 13.7L53.6 12.6C53.2 12.2 52.7 12 52.2 12H50C49.4 12 49 11.6 49 11V7C49 6.4 49.4 6 50 6H59.8C59.4 4.8 58.3 4 57 4H47V21H48.1C48.6 18.7 50.6 17 53 17C55.4 17 57.4 18.7 57.9 21H59V19ZM51.5 15H49.5C49.2 15 49 14.8 49 14.5C49 14.2 49.2 14 49.5 14H51.5C51.8 14 52 14.2 52 14.5C52 14.8 51.8 15 51.5 15Z" fill="#D9DFE5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 1.5C1 1.22386 1.22386 1 1.5 1H42.5C42.7761 1 43 1.22386 43 1.5V18H18C18.4 18.3 18.7 18.6 19 19H46V21H45V21.2V22.8V23H48.1C48 22.7 48 22.3 48 22C48 21.7 48 21.3 48.1 21H47V4H57C58.3 4 59.4 4.8 59.8 6H50C49.4 6 49 6.4 49 7V11C49 11.6 49.4 12 50 12H52.2C52.7 12 53.2 12.2 53.6 12.6L54.7 13.7C54.9 13.9 55.1 14 55.4 14H60V18C59.4 18 59 18.4 59 19V21H57.9C58 21.3 58 21.7 58 22C58 22.3 58 22.7 57.9 23H60C60.6 23 61 22.6 61 22V7C61 4.8 59.2 3 57 3H52.9C52.4 1.3 50.9 0 49 0H46V18H44V1.5C44 0.671573 43.3284 0 42.5 0H1.5C0.671573 0 0 0.671574 0 1.5V17.5C0 18.3284 0.671573 19 1.5 19H6.04329C6.01506 19.0968 6 19.1973 6 19.3V21H4C3.4 21 3 21.4 3 22C3 22.6 3.4 23 4 23H10.1C10 22.7 10 22.3 10 22C10 21.7 10 21.3 10.1 21H7V19.3C7 19.1 7.2 19 7.5 19H11C11.3 18.6 11.6 18.3 12 18H7.5H1.5C1.22386 18 1 17.7761 1 17.5V1.5ZM47 1V3H51.8C51.4 1.8 50.3 1 49 1H47ZM55.4 13H60V7H50V11H52.2C53 11 53.7 11.3 54.3 11.9L55.4 13ZM15 18C12.8 18 11 19.8 11 22C11 24.2 12.8 26 15 26C17.2 26 19 24.2 19 22C19 19.8 17.2 18 15 18ZM15 24.2C13.8 24.2 12.8 23.2 12.8 22C12.8 20.8 13.8 19.8 15 19.8C16.2 19.8 17.2 20.8 17.2 22C17.2 23.2 16.2 24.2 15 24.2ZM53 18C50.8 18 49 19.8 49 22C49 24.2 50.8 26 53 26C55.2 26 57 24.2 57 22C57 19.8 55.2 18 53 18ZM53 24.2C51.8 24.2 50.8 23.2 50.8 22C50.8 20.8 51.8 19.8 53 19.8C54.2 19.8 55.2 20.8 55.2 22C55.2 23.2 54.2 24.2 53 24.2ZM42.7 20H37.4C36.7 20 36.1 20.5 36.1 21.2V22.8C36.1 23.5 36.7 24 37.4 24H42.7C43.4 24 44 23.5 44 22.8V21.2C44 20.5 43.4 20 42.7 20ZM20 22C20 22.3 20 22.7 19.9 23H35V22.8V21.2V21H19.9C20 21.3 20 21.7 20 22ZM49.5 14H51.5C51.8 14 52 14.2 52 14.5C52 14.8 51.8 15 51.5 15H49.5C49.2 15 49 14.8 49 14.5C49 14.2 49.2 14 49.5 14Z" fill="#8F949B"/>
                    </svg>):null
                }
            </>

        )
    }

}


export default Car

Car.propTypes = {
    typeCar: string
}

Car.defaultProps = {
    typeCar: 'refrigerator'
}