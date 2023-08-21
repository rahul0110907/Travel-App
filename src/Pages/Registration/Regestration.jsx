import React,{useState} from 'react'

import '../Registration/Registration.css'
import { Link,useNavigate } from 'react-router-dom'
import {RotatingLines} from 'react-loader-spinner'
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
const Regestration = () => {
    const navigate = useNavigate();

    const auth = getAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobile, setMobile] = useState('') // useState to store Mobile Number

    const [errName, setErrName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");
  
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
  
    const [firebaseErr, setFirebaseErr] = useState("");
 
   
  
    const handleName = (e) => {
      setName(e.target.value);
      setErrName("");
    };
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setErrEmail("");
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setErrPassword("");
    };
    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      setErrCPassword("");
    };
  
    const emailValidation = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    const handleRegistration = (e) => {
      e.preventDefault();
      if (name.length === 0) {
        setErrName('Name can not be empty');
        }
        if (email.length === 0) {
            setErrEmail('Please Enter Email ')
            setFirebaseErr('')
           } else {
        if (!emailValidation(email)) {
          setErrEmail("Enter a valid email");
        }
      }
      if (!password) {
        setErrPassword("Enter your password");
      } else {
        if (password.length < 8) {
            setErrPassword(' Password must contain greater than or equal to 8 characters.')
          }
      
          // variable to count upper case characters in the password.
          let countUpperCase = 0
          // variable to count lowercase characters in the password.
          let countLowerCase = 0
          // variable to count digit characters in the password.
          let countDigit = 0
          // variable to count special characters in the password.
          let countSpecialCharacters = 0
      
          for (let i = 0; i < password.length; i++) {
            const specialChars = [
              '!',
              '@',
              '#',
              '$',
              '%',
              '^',
              '&',
              '*',
              '(',
              ')',
              '_',
              '-',
              '+',
              '=',
              '[',
              '{',
              ']',
              '}',
              ':',
              ';',
              '<',
              '>',
            ]
      
            if (specialChars.includes(password[i])) {
              // this means that the character is special, so increment countSpecialCharacters
              countSpecialCharacters++
            } else if (!isNaN(password[i] * 1)) {
              // this means that the character is a digit, so increment countDigit
              countDigit++
            } else {
              if (password[i] === password[i].toUpperCase()) {
                // this means that the character is an upper case character, so increment countUpperCase
                countUpperCase++
              }
              if (password[i] === password[i].toLowerCase()) {
                // this means that the character is lowercase, so increment countUpperCase
                countLowerCase++
              }
            }
          }
      
          if (countLowerCase === 0) {
             setErrPassword('Please include atleast one small letter in password');
         
          }
      
          if (countUpperCase === 0) {
            // invalid form, 0 upper case characters
            setErrPassword('Please include atleast one Captial letter in password');
          }
      
          if (countDigit === 0) {
            // invalid form, 0 digit characters
            setErrPassword('Please include atleast one  digit in password');
          }
      
          if (countSpecialCharacters === 0) {
            // invalid form, 0 special characters characters
            setErrPassword('Please include atleast one  special charector in password');
          }
      }
         if (confirmPassword !== password) {
          setErrCPassword("Password not matched");
        }
      
      if (
        name &&
        email &&
        emailValidation(email) &&
        password &&
        password.length >= 8 &&
        confirmPassword &&
        confirmPassword === password
      ) 
      {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: name,
            });
            // const user = userCredential.user;
            setLoading(false);
            setSuccessMessage("Account Create Successfully");
            setTimeout(() => {
              navigate("/Login");
            }, 3000);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
  
            if (errorCode.includes("auth/email-already-in-use")) {
              setFirebaseErr("Email already in use , Please try another");
            }
         });
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMobile('')
        setErrCPassword("");
      }
    };
  return (
    <div className="main-registration-container">
     <div className="register">
        <h3>Travel.net</h3>
        <form method="post"  name="userRegistrationForm"   >
        <label>Name</label>
        <input type="text" name="Name"  onChange={handleName} value={name} />
        <div className="errorMsg">
        {errName && (
                  <p> {errName}  </p>
                )}
        </div>
        <label>Email ID:</label>
        <input type="text" name="emailid"   onChange={handleEmail} value={email}  />
        <div className="errorMsg">
        {errEmail && (
                  <p>
                    {errEmail}
                  </p>
                )}
                {firebaseErr && (
                  <p> {firebaseErr}
                  </p>
                )}
        </div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno"  onChange={(e) => setMobile(e.target.value)} value={mobile} />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password"   onChange={handlePassword} value={password} />
        <div className="errorMsg">
        {errPassword && (
                  <p>
                    {errPassword}
                  </p>
                )}
        </div>
        <label>Confirm Password</label>
       <input type="password" name="confirmpassword"   onChange={handleConfirmPassword} value={confirmPassword}/>
       <div className="errorMsg">
       {errCPassword && (
                  <p>
                    {errCPassword}
                  </p>
                )}
       </div>
        <input type="submit" className="button"   onClick={handleRegistration} value="Register"/>
        </form>
       
        <div className='signin'>
            <span>have an Account! <Link to='/Login'>Sign-in</Link></span>
        </div>
        {loading && (
                <div className="flex justify-center">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                  />
                </div>
              )}
        {
                successMessage &&(
                  <div>
                    <p className="sucessMsg">{successMessage}</p>
                    </div>
                )
              }
    </div>
</div>
  )
}

export default Regestration