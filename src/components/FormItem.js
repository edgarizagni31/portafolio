import React, { useRef } from 'react'


export const FormItem = ( { id, title } )  => {
    const label = useRef(null);
    const input = useRef(null);

    const handleActive = ( ) => {
        label.current.classList.add('contact__label--active');
    }

    const handleDesactive = () => {
        if ( input.current.value === "") {
            label.current.classList.remove('contact__label--active');
        }
    }

    return (
        <div>
            <label 
                htmlFor = {id}  
                className = 'contact__label'
                ref = { label }
            >
                { title }
            </label>
            <input  
                id = {id} 
                className = 'contact__input'
                autoComplete = 'off'
                onFocus = { handleActive }
                onBlur = { handleDesactive }
                ref = { input }
            />
        </div>
    )
}
