import React from "react";
import "./App.scss";

import {
    HashRouter as Router, Link, Route, Switch,
} from "react-router-dom";

import Effects, {Rectangle}from "./UseMemoAndIntervalData/Index";
import RecursiveBoxIndex from "./RecursiveContainer/Index";
import GameIndex from "./MovableObject/GameIndex";
import Props from "./Props/index";
import Index from "./ShoppingCartFromApi";
import IndexForm from "./Form/Index";
import Learning from "./learning";
import GridIndex from "./GridColorSwap/Index";
import SmallTasks from "./SmallTasks/SomeTasks";
import ApiContextLearning from "./reactAppApiLearning/Index";
import React280621 from "./startingLearningCustomHooks/React-28-06-21";
import LearningReduxIndex from "./Redux/LearningReduxIndex";
import TypescriptLearningIndex from "./TypeScriptIntro/learningTypescript";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="navBar">
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/memoIntervals">useMemo/FetchOnUpdate/intervals</Link>
                        </div>
                        <div>
                            <Link to="/recursiveBox">recursiveBox</Link>
                        </div>
                        <div>
                            <Link to="/movableBox">movableBox</Link>
                        </div>
                        <div>
                            <Link to="/props">props/Context</Link>
                        </div>
                        <div>
                            <Link to="/shoppingCartApi">shoppingCartApi</Link>
                        </div>
                        <div>
                            <Link to="/IndexForm">Form/Context</Link>
                        </div>
                        <div>
                            <Link to="/Learning">Learning</Link>
                        </div>
                        <div>
                            <Link to="/GridCubesColors">GridCubesColors</Link>
                        </div>
                        <div>
                            <Link to="/SmallTasks">SmallTasks</Link>
                        </div>
                        <div>
                            <Link to="/ApiContextLearning">ApiContextLearning</Link>
                        </div>
                        <div>
                            <Link to="/customHooks-ImperativeHandle">customHook/ImperativeHandle</Link>
                        </div>
                        <div>
                            <Link to="/LearningReduxIndex">Redux Learning</Link>
                        </div>
                        <div>
                            <Link to="/LearningTypescriptIndex">Learning Typescript</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/memoIntervals">
                            <h1 className="page-name">UseMemo Intervals</h1>
                            <Effects/>
                            <Rectangle/>
                        </Route>
                        <Route path="/recursiveBox">
                            <h1 className="page-name">Recursive Box</h1>
                            <RecursiveBoxIndex/>
                        </Route>
                        <Route path="/movableBox">
                            <h1 className="page-name">Movable Box</h1>
                            <GameIndex/>
                        </Route>
                        <Route path="/props">
                            <h1 className="page-name">Props</h1>
                            <Props/>
                        </Route>
                        <Route path="/shoppingCartApi">
                            <h1 className="page-name">Shopping Cart Api</h1>
                            <Index/>
                        </Route>
                        <Route path="/IndexForm">
                            <h1 className="page-name">Form</h1>
                            <IndexForm/>
                        </Route>
                        <Route path="/Learning">
                            <h1 className="page-name">Learning</h1>
                            <Learning/>
                        </Route>
                        <Route path="/GridCubesColors">
                            <h1 className="page-name">GridCubesColors</h1>
                            <GridIndex/>
                        </Route>
                        <Route path="/SmallTasks">
                            <h1 className="page-name">SmallTasks</h1>
                            <SmallTasks/>
                        </Route>
                        <Route path="/ApiContextLearning">
                            <h1 className="page-name">ApiContextLearning</h1>
                            <ApiContextLearning/>
                        </Route>
                        <Route path="/customHooks-ImperativeHandle">
                            <h1 className="page-name">React-28-06-21</h1>
                            <React280621/>
                        </Route>
                        <Route path="/LearningReduxIndex">
                            <h1 className="page-name">Redux</h1>
                            < LearningReduxIndex/>
                        </Route>
                        <Route path="/LearningTypescriptIndex">
                            <h1 className="page-name">Typescript</h1>
                            < TypescriptLearningIndex/>
                        </Route>
                        <Route path="/">
                            <h1 className="page-name">Home</h1>
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;