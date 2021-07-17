import React from "react";


export default function DataComponent({username,fullName,email,age}) {

    return (
        <div className="formData">
            <p className="m5px w25">{username}</p>
            <p className="m5px w25">{fullName}</p>
            <p className="m5px w25">{email}</p>
            <p className="m5px w25">{age}</p>
        </div>

    )
}
