import React, {Component} from 'react'

class InfoIco extends Component{

    render(){
        return(
            <svg className="infoIcoSvg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle" cx="15" cy="15" r="11.5"  stroke="#8F949B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9ZM15 12C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21C15.5523 21 16 20.5523 16 20V13C16 12.4477 15.5523 12 15 12Z" fill="#8F949B"/>
            </svg>
        )
    }

}


export default InfoIco
