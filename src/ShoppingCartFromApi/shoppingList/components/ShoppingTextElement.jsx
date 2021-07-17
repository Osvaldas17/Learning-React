import React from 'react'


export default class ShoppingTextElement extends React.Component {

    render() {
        return (
            <div className='shopping-item width-100'>
                <div className="width-30">{this.props.name}</div>
                <div className="width-30">{this.props.price}</div>
                <div className="width-20">{this.props.vegan ? "Yes" : "No"}</div>
            </div>
        )
    }
}