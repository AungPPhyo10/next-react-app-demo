'use client';
import postContact from './post-contact' 
import {useState, useTransition} from 'react'
import Spinner from './spinner'

export default function Form() {
    const [message, setMessage] = useState("");
    const [displayMessage, setDisplayMessage] = useState(false);
    const [isPending, startTransition] = useTransition();

    function handleSubmit(data) {
        const name = data.get('name')
        const email = data.get('email')

        startTransition(() => {
            let message;

            postContact({name,email})
            .then((json) => {
                console.log(json)

                const errorMessage = json.ErrorMessage;

                if (errorMessage && errorMessage.includes('already exists')) {
                    message = 'Email is already subscribed'
                } else if (errorMessage && errorMessage.includes('properties')) {
                    message = 'Invalid email format'
                } else {
                    message = 'Successfully subscribed!'
                }

                setMessage(message);
                setDisplayMessage(true);
            })
        })
  
    }

    return (
        <form action={handleSubmit} className="grid gap-[2] w-[270px]">
            <label htmlFor="name">Name : </label>   
            <input type="text" id="name" name="name" className="border-2 me-2" required/>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" className="border-2 me-2" required/>
            <button type="submit" className={`button bg-blue-400 text-center text-white p-1 disabled:bg-slate-100 disabled:text-slate-500`} 
            disabled={isPending}>{isPending ? <span className="flex justify-center items-center h-[36px] "><Spinner/>Sending...</span> : 'Submit'}</button>
            {displayMessage ? message : <></>}
        </form>
    )
}