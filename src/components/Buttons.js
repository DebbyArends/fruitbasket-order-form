import React from "react";

function Buttons ({typeButton, name, resetEvent, disableButton, container}) {
    return (
        <button
            type={typeButton}
            onClick={resetEvent}
            disabled={disableButton}
            className={container}
        >
            {name}
        </button>

    )
}

export default Buttons