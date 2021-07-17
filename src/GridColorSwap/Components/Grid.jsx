import React,{useContext,useMemo,useEffect} from 'react'

import {GridCubeContext} from "../GridCubeContext";

export default function GridCube() {

    const {
        gridSize,
        setGridSize,
        cubeColor,
        cubeArr,
        setCubeArr,
        selectedColor,
        setSelectedColor,
        chosenColor
    } = useContext(GridCubeContext)

    const getCubes = useMemo(() => {
        let cube = []

        for (let w = 0; w < gridSize; w++) {
            cube.push({active: false, colorInc: 1})
            for (let h = 1; h < gridSize; h++) {
                cube.push({active: false, colorInc: 1})
            }
        }
        console.log(cube)
        return cube
    }, [gridSize])

    return (
        <div className="cube-wrapper"
             style={{
                 width: gridSize * 54 + 'px'
             }}
        >{getCubes.map((el, index) => (
                <div key={index} className='smCube'
                     style={{
                         backgroundColor: el.active
                         // backgroundColor: el.active ? cubeColor[el.colorInc] : cubeColor[0]
                     }}
                     onClick={() => {
                         el.active = chosenColor
                         console.log(el)
                         setCubeArr([...getCubes])
                     }
                     }
                />
            )
        )}</div>
    )
}
