import React from "react";

function TextField ({description, fieldName, valueName, setting }){
    const changing = (e) => setting(e.target.value)
    return (
            <label htmlFor={fieldName}>
                {description}
                <input
                    type="text"
                    id={fieldName}
                    name={fieldName}
                    value={valueName}
                    onChange={changing}
                />
            </label>
    )
}

export default TextField