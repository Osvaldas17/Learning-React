import React from 'react'
import './css.css'


import HomeworkShoppingCart from "./shoppingList/index";

export default class Index extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="container">
                    <h1>Shopping List</h1>
                    <HomeworkShoppingCart />
                </div>
            </section>
        )
    }
}