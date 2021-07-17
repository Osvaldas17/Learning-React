import React, {useState} from "react";

import HooksComponent2 from "./component2";

export default function HooksComponent1({count}) {
    return (
        <div className="gameCon">
            <HooksComponent2 count={count} />
            <button
                onClick={() => count((x) => x + 10)}
            >Click Me</button>
            <br/>
        </div>
    )
}