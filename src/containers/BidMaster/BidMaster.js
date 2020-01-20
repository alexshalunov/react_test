import React, {Component} from 'react'
import './BidMaster.scss'

import BidList from '../../components/BidList'

class BidMaster extends Component{

    constructor() {
        super()
        this.state = {
            // bids: []
            bids: [
                // {id: 1234, company: 'Apple', status: true, cost: 112000, step: 25000}
            ] 
        }
    }


    // state = {
    //     bids: [
    //         {number: 1234, owner: 'Apple', status: true, cost: 112000, step: 25000},
    //         {number: 763,owner: 'Amway', status: false, cost: 10400, step: 25000},
    //         {number: 2234,owner: 'Apple', status: false, cost: 112000, step: 25000},
    //         {number: 67,owner: 'Amway', status: true, cost: 112000, step: 25000},
    //         {number: 767,owner: 'Apple', status: false, cost: 312000, step: 25000},
    //         {number: 7267,owner: 'Amway', status: false, cost: 112030, step: 25000},
    //         {number: 1267,owner: 'Apple', status: true, cost: 112000, step: 25000},
    //         {number: 2267,owner: 'Amway', status: false, cost: 10400, step: 25000},
    //         {number: 6267,owner: 'Apple', status: false, cost: 112000, step: 25000},
    //         {number: 4267,owner: 'Amway', status: true, cost: 112000, step: 25000},
    //         {number: 267,owner: 'Apple', status: false, cost: 312000, step: 25000},
    //         {number: 2267,owner: 'Amway', status: false, cost: 112030, step: 25000},
    //         {number: 72127,owner: 'Google', status: true, cost: 112000, step: 25000}
    //     ]
    // }


    onBidClickHandler = (bidId) => {
        console.log('bidId: ', bidId)
    }


    componentDidMount() {
        console.log("Did Mount!")

        fetch("http://www.filltext.com/?rows=20&id={number|9999}&dateStart={date|10-10-2019,12-31-2019}&dateEnd={date|01-01-2020,02-29-2020}&status={bool}&typeTs=[1,2,3,4]&cityStart={city}&cityEnd={city}&company={business}&bid={numberLength|6}}&step={numberLength|3}}")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    bids: data
                })
            })

    }
        


    render() {
        return(
            <div className="gridcontainer">
                <div className="gridtitle">Доступные торги</div>
                <div className="gridfilter">Фильтры</div>
                <div className="gridcontent">
                    <div className="wrap">

                        <BidList
                            bids = {this.state.bids}
                            onBidClick = {this.onBidClickHandler}
                        />
        
                    </div>
                </div>
                <div className="gridnav">
                    Навигация
                </div>
            </div>
        )
    }
}

export default BidMaster