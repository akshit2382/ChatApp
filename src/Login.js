import React, { useState, useRef, useEffect } from 'react';
import { Redirect,Link } from 'react-router-dom';

function Login() {

    const [username,setUsername] = useState("");

    // useEffect(()=>{
    //     localStorage.setItem("username",username);
    // },[username]);

    const clickHandler = () => {
        localStorage.setItem("username",username);
    }

    return (
        <>
            <h3>Enter Username</h3>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <Link to={{ pathname: "/chat" , param1: username }}>
                <button onClick={clickHandler}>submit</button>
            </Link>
        </>
    )
}

export default Login;
