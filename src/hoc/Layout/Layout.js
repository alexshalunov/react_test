import React from 'react'
import './Layout.scss';
import LiNavLink from '../../components/LiNavLink/LiNavLink'

import Tabs from '../../components/Tabs'


class Layout extends React.Component {
    render() {
        return (
            <>
                <div className="master__nav">
                    Navigation
                    <ul>
                        <LiNavLink to='/' exact>Home</LiNavLink>
                        <LiNavLink to='/bids'>BIDS</LiNavLink>
                    </ul>
                </div>        
                <div className="master__container">

                    <Tabs />

                    <div className="tabcontainer">
                        { this.props.children }
                    </div>

                </div>
            </>
        )
    }
}

export default Layout