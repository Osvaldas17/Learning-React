import React ,{useState}from 'react'
import {
    HashRouter as Router,
    Link,
    Route,
    Switch,
} from "react-router-dom";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import Task4 from "./Task4/Task4";
import Task5 from "./task5/Task5";
import Task6 from "./Task6/T6";
import './tasksScss.scss.css'

export default function SmallTasks() {
    return (
        <Router>
            <div className="navBar">
                <div>
                    <Link to="/SmallTasks/task1">task1</Link>
                </div>
                <div>
                    <Link to="/SmallTasks/task2">task2</Link>
                </div>
                <div>
                    <Link to="/SmallTasks/task3">task3</Link>
                </div>
                <div>
                    <Link to="/SmallTasks/task4">task4</Link>
                </div>
                <div>
                    <Link to="/SmallTasks/task5">task5</Link>
                </div>
                <div>
                    <Link to="/SmallTasks/task6">task6</Link>
                </div>
            </div>
            <Switch>
                <Route path="/SmallTasks/task1">
                    <h1 className="page-name">Task1</h1>
                    <Task1/>
                </Route>
                <Route path="/SmallTasks/task2">
                    <h1 className="page-name">Task2</h1>
                    <Task2/>
                </Route>
                <Route path="/SmallTasks/task3">
                    <h1 className="page-name">Task3</h1>
                    <Task3/>
                </Route>
                <Route path="/SmallTasks/task4">
                    <h1 className="page-name">Task4</h1>
                    <Task4/>
                </Route>
                <Route path="/SmallTasks/task5">
                    <h1 className="page-name">Task5</h1>
                    <Task5/>
                </Route>
                <Route path="/SmallTasks/task6">
                    <h1 className="page-name">Task6</h1>
                    <Task6/>
                </Route>
            </Switch>
        </Router>
    )
}
//USE REF
// export function C1() {
//     const value1 = useRef('')
//     const [reset,setReset] = useState('test')
//
//
//     return (
//         <div>
//             <C2 value1={value1} setReset={setReset} reset={reset} />
//             <input ref={value1} name='input1' type="text" defaultValue={reset}/>
//         </div>
//     )
// }
//
// export function C2({value1,setReset}) {
//
//     const handleClick = () => {
//         console.log('before ref value1',value1.current.value)
//         setReset(value1.current.value = '')
//         console.log('ref value1',value1.current.value)
//     };
//
//     return (
//         <div>
//             <button onClick={() => handleClick()} type='button'>RESET</button>
//         </div>
//     )
// }