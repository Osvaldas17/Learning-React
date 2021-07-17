import React from 'react'

import ShoppingList from "./components/ShoppingList";


export default class HomeworkShoppingCart extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="shopping-cart">
                    <ShoppingList />
                </div>
            </section>
        )
    }
}