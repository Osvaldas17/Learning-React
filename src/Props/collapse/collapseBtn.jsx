import React,{useContext} from 'react'

import {TableContext} from "./context";

export default function CollapseBtn() {

    const {setCollapse} = useContext(TableContext)

    return (
        <div>
            <button onClick={() => {
                setCollapse((x) => {
                    x = !x
                    return x
                }
                )
            }}
            >Collapse
            </button>
        </div>
    )

}

