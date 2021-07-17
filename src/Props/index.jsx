import React, { useState} from "react";
import './props.css'



import HooksComponent from "./PassingProps/component";
import CollapseComponent from "./collapse/collapseComponent";
import CollapseBtn from "./collapse/collapseBtn";
import {TableContext} from "./collapse/context";

export default function Props() {

    const [counter, count] = useState(0)
    const [collapsed, setCollapse] = useState(false)

    return (

        <div className="con">
            <div className="d-flex flex-direction-column align-center">
                <HooksComponent count={count}/>
                <div>{counter}</div>
            </div>
            <br/>

            <TableContext.Provider
                value={{
                    collapsed: collapsed,
                    setCollapse: setCollapse,
                }}>
                <div className="d-flex justify-content-center">
                    <CollapseComponent/>
                    <CollapseBtn/>
                </div>
            </TableContext.Provider>

        </div>
    )
}
