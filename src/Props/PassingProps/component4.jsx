import React from "react";

import HooksComponent5 from "./component5";

export default function HooksComponent4(props) {

    const {count} = props

    return (
        <div className="gameCon">

            <HooksComponent5 count={count} />

            <button
                onClick={() => count((x) => x + 10000)}
            >Click Me</button>
            <br/>
        </div>
    )
}