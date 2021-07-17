import { useEffect, useState,useMemo } from "react";


export default function Effects() {
    // incrementValue
    // incrementSize
    // incrementTime
    const [increment, setIncrement] = useState(0);
    const [incBy,setIncBy] = useState(1)
    const [incSize,setIncSize] = useState(1000)

    useEffect(() => {
        const interval = setInterval(() => {
            setIncrement((oldValue) => oldValue + Number(incBy));
        }, incSize);
        return () => {
            console.log("clearInterval", interval);
            clearInterval(interval);
        };
    }, [incSize,incBy]);
    return (
        <div>
            <div>Size</div>
            <input onChange={(e) => setIncBy(e.target.value)} type="text"/>
            <div>Update every(milliseconds)</div>
            <input onChange={(e) => setIncSize(e.target.value)} type="text"/>
            <div>{increment}</div>
        </div>

        )
}

export function Rectangle() {

    const [data, updateData] = useState([])
    const [updated, updatedSet] = useState([])

    useEffect(() => {
        const getData = setInterval(() => {
            fetch('https://simutis.dev/api/generate-rectangle')
                .then((response) => response.json())
                .then((receivedData) => {
                    updatedSet(receivedData.updated)
                    updateData(receivedData.data)
                });
        }, 1000)
        return () => {
            clearInterval(getData)
        }
    }, [])

    const rectangleData = useMemo(() => {
        let allSum = 0
        for (let i = 0; i < data.length; i++) {
            console.log(data.length)
            for (let k = 0; k < data[i].length; k++) {
                allSum += Number(data[i][k])
            }
        }
        return allSum

    }, [updated]);

    return (
        <div>
            <div>RENDER ON FETCH UPDATED</div>
            <div>{rectangleData}</div>
        </div>
    )
}
