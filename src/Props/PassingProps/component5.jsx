import React, {useState} from "react";

export default function HooksComponent5(props) {

    const {count} = props

    return (
        <div className="gameCon">
            <button
                onClick={() => count((x) => x + 100000)}
            >Click Me</button>
            <br/>
        </div>
    )
}