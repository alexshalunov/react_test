import React from 'react';
import { Connected } from '../Connected'

class Test extends React.Component{
    render(){        
        const { firstName, secondName, testTitle, changeFirstName, changeSecondName } = this.props
        // console.log('Test props: ', this.props)      
        return (
            <div>
                <input 
                    type="text" 
                    value={firstName} 
                    placeholder="firstName" 
                    onChange = {(event) =>{
                        changeFirstName(event.target.value)
                    }}
                />
                <input 
                    type="text" 
                    value={secondName}
                    placeholder="secondName" 
                    onChange = {(event) =>{
                        changeSecondName(event.target.value)
                    }}
                />
                <div>
                    {firstName} {secondName} 
                    <br/>
                    <b>{testTitle}</b>
                </div>

                    <Connected/>

            </div>
        );
    }
}

export default Test