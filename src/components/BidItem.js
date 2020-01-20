import React from 'react'
import './BidItem.scss';

const BidItem = props => {

    // console.log(props)

    return(
        <tr className="BidItem">
            <td>
                {(props.bid.isFavourite)? (
                    <span className="star gold">✩</span>
                ):(
                    <span className="star black">✩</span>
                )}
            </td>
            <td>
                {props.bid.id}
            </td>
            <td>30.12.19 - 01.12.20</td>
            <td>
                {(props.bid.status)? 'Завершен': 'Открыт'}
            </td>
            <td>
                {props.bid.cityStart}
                - 
                {props.bid.cityEnd}
            </td>
            <td>
                {props.bid.typeTs}
            </td>
            <td>
                {props.bid.company}
            </td>
            <td>{props.bid.cost} ₽</td>    
            <td>
                {props.bid.status ? (
                    <button className="goBtn">Поехали</button>
                ) : (
                    <>
                        <div>Шаг: {props.bid.step}₽</div>
                        <button onClick={() => props.onBidClick(props.bid.id)} className="goBtn">Поставить</button>
                    </>
                )}
                
                
            </td>
        </tr>          
    )
}

export default BidItem