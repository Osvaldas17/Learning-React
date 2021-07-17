import React from "react";

import HooksComponent1 from "./component1";

export default function HooksComponent({count}) {

    return (
        <div className="gameCon">
            <HooksComponent1 count={count}/>
            <button
                onClick={() => count((x) => x + 1)}
            >Click Me</button>
            <br/>
        </div>
    )
}