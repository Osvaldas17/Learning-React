import React from 'react'

import {
    HashRouter as Router,Link, Route, Switch
} from "react-router-dom";

import LearningRedux from "./ReduxLearning-1/LearningRedux";
import LearningRedux2 from "./ReduxLearning-2/LearningRedux2";

export default function LearningReduxIndex() {
    return (
        <Router>
            <div style={{
                display: 'flex'
            }}>
                <div>
                    <Link to="/LearningReduxIndex">Redux 1</Link>
                </div>
                <div>
                    <Link to="/LearningReduxIndex/LearningRedux2">Redux 2</Link>
                </div>
            </div>
            <Switch>
                <Route path="/LearningReduxIndex/LearningRedux2">
                    <h1>Learning redux 2</h1>
                    < LearningRedux2/>
                </Route>
                <Route path="/LearningReduxIndex">
                    <h1>Learning redux 1</h1>
                    < LearningRedux/>
                </Route>
            </Switch>
        </Router>
    )
}