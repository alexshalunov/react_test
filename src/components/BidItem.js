import React from 'react'
import './BidItem.scss';

import Star from '../img/Star'
import Car from '../img/Car'
import InfoIco from '../img/Info';
import Price from './Price'

const BidItem = props => {

    // console.log(props)
    
    const p = 90000

    return(
        <tr className="BidItem">
            <td>
                {/* <div className="star"></div> */}

                {/* <Star color="red"/> */}

                {(props.bid.isFavourite)? (
                    <Star color="gold"/>
                ):(
                    <Star/>
                )}

            </td>
            <td>
                <a className="simpleLink" href="/">{props.bid.id}</a>
            </td>
            <td>
                <div className="dateTime">
                    <div className="dateStart">30.12.19</div>
                    <div className="dateEnd">01.12.20</div>
                    <div className="timeStart">12:00</div>                    
                    <div className="timeEnd">18:00</div>               
                </div>
            </td>
            <td className="bidStatus">
                {(props.bid.status)? 'Завершен': 'Открыт'}
            </td>
            <td className="bidWay">
                    <div className="wayStart">{props.bid.cityStart}</div>
                    <div className="wayArrow">
                        &nbsp;
                    </div>
                    <div className="wayEnd">{props.bid.cityEnd}</div>
                    {props.bid.hasHint ? (
                        <div className="wayHint">
                            <button>+2</button>
                        </div>                           
                    ):null}

            </td>
            <td className="aboutCar">
                {/* {props.bid.typeTs} */}
                <div className="CarIco">
                    <Car typeCar="refrigerator"/>
                </div>
                <div className="CarInfo">
                    <InfoIco/>
                </div>
            </td>
            <td>
                {props.bid.company}
            </td>
            <td>
                <Price price={props.bid.cost}/>
            </td>    
            <td className="goCol">
                {props.bid.status ? (
                    <div className="goCol-btn"><button className="goBtn">Поехали</button></div>
                ) : (
                    <>
                        <div className="goCol-price"><Price price = {p} /></div>
                        <div className="goCol-step">Шаг: <Price price = {props.bid.step} /></div>
                        <div className="goCol-btn"><button onClick={() => props.onBidClick(props.bid.id)} className="goBtn">Поставить</button></div>
                    </>
                )}
                
                
            </td>
        </tr>          
    )
}

export default BidItem