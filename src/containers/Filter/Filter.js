import React, {Component} from 'react'
import './Filter.scss'

class Filter extends Component{

    constructor() {
        super()
        this.state = {
            filter: 1
        }
    }

    componentDidMount() {

    }
        
    render() {
        return(
            <ul className="filters">
                <li className="active"><button>Все</button></li>
                <li><button>Избранные</button></li>
                <li><button>Участие</button></li>
            </ul>
        )
    }
}

export default Filter