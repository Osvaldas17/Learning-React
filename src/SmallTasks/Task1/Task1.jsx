import React,{useState} from 'react'

export default function Task1(){

    const [style,setStyle] = useState({
        width: 200,
        height: 200,
        color: 'rgb(254,232,109)'
    })
    console.log(style)

    return (
        <div>
        <div>
            <span>Height</span>
            <input type="text" onChange={(e) => setStyle({...style,height: e.target.value})}/>
            <span>Width</span>
            <input type="text" onChange={(e) => setStyle({...style,width: e.target.value})}/>
            <button onClick={() => {
                setStyle({...style,color: '#' + Math.floor(Math.random()*16777215).toString(16)})
            }}>Swap Color</button>
        </div>
            <div className='CubeDiv'>
                <div style={{
                    backgroundColor: style.color,
                    width: `${style.width}px`,
                    height: `${style.height}px`,
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}/>
            </div>
        </div>
    )
}