import React, {useState} from 'react';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        //to prevent the page frome reloading and losing the state
        e.preventDefault();
        console.log(email);
    }
    
    return(
        //the fragment permits to return multiple childs
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button>Don't have an account ? Register here.</button>
        </>
    )
}