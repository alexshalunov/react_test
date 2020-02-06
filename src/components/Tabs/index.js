import React from 'react'
import './Tabs.scss'
import LiNavLink from '../../components/LiNavLink/LiNavLink'

export default class Tabs extends React.Component{
    render(){
        return(
            <div className="tabs">
                <ul className="tabs__list">
                    <LiNavLink to='/' exact className="tabs_item">Home</LiNavLink>
                    <LiNavLink to='/bids' className="tabs_item">BIDS</LiNavLink>
                </ul>
            </div>            
        )
    }
}