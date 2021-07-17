import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import FormData from "./Form/formData";
import FormEdit from "./Form/formEdit";
import React, {useState} from "react";
import FormToFill from "./Form/form";
import './form.css'

import {FormContext} from "./FormContext/FormContext";


export default function IndexForm() {

    const [formData, setFormData] = useState([])
    const [selectedId,setSelectedId] = useState('')
    console.log(formData)

    return (
        <Router>
        <div className='width-100'>
            <div className="navBar">
                <div>
                    <Link to="/IndexForm">Form</Link>
                </div>
                <div>
                    <Link to="/IndexForm/FormData">Form data</Link>
                </div>
            </div>
            <FormContext.Provider
                value={{
                    formData: formData,
                    setFormData: setFormData,
                    selectedId: selectedId,
                    setSelectedId: setSelectedId,
                }}
            >
            <Switch>
                <Route path="/IndexForm/FormData">
                    <h1 className="page-name">Form data</h1>
                    <FormData formData={formData} setFormData={setFormData} setSelectedId={setSelectedId} />
                </Route>
                <Route path="/IndexForm/editFormData">
                    <h1 className="page-name">Edit form</h1>
                    <FormEdit formData={formData} setFormData={setFormData} selectedId={selectedId} />
                </Route>
                <Route path="/IndexForm">
                    <h1 className="page-name">Fill form</h1>
                    <FormToFill formData={formData} setFormData={setFormData} />
                </Route>
            </Switch>
            </FormContext.Provider>
        </div>
        </Router>
    )
}
