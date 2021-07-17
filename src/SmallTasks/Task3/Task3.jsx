import React,{useState} from 'react'

export default function Task3(){

    const [style,setStyle] = useState('#FEE86D')

    function hexToRGB(hex, alpha) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    setStyle('#' + Math.floor(Math.random()*16777215).toString(16))
                }}>Swap Color</button>
                <div>{hexToRGB(style,0)}</div>
            </div>
            <div className='CubeDiv'>
                <div style={{
                    backgroundColor: style,
                    width: '300px',
                    height: '300px'
                }}/>
            </div>
        </div>
    )
}