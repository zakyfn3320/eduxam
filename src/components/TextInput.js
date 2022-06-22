import React, { useState } from 'react'

const TextInput = (props) => {

    const [focus, setFocus] = useState(false)
    const changeFocus = () => setFocus(!focus)

    return (
        <div className='w-full py-1' onFocus={changeFocus} onBlur={changeFocus}>
            <span className={`text-lg font-semibold pointer-events-none`}>{props.children} </span>
            <input className='w-full border rounded-lg p-2 hover:border-solid border-2 border-sky-500' type={props.type} />
        </div>
    )
}

export default TextInput