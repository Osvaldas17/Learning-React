import React,{useContext} from "react";

import {TableContext} from "./context";

export default function CollapseComponent() {

    const {collapsed} = useContext(TableContext)

    return (
        <div
            style={{
                width: "300px",
                height: collapsed ? "0" : "300px",
                background: "rgb(254,232,109)",
                transition: "ease-in-out 0.2s",
            }}>
        </div>
    )
}