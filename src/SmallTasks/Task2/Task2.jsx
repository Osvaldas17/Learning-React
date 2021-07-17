import React,{useState,useEffect} from 'react'

export default function Task2(){

    const [images,setImages] = useState([
        'https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg',
        'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
        'https://i2.wp.com/thelosangelesbeat.com/wp-content/uploads/2016/11/15183911_10154817882785087_915588434_o-e1479729681859.jpg?resize=320%2C363'
    ])

    const [imageToShow,setImage] = useState('https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg')

    useEffect(() => {
        let count = 1
        const changeImg = setInterval(() => {
            setImage(images[(count += 1) % 3])
            console.log(count)
        }, 1000)
        return () => {
            clearInterval(changeImg)
        }
    },[])

    return (
        <div>
            <div className='catWrap'>
                <img className='maxImg' src={imageToShow} alt=""/>
            </div>
        </div>
    )
}