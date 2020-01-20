import React, {Component} from 'react'
import './BidMaster.scss'

import BidList from '../../components/BidList'

class BidMaster extends Component{

    constructor() {
        super()
        this.state = {
            loading: false,
            bids: [] 
        }
    }

    onBidClickHandler = (bidId) => {
        console.log('bidId: ', bidId)
    }


    componentDidMount() {
        this.setState({loading: true})
        fetch("http://www.filltext.com/?rows=100&id={number|9999}&dateStart={date|10-10-2019,12-31-2019}&dateEnd={date|01-01-2020,02-29-2020}&status={bool}&typeTs=[1,2,3,4]&cityStart={city}&cityEnd={city}&company={business}&bid={numberLength|6}}&step={numberLength|3}}")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    bids: data,
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
                        {(this.state.loading)? 'Loading':
                            <BidList
                                bids = {this.state.bids}
                                onBidClick = {this.onBidClickHandler}
                            />                        
                        }

        
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