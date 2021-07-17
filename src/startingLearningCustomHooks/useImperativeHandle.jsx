import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'

function ChangeValueFunction({}, ref) {
    const [value, setValue] = useState(10)
    useImperativeHandle(
        ref,
        () => ({
            getInternalState() {
                return value
            },
            changeValue(value) {
                setValue(value)
            },
        }),
        [value]
    )
    return value
}

const ChangeValueFunctionWithRef = forwardRef(ChangeValueFunction)

export default function ImperativeHandle() {
    const [value, setValue] = useState(10)
    const changeValueRef = useRef(null)
    useEffect(() => {
        if (changeValueRef.current) {
            changeValueRef.current.changeValue(value)
        }
    }, [value, changeValueRef.current])
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button
                type="button"
                onClick={() => console.log(changeValueRef.current.getInternalState())}
            >
                Get value
            </button>
            <ChangeValueFunctionWithRef ref={changeValueRef} />
        </div>
    )
}