import React, {useState} from 'react'


function Grid() {

    const [clicked, setClicked] = useState(false)

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    return (
        <div
            className='task-5-cell'
            onClick={() => setClicked(true)}
            style={{
                backgroundColor: randomColor
            }}
        >
            {clicked ? (
                <>
                    <Grid/>
                    <Grid/>
                    <Grid/>
                    <Grid/>
                </>
            ) : null}
        </div>
    )
}

export default function Task6() {
    return (
        <div className="task-5-container">
            <Grid />
        </div>
    )
}

