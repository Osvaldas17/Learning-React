import React, {useState} from "react";

import HooksComponent4 from "./component4";

export default function HooksComponent3({count}) {

    return (
        <div className="gameCon">

            <HooksComponent4 count={count} />
            <button
                onClick={() => count((x) => x + 1000)}
            >Click Me</button>
            <br/>
        </div>
    )
}