import React, { useState,useEffect } from "react";
import validator from 'validator'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
import { auth } from "../firebase";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Registerstudentcomplete({history}) {
//props.history

    
    const [email, setStudenEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
       setStudenEmail(window.localStorage.getItem("studentEmailForRegistration"));
    }, [])

    const register = async(event)=>{
        event.preventDefault();
        let errors = {};

        //validation
        if(!email || !password){
            toast.error("Email and Password is required!")
        }else if(password.length < 6){
            toast.error("Password should have at least 6 characters.")
        }else{

            try{
                const result = await auth.signInWithEmailLink(
                    email, 
                    window.location.href
                    );
                
                if(result.user.emailVerified){
                    //remove user email from localstaorage
                    //get user id token
                    window.localStorage.removeItem("studentEmailForRegistration");
                    let user = auth.currentUser
                    await user.updatePassword(password);
                    const idTokenResult = await user.getIdTokenResult();
    
    
                    //redirect
                    history.push('/')
                }
                
                }catch(error){
                //
                toast.error(error.message)
            }
        }




    //     if (!email.trim()) {
    //         errors.email = alert(`Student Email field is empty!`)
    //   }else{
    //     auth.createUserWithEmailAndPassword(email , password)
    //     .then((userCredential)=>{
    //         // send verification mail.
    //       userCredential.user.sendEmailVerification();
    //       auth.signOut();
    //       alert(`Verification link has been sent to ${email}\nThank you.`);
    //     })
    //     .catch(alert);
    //   }


    }
    return (
        <div>
        <Header />
        <ToastContainer/>
<div className="main_body">
<div class="parent">
  <div class="child"><div class="center2">

      <div style={{marginBottom:15}}><span style={{fontSize:20,fontWeight:"600"}}>Complete registration as a student</span></div>
      <div></div> 
      <div style={{marginBottom:15}}><input  style={{width: 250,height:35,border:"2px solid #2E2EFF",textAlign: "center"}} value={email} type="email"
            onChange={(e) => {
                setStudenEmail(e.target.value)
            }}
             placeholder="Student E mail"/></div>
      <div style={{marginBottom:15}}><input  style={{width: 250,height:35,border:"2px solid #2E2EFF",textAlign: "center"}}  type="password"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
             placeholder="Create Password"/></div>
      <div><button onClick={register} style={{backgroundColor: "#2E2EFF",width:250,height:40,color: "#fff",fontSize:20,border: "none"}}>COMPLETE REGISTRATION</button></div>
      <div style={{marginTop:15,fontWeight:"600"}}><div class="hr-theme-slash-2"><div class="hr-line"></div><div class="hr-icon"><div class="circle"><span style={{color: "#000"}}>OR</span></div></div><div class="hr-line"></div></div></div>

      <div style={{marginTop:15,fontWeight:"500"}}>
          <span style={{fontSize:18,color: "#AEAEAE"}}>
          <p>By clicking ‘Create account’ or signing up, you agree to the <span style={{color:"#0476D0"}}>Terms of Use</span> and <span style={{color:"#0476D0"}}>Privacy Notice</span>.You also agree to receive information and offers relevant to our services via email. You can opt-out of these emails in your My Account page anytime.</p>

          </span>
      </div>

</div>
</div>
</div>

</div>
        </div>
    )
}

export default Registerstudentcomplete
