
import {useSelector,Provider, useDispatch,} from "react-redux";
import {store} from "./store";
import {actions} from "./actions";


const formFields = {
    name: 'name',
    email: 'email',
    loveStory: 'loveStory',
}

function Form() {

    const {sentData} = actions
    const dispatch = useDispatch()

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '500px'
            }}
            onSubmit={(e) => {
                e.preventDefault()
                const { target } = e
                const newData = {}
                Object.values(formFields).forEach((value) => {
                    newData[value] = target[value].value
                })
                dispatch(sentData(newData))
                console.log(store.getState())
            }}
        >
            <input name={formFields.name} />
            <input name={formFields.email} />
            <textarea
                style={{
                    resize: 'none',
                    height: '200px',
                    margin: '10px'
                }}
                name={formFields.loveStory} />
            <button type="submit">Save </button>
        </form>
    )
}

function Display() {
    const data = useSelector(({data}) => data)
    return (
        <div>
            {Object.entries(formFields).map(([key, value]) => (
                <div
                    style={{
                        display: 'flex',
                        width: '500px'
                    }}
                    key={key}
                >
                    <h3
                        style={{
                        marginRight: '20px'
                    }}>{key}</h3>
                    <p>{data[value]}</p>
                </div>
            ))}
        </div>
    )
}

export default function LearningRedux() {
    return (
      <Provider store={store}>
            <Form />
            <Display />
      </Provider>
    )
}