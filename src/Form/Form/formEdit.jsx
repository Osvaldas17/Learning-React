import React, {useContext} from 'react'
import {FormContext} from "../FormContext/FormContext";
import {formKeys} from "../FormKeys/FormKeys";
import { useHistory } from "react-router-dom";


export default function FormEdit() {

    const {formData, selectedId} = useContext(FormContext)

    const history = useHistory()

    console.log(selectedId)

    const el = formData.find(({id}) => selectedId === id)
    console.log(el)

    return (
        <div className="w-100">
            <div className='form bg-edit'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        Object.keys(formKeys).forEach((key) => {
                                el[key] = e.target[key].value
                            }
                        );
                        console.log(el)
                        history.push("/IndexForm/FormData")
                    }}
                    className='form' action="">
                    <label>Username: </label>
                    <input defaultValue={el.username} name={formKeys.username} type="text"/>
                    <label>Full Name: </label>
                    <input defaultValue={el.fullName} name={formKeys.fullName} type="text"/>
                    <label>Email: </label>
                    <input defaultValue={el.email} name={formKeys.email} type="email"/>
                    <label>Age: </label>
                    <input defaultValue={el.age} name={formKeys.age} type="text" maxLength="3"/>
                    <button type="submit">Submit
                    </button>
                </form>
            </div>
        </div>
    )
}