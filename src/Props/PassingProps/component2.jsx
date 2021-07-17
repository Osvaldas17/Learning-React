import React, {useState} from "react";

import HooksComponent3 from "./component3";

export default function HooksComponent2({count}) {

    return (
        <div className="gameCon">
            <HooksComponent3 count={count} />
            <button
                onClick={() => count((x) => x + 100)}
            >Click Me</button>
            <br/>
        </div>
    )
}