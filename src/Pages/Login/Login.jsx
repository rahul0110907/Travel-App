import React,{useState} from 'react'
import '../Registration/Registration.css'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/Slice";
const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch()
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [errEmail, setErrEmail] = useState("");
      const [errPassword, setErrPassword] = useState("");
  
  
      const[userEmailErr,setUserEmailError]=useState('');
      const[userPasswordError,setUserPasswordError]=useState('');
  
     
      const [successMessage, setSuccessMessage] = useState("");
      const handleEmail = (e) => {
          setEmail(e.target.value);
          setErrEmail("");
       
        };
        const handlePassword = (e) => {
          setPassword(e.target.value);
          setErrPassword("");
          
        };
  
      const handlelogIn=(e)=>{
        e.preventDefault();
        if (!email) {
          setErrEmail("Enter your email");
        }
        if (!password) {
          setErrPassword("Enter your password");
        }
        if (email && password) {
        
          signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch(setUserInfo(
        {
          _id:user.uid,
          userName:user.displayName,
          email:user.email
        }
      ))
     setSuccessMessage('Login SuccessFully , Welcome Back to Travel.net')
     setTimeout(()=>{
        navigate('/')
     })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
  
      if (errorCode.includes("auth/invalid-email")) {
        setUserEmailError("Invalid Email");
      }
      if (errorCode.includes("auth/wrong-password")) {
        setUserPasswordError("Wrong Password ! try again");
      }
      if(errorCode.includes('auth/email-not-found')){
         setUserEmailError('Email not Found . Please register first');
      }
    });
  
     
          setEmail("")
          setPassword("")
        }
      }
  return (
    <div className="main-registration-container">
            {
        successMessage?(
          <div><p>{successMessage}</p>

          </div>
        ):(
    <div className="login">
       <h3>Travel.net</h3>
       <form method="post"  name="userRegistrationForm"   >
       <label>Email ID:</label>
       <input type="text" name="emailid" onChange={handleEmail}/>
       <div className="errorMsg">
       {errEmail && (
              <p>  {errEmail}  </p>
                  )}
                     {userEmailErr && (
                    <p>
                      {userEmailErr}
                    </p>
                  )}
       </div>
       <label>Password</label>
       <input type="password" name="password" onChange={handlePassword} />
       <div className="errorMsg">
       {errPassword && (
                    <p>
                      {errPassword}
                    </p>
                  )}
                     {userPasswordError && (
                    <p>
                      {userPasswordError}
                    </p>
                  )}
       </div>
       <input type="submit" className="button"  value="Login"   onClick={handlelogIn}/>
       <div className='space'>Or</div>
     <Link to='/Regestration'> <input type="submit" className="button"  value="Create an Account"/></Link>
       </form>
    
    
    
   </div>
        )}
</div>
  )
}

export default Login