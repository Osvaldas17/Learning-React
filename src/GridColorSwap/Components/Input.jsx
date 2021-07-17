import React, {useContext} from 'react'

import {GridCubeContext} from "../GridCubeContext";

export default function GridInput() {

    const {cubeColor,setColor,cubeArr,setCubeArr,setChosenColor} = useContext(GridCubeContext)

    console.log(cubeColor)

    function selectedColorFn(color) {
        setChosenColor(color)
    }

    return (
        <div className='color-btn-con'>
            <button
                onClick={() => {
                    selectedColorFn(cubeColor[1])
                    cubeArr.forEach((e) => {
                    })
                }}
            >YELLOW</button>
            <button
                onClick={() => {
                    selectedColorFn(cubeColor[2])
                    // cubeArr.forEach((e) => {
                    // })
                }}
            >GREEN</button>
            <button
                onClick={() => {
                    selectedColorFn(cubeColor[3])
                    cubeArr.forEach((e) => {
                    })

                }}
            >PURPLE</button>
            <button
                onClick={() => {
                    selectedColorFn(cubeColor[4])
                    cubeArr.forEach((e) => {
                    })
                }}
            >CRIMSON</button>
        </div>
    )
}