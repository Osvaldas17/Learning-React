import { createContext, useContext, useMemo, useState } from 'react'
import './index.css'

const TableLesson11Context = createContext({
    list: [],
    setSelectedItem: (id) => {},
    removeFromList: (id) => {},
    addToList: (item) => {},
})

const formInputNames = {
    name: 'name-username',
    surname: 'surname',
    age: 'age',
    email: 'email',
    address: 'address',
    job: 'job',
}

function Form() {
    const { addToList } = useContext(TableLesson11Context)
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                const { target } = e
                const item = {}
                Object.values(formInputNames).forEach((inputName) => {
                    item[inputName] = target[inputName].value
                })
                addToList(item)
            }}
            className="lesson-11-table"
        >
            <label>
                Name
                <input name={formInputNames.name} type="text" />
            </label>
            <label>
                Surname
                <input name={formInputNames.surname} type="text" />
            </label>
            <label>
                Email
                <input name={formInputNames.email} type="text" />
            </label>
            <label>
                Address
                <input name={formInputNames.address} type="text" />
            </label>
            <label>
                Job
                <input name={formInputNames.job} type="text" />
            </label>
            <label>
                Age
                <input name={formInputNames.age} type="text" />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

function Cell({ id }) {
    const { list, setSelectedItem, removeFromList } =
        useContext(TableLesson11Context)
    const {
        [formInputNames.name]: name,
        [formInputNames.age]: age,
        [formInputNames.email]: email,
        [formInputNames.surname]: surname,
        [formInputNames.address]: address,
        [formInputNames.job]: job,
    } = useMemo(() => {
        return list.find(({ id: itemId }) => itemId === id)
    }, [id, list])
    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{surname}</td>
            <td>{address}</td>
            <td>{job}</td>
            <td>
                <button onClick={() => setSelectedItem(id)} type="button">
                    Edit
                </button>
            </td>
            <td>
                <button onClick={() => removeFromList(id)} type="button">
                    Remove
                </button>
            </td>
        </tr>
    )
}

function Table() {
    const { list } = useContext(TableLesson11Context)
    const generateList = useMemo(
        () => list.map(({ id }) => <Cell key={id} id={id} />),
        [list]
    )
    return (
        <table>
            <tbody>{generateList}</tbody>
        </table>
    )
}

function EditPage() {
    const { editItem, selectedItem, setSelectedItem } =
        useContext(TableLesson11Context)
    return (
        <div className="lesson-11-edit-page">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const { target } = e
                    const item = {}
                    Object.values(formInputNames).forEach((inputName) => {
                        if (target[inputName]?.value) {
                            item[inputName] = target[inputName].value
                        }
                    })
                    editItem(selectedItem, item)
                    setSelectedItem(null)
                }}
            >
                <label>
                    Name
                    <input name={formInputNames.name} type="text" />
                </label>
                <label>
                    Age
                    <input name={formInputNames.age} type="text" />
                </label>
                <label>
                    Surname
                    <input name={formInputNames.surname} type="text" />
                </label>
                <label>
                    Address
                    <input name={formInputNames.address} type="text" />
                </label>
                <label>
                    Email
                    <input name={formInputNames.email} type="text" />
                </label>
                <label>
                    Job
                    <input name={formInputNames.job} type="text" />
                </label>
                <button type="submit">Change</button>
            </form>
        </div>
    )
}

export default function TableLesson11() {
    const [list, setList] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const removeFromList = (id) =>
        setList((oldList) => {
            const newList = [...oldList]
            const index = newList.findIndex(({ id: itemId }) => itemId === id)
            if (index >= 0) {
                newList.splice(index, 1)
            }
            return newList
        })

    const addToList = (item) =>
        setList((oldList) => [
            {
                ...item,
                // Nenaudoti tokio id geno
                id: Math.floor(Math.random() * 10000),
            },
            ...oldList,
        ])

    const editItem = (id, newItem) =>
        setList((oldList) => {
            const newList = [...oldList]
            const item = newList.find(({ id: itemId }) => itemId === id)
            Object.entries(newItem).forEach(([key, value]) => (item[key] = value))
            return newList
        })

    return (
        <div>
            <TableLesson11Context.Provider
                value={{
                    list,
                    setSelectedItem,
                    removeFromList,
                    addToList,
                    selectedItem,
                    editItem,
                }}
            >
                <Form />
                <Table />
                {selectedItem && <EditPage />}
            </TableLesson11Context.Provider>
        </div>
    )
}