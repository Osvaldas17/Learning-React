import React,{useContext} from 'react'

import DataComponent from "../FormComponents/components";
import {Link} from "react-router-dom";
import {FormContext} from "../FormContext/FormContext";


export default function FormData() {

    const { formData, setFormData, setSelectedId } = useContext(FormContext)

    return (
        <div className='width-100'>
            <div className='dataRender'>
                <div>Username</div>
                <div>Full name</div>
                <div>Email</div>
                <div>Age</div>
                <div>Edit/Delete</div>
            </div>
            {formData.map((e) => (
                    <div key={e.id} className='d-flex width-100 border align-center'>
                        <DataComponent username={e.username} fullName={e.fullName} email={e.email} age={e.age}/>
                        <Link to='/IndexForm/editFormData'>
                            <button onClick={() => {
                                setSelectedId(e.id)
                            }} className="w-h-100">Edit
                            </button>
                        </Link>
                        <button
                            onClick={() => {
                                const newArr = formData.filter(item => item.id !== e.id)
                                setFormData(newArr)
                            }}
                        >X
                        </button>
                    </div>
                )
            )}
        </div>
    )

}