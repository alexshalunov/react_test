import React from 'react'
import './BidItem.scss';

import Star from '../img/Star'
import Car from '../img/Car'
import InfoIco from '../img/Info';
import Fire from '../img/Fire';
import Price from './Price'

const BidItem = props => {

    // console.log(props)
    
    const p = 90000

    const clstr = (props.bid.status && props.bid.isWin) ? 'BidItem win':'BidItem'
    return(
        <tr className={clstr}>
            <td>
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
                <span className="ellipses">
                    {props.bid.company}
                </span>
            </td>
            <td className="colPrice">
                <div className="price_cost">
                    <Price price={props.bid.cost}/>
                </div>
                {(props.bid.cost < 500000)?(
                    <div className="fireIco">
                        <Fire/>
                    </div>
                ):null}
            </td>    
            <td className="goCol">
                {props.bid.status ? (
                    props.bid.isWin ? (
                        <div className="goCol-btn">
                            <div>Ваша ставка лучшая</div>
                        </div>                        
                    ):(
                        <div className="goCol-btn"><button className="goBtn">Поехали</button></div>
                    )
                        
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