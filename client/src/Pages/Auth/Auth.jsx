import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import Icon from "../../Assets/icon.png";
import AboutAuth from './AboutAuth';
import { signup,login } from '../../actions/auth.js';

const Auth = () => {
  const [isSignup,setSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob,setDob] = useState('');

  const dispatch=useDispatch();
  const navigate= useNavigate();

  const handleSwitch=()=>{
    setSignup(!isSignup);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email && !password && !dob){
      alert("Enter Email and Password first");
    }
    if(isSignup){
      if(!name){
        alert("Enter a Name to continue");
      }
      dispatch(signup({name,email,dob,password},navigate));
    }
    else{
      dispatch(login({email,password},navigate));
    }
  }

  return (
    
      <section className='auth-section'>
      {isSignup && <AboutAuth/>}
        <div className="auth-container-2">
          {!isSignup && <img src={Icon} alt='stack overflow' className='login-logo'></img>}
          <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id='name' name='name' placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}/>
            </label>
          )}
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            {isSignup && (
              <label htmlFor="dob">
              <h4>DOB</h4>
              <input type="date" name='dob' id='dob' placeholder='DOB' onChange={(e)=>{setDob(e.target.value)}}/>
            </label>
            )}
            <label htmlFor="password">
              <div style={{display:"flex" ,justifyContent:"space-between"}}>
                <h4>Password</h4>
                {!isSignup && <p style={{color:'#007ac6',fontSize:"13px"}}>Forgot Password?</p>}
              </div>
              <input type="password" name='password' id='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
              {isSignup && <p style={{color:'#666767', fontSize:"13px"}}>Passwords must contain at least eight<br/>characters, including at least 1 letter and 1<br/>number.</p>}
            </label>
            {
              isSignup && (
                <label htmlFor="check">
                  <input type="checkbox" id='check' />
                  <p style={{fontSize:"13px"}}>Opt-in to receive occasional product<br/> updates, user research invitations, company<br/> announcements, and digests.</p>
                </label>
              )
            }
            <button type='submit' className='auth-btn'>{ isSignup?'Sign in':'Log in'}</button>
            {
              isSignup && (
                <p style={{color:'#666767', fontSize:"13px"}}>By clicking “Sign up”, you agree to our <span style={{color:'#007ac6'}}>terms of<br/> service</span>,<span style={{color:'#007ac6'}}> privacy policy</span> and 
                <span style={{color:'#007ac6'}}> cookie</span> policy</p>
              )
            } 
          </form>
          <p>
            {isSignup?'Already have an account?':"Don't have an account?" }
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?"Log in":"Sign in"}</button>
          </p>
        </div>
      </section>
    
  )
}

export default Auth;