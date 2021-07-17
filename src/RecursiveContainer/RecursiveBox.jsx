import React from "react";
import './RecursiveBox.css'

export default class RecursiveBox extends React.Component {
    constructor(props) {
        super(props);
        this.state.bgColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    }
    state = {
        bgColor: null,
    };
    render() {
        const { depth: depthValue, size } = this.props

        if (depthValue >= size) return <div />;
        if (depthValue === undefined || size === undefined) return <div />;

        return (
            <div
                // onMouseMove={(e) => this.onMouseMove(e)}
                className="recursive-box"
                style={{
                    // background: this.state.bgColor,
                    background: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
                }}
            >
                <RecursiveBox depth={depthValue + 1} size={size} />
            </div>
        );
    }
}


