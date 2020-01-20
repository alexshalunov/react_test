import React from 'react'
import './BidList.scss';

import BidItem from './BidItem'



const BidList = props => {
    return (
        <table className="table_grid">
            <thead>
                <tr>
                    <th></th>
                    <th>№</th>
                    <th>Дата загрузки</th>                                                                        
                    <th>Статус</th>
                    <th>Направление перевозки</th>
                    <th>Тип ТС</th>                                                                        
                    <th>Организатор</th>
                    <th>Ставка</th>
                    <th>Действие</th>                                                                                                                                                
                </tr>
            </thead>
            <tbody>
                
                { props.bids.map((bid, index) => {
                    return(
                        <BidItem
                            bid={bid}
                            key={index}
                            onBidClick = {props.onBidClick}
                        />
                    )
                })}

            </tbody>
        </table>        
    )
}


export default BidList
