import {createContext} from 'react'

export const GridCubeContext = createContext({
    gridSize: 2,
    setGridSize: () => {},
    cubeColor: [],
    setColor: () => {},
    cubeArr: [],
    setCubeArr: () => {},
    selectedColor: '',
    setSelectedColor: () => {},
    chosenColor: '',
    setChosenColor: () => {},
})