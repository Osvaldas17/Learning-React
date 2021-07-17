import React,{useContext,useState} from 'react'
import GridCube from "./Components/Grid";
import GridInput from "./Components/Input";
import './gridCubes.css'

import {GridCubeContext} from './GridCubeContext'

export default function GridIndex() {

    const [gridSize,setGridSize] = useState(6)
    const [cubeColor,setColor] = useState([
        'rgb(248,249,250)',
        'rgb(254,232,109)',
        'rgb(180,217,179)',
        'rgb(186,104,200)',
        'rgb(220,53,69)'
    ])
    const [cubeArr,setCubeArr] = useState([])
    const [selectedColor,setSelectedColor] = useState('')
    const [chosenColor,setChosenColor] = useState('rgb(254,232,109)')

    return (
        <GridCubeContext.Provider
            value={{
                gridSize: gridSize,
                setGridSize: setGridSize,
                cubeColor: cubeColor,
                setColor: setColor,
                cubeArr: cubeArr,
                setCubeArr: setCubeArr,
                selectedColor: selectedColor,
                setSelectedColor: setSelectedColor,
                chosenColor: chosenColor,
                setChosenColor: setChosenColor,
            }}
        >
            <div className='color-btn-con'>
                <button onClick={() => {
                    setGridSize(gridSize !== 0 ? gridSize - 1 : 0)
                }}
                >-</button>
                <div>{gridSize} x {gridSize}</div>
                <button
                    onClick={() => {
                        setGridSize(gridSize <= 9 ? gridSize + 1 : 10)
                    }}
                >+</button>
            </div>
            <GridInput/>
            {/*<div className='selected-color'*/}
            {/*    style={{*/}
            {/*        backgroundColor:chosenColor*/}
            {/*    }}*/}
            {/*/>*/}
            <div className="cube-wrapper">
                <GridCube/>
            </div>
        </GridCubeContext.Provider>
    )
}