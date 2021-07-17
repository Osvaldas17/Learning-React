import React,{useState,useEffect,useMemo} from 'react'
import ImperativeHandle from "./useImperativeHandle";

export default function React280621() {
    const images = [
        'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
        'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
        'https://i2.wp.com/thelosangelesbeat.com/wp-content/uploads/2016/11/15183911_10154817882785087_915588434_o-e1479729681859.jpg?resize=320%2C363'
    ]

    const imgIndex = useGetRandomNumberAfterInterval(1000,1,images)
    return (
        <div>
            <div className='catWrap'>
                <img style={{
                    width: '350px',
                    height: '250px'
                }} src={imgIndex} alt=""/>
                <ImperativeHandle />
            </div>
        </div>
    )
}

function useGetRandomNumberAfterInterval(interval,incBy,givenArray) {

    const arr = useMemo(() => givenArray,[])
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const counting = setInterval(() => {
            setNumber( old => (old + incBy) % arr.length)
        }, interval )
        return () => {
            clearInterval(counting)
        }
    },[number])

    return arr[number]
}




