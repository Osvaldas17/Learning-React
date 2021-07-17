import React, {useState} from "react";
import './MovableObject.css'

export default function GameIndex() {

    const [left, moveX] = useState(274)
    const [top, moveY] = useState(400)

    return (
        <div className="gameCon">
            <div>
                <div
                    className="gameCube"
                    style={{
                        left: left,
                        top: top,
                    }}
                >
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        moveY(top - 20)
                    }}
                ><i className="fas fa-arrow-up"/></button>
            </div>
            <div>
                <button
                    onClick={() => {
                        moveX(left - 20)
                    }}
                ><i className="fas fa-arrow-left"/></button>
                <button
                    onClick={() => {
                        moveY(top + 20)
                    }}
                ><i className="fas fa-arrow-down"/></button>
                <button
                    onClick={() => {
                        moveX(left + 20)
                    }}
                ><i className="fas fa-arrow-right"/></button>
            </div>
        </div>
    )
}