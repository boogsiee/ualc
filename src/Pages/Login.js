import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className='login-main' id="cover">
        <div className='log-cta'>
          <h1 id='cta-type1'>Your country needs you. <br/> Step up to the challenge!</h1>
          <h1 id='cta-type2'>UALC-ROTC Management System</h1>
        </div>
        <div className='log-fill'>
          <form className='frm-org-log'>

            <div className='inpt'>
              <h3>USERNAME</h3>
              <input id="log-inpt" type="text" /> 
            </div>
          
            <br/>
            
            <div className='inpt'>
              <h3>PASSWORD</h3>
              <input id="log-inpt"  type="password"  />
            </div> <br/>
            
          </form>
          <div className='log-btn-cont'>
            <button className='log-btn'><h3>LOG IN</h3></button>
          </div>

          <div className='reg-btn-cont'>
            <h4 > not yet a member? </h4>
            <Link to="/register">
              <button className='reg-btn'><h3>REGISTER NOW!</h3></button>
            </Link>
          </div>
          <div>
            
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Login