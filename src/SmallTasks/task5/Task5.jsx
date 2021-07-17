import React, {useState, useEffect} from 'react'

export default function Task5() {

    const [gridArr,setGridArr] = useState([])
    const [randomInt,setRandomInt] = useState(500)

    useEffect(() => {
        setRandomInt(Math.random()* 250)
        const changeColors = setInterval(() => {
            let tempArr = []
            for (let i = 0; i < 80; i++) {
                tempArr = [...tempArr, i]
            }
            setGridArr(tempArr)
        }, randomInt)
        return () => {
            clearInterval(changeColors)
        }
    },[gridArr])

    const randomColor = () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16)
    }

    return (
        <div className='parentSmCubeTasks'>
            {gridArr.map((e,index) => <div
                key={index}
                style={{
                    backgroundColor: randomColor()
                }}
                className='smCubeTasks'/>)}
        </div>
    )
}
