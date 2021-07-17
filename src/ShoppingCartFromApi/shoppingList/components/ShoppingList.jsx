import React from 'react'

import ShoppingTextElement from "./ShoppingTextElement";




export default class ShoppingList extends React.Component {

    state = {
        data: [],
        cart: [],
        totalSum: 0,
    }
    constructor(props) {
        super(props);
        const data = [];
        fetch("https://simutis.dev/api/generate-shopping-cart?limit=10")
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    data
                })
            );

        this.state.data = data;
    }

    render() {

        return (
            <div>
                <div className="d-flex space-between p20px bold border3">
                    <div className="width-30">Name</div>
                    <div className="width-30">Price</div>
                    <div className="width-20">Vegan</div>
                    <div className="width-10">Add</div>
                </div>

                <div>
                    {this.state.data.map((el,index) => (
                        <div key={el.id} className="d-flex space-between border">
                            <ShoppingTextElement name={el.name} price={el.price} vegan={el.vegan}/>
                            <button
                                className="width-10"
                                onClick={() => {
                                    this.setState((state, props) => {
                                        const element = this.state.data.slice(index, index + 1);
                                        this.state.cart = [...element, ...this.state.cart]
                                        let totalSum = 0
                                        state.cart.forEach((x) => {
                                            totalSum += x.price
                                        })
                                        return { data: [...state.data] , cart: [...state.cart], totalSum};
                                    });
                                }}
                            >Add</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h1>Cart</h1>
                </div>
                <div className="d-flex space-between p20px bold border3">
                    <div className="width-30">Name</div>
                    <div className="width-30">Price</div>
                    <div className="width-20">Vegan</div>
                    <div className="width-10">Remove</div>
                </div>
                <div>
                    {this.state.cart.map((el,index) => (
                        <div key={index} className="d-flex space-between border">
                            <ShoppingTextElement name={el.name} price={el.price} vegan={el.vegan}/>
                            <button
                                className="width-10"
                                onClick={() => {
                                    this.setState((state, props) => {
                                        state.cart.splice(index, 1);
                                        let totalSum = 0
                                        state.cart.forEach((x) => {
                                            totalSum += x.price
                                        })
                                        return { data: [...state.data] , cart: [...state.cart], totalSum };
                                    });
                                }}
                            >Remove</button>
                        </div>
                    ))}
                </div>
                <div className="d-flex p20px bold border3">
                    <div className="width-30">Total : </div>
                    <div>
                        {this.state.totalSum.toFixed(2)} $
                    </div>
                </div>
                <div className="d-flex p20px bold border3">
                    <button
                        onClick={() => this.setState({
                                cart: [],
                                totalSum: 0
                            }
                        )
                        }

                        className="width-30"
                    >Clear Cart</button>
                </div>
            </div>
        )
    }
}