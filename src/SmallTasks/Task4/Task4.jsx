import React, {useState} from 'react'

export default function Task4() {

    const [fibonacci ,setFibonacci ] = useState([])

    const fib = () => {
        let x = fibonacci.slice(-2)
        let c = x[0] + x[1]
        if (fibonacci.length >= 2) {
            setFibonacci([...fibonacci,c])
        } else {
            setFibonacci([...fibonacci,1])
        }
    }

    return (

        <div>
            <div>
                <button onClick={() => fib()}>Fibonacci
                </button>
            </div>
            <div className='CubeDiv'>{fibonacci.map((e,index) => <div className='m-10' key={index}>{e}</div>)}</div>
        </div>
    )
}