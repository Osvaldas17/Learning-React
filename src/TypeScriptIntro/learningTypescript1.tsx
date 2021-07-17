
type TypeScriptIntro1 = {
    onClick: () => void
    array: { [key: string]: string }[]
    object: {
        name: string,
        surname: string,
        age: number
    }[]
    userId: string
    loading?: boolean
    randomNumber: number
}

export default function TypeScriptIntro(props: TypeScriptIntro1) {

    console.log(props.array)
    console.log(props.object)

    return (
        <div>
            <p>{props.userId}</p>
            <p>{props.randomNumber}</p>
            <button onClick={props.onClick}>Click me</button>
        </div>
    )
}




