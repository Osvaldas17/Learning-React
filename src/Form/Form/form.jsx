
import React,{ useContext } from 'react'

import {FormContext} from "../FormContext/FormContext";
import {formKeys} from "../FormKeys/FormKeys";
import { useHistory } from "react-router-dom";

export default function FormToFill() {

    const {formData,setFormData} = useContext(FormContext)
    const history = useHistory()

    console.log(formData)
    return (
        <div className="w-100">
        <div className='form'>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const { target } = e;
                    let tempObj = {
                        id: Math.random() * 9999999999,
                    }
                    Object.keys(formKeys).forEach((key) => {
                        tempObj[key] = target[key].value
                        }
                    );
                    setFormData([...formData, tempObj])
                    history.push("/IndexForm/FormData")

                    // const {
                    //     target: {
                    //         username: {value: username},
                    //         fullName: {value: fullName},
                    //         email: {value: email},
                    //         age: {value: age},
                    //     }
                    // } = e
                    // setFormData([...formData,
                    //     {
                    //         username: username,
                    //         fullName: fullName,
                    //         email: email,
                    //         age: age,
                    //         id: Math.floor(Math.random() * 99999999)
                    //     }],
                    // );
                }}
                className='form' action="">
                <label>Username:</label>
                <input name={formKeys.username} type="text"/>
                <label>Full Name:</label>
                <input name={formKeys.fullName} type="text"/>
                <label>Email:</label>
                <input name={formKeys.email} type="email"/>
                <label>Age:</label>
                <input name={formKeys.age} type="text" maxLength="3"/>
                <button type="submit">Submit</button>


            </form>
        </div>
        </div>
    )
}
