import React, {Component} from 'react'
import './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <>
                <div className="master__nav">
                    Navigation
                </div>        
                <div className="master__container">

                    <div className="tabs">
                        <ul className="tabs__list">
                            <li className="tabs_item">
                                Home
                            </li>
                            <li className="tabs_item">
                                Общая информация
                            </li>
                            <li className="tabs_item active">
                                Собственные
                            </li>                    
                        </ul>
                    </div>

                    <div className="tabcontainer">
                        { this.props.children }
                    </div>

                </div>
            </>
        )
    }
}

export default Layout