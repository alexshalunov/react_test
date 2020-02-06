import React from 'react'

class Home extends React.Component{        
    render(){
        const { firstName, secondName } = this.props

        // console.log('Home props: ', this.props)
        return(
            <div>
                {firstName} {secondName}
            </div>
        )
    }
}

export default Home