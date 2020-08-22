import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userAction';
function Signin(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error} = userSignin;
     const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/'
     useEffect(() => {
         if(userInfo) {
             props.history.push(redirect);
         }
       
         return () => {
             
         };
     },[userInfo]);

     const submitHandler = (e) => {
         e.preventDefault();
         dispatch(signin(email,password));
     }
   

return <div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Signin</h2>
            </li>
            <li>
                {loading && <div>Loading..</div>}
                {error && <div>Invalid Email and Password </div>}
            </li>
            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            </li>
            <li>
                <button type="submit" className="button primary">Signin</button>
            </li>
            <li>
                New to Super Market
            </li>
            <li>
                <Link to ={redirect==="/"? "register":"register?redirect="+ redirect} className="button secondary text-center" > Create your Account</Link>
            </li>
        </ul>
    </form>
</div>
}
export default Signin;