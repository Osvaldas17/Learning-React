import React from 'react'
import TypeScriptIntro from "./learningTypescript1";



export default function TypescriptLearningIndex() {

    const randomObj = {
        user:{
            name: 'Ozzy',
            surname: 'yolo',
            age: 55
        },
        user2:{
            name: 'YOOOLO',
            surname: 'yolosdfsdf',
            age: 77
        }

    }

    const arr = [{key:'value'},{key1: 'value1'}]

    return (
        <div>
            <TypeScriptIntro userId={'userId'} onClick={() => alert('Nooooo TypeScript NOOOOOOO')} object={randomObj} randomNumber={99999999} array={arr}  />
        </div>
    )
}

