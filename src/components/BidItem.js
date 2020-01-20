import React from 'react'
import './BidItem.scss';

const BidItem = props => {

    // console.log(props)

    return(
        <tr className="BidItem">
            <td>1</td>                                    
            <td>{props.bid.id}</td>
            <td>30.12.19 - 01.12.20</td>
            <td>
                {(props.bid.status)? 'Завершен': 'Открыт'}
            </td>
            <td>Иваново - Вичуга</td>
            <td>6</td>
            <td>
                {props.bid.company}
            </td>
            <td>{props.bid.cost}₽</td>    
            <td>
                {props.bid.status ? (
                    <button className="goBtn">Поехали</button>
                ) : (
                    <button onClick={() => props.onBidClick(props.bid.id)} className="goBtn">Поставить</button>
                )}
                
                
            </td>
        </tr>          
    )
}

export default BidItem