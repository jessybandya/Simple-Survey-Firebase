import React, { useState } from "react";
import validator from 'validator'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
import { auth } from "../firebase";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Registerstudent() {




    
    const [email, setStudenEmail] = useState('')


    const verifyEmail = async(event)=>{
        event.preventDefault();
        let errors = {};


        if(!email){
            toast.error("Student E mail field is empty!")
        }else{
            const config ={
                url: 'https://simple-academic-survey.web.app/registerstudent/complete',
                handleCodeInApp: true
            }
    
    
            await auth.sendSignInLinkToEmail(email,config)
            toast.success(`Email sent to ${email}. Click the link to complete your registration.`
            );
          //save user email in local storage
          window.localStorage.setItem('studentEmailForRegistration', email)
        //clear state
        setStudenEmail("");
        }

    }
    return (
        <div>
        <Header />
        <ToastContainer/>
<div className="main_body">
<div class="parent">
  <div class="child"><div class="center2">

      <div style={{marginBottom:15}}><span style={{fontSize:20,fontWeight:"600"}}>Register as a student</span></div>
      <div></div> 
      <div style={{marginBottom:15}}><input  style={{width: 250,height:35,border:"2px solid #2E2EFF",textAlign: "center"}}type="email"
            onChange={(e) => {
                setStudenEmail(e.target.value)
            }}
             placeholder="Student E mail"/></div>

      <div><button onClick={verifyEmail} style={{backgroundColor: "#2E2EFF",width:250,height:40,color: "#fff",fontSize:20,border: "none"}}>CREATE FREE ACCOUNT</button></div>
      <div style={{marginTop:15,fontWeight:"600"}}><div class="hr-theme-slash-2"><div class="hr-line"></div><div class="hr-icon"><div class="circle"><span style={{color: "#000"}}>OR</span></div></div><div class="hr-line"></div></div></div>
      <div style={{marginTop:10,fontWeight:"600",fontSize:25}}>Create free account with</div>
      <div className="socialDiv">
      <div className="socialDiv1"><img src="https://image.similarpng.com/thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" style={{height:40,objectFit: "contain"}}/></div>
      <div className="socialDiv1"><img src="https://www.pngkit.com/png/detail/22-221036_follow-us-facebook-icon-flat-png.png" style={{height:40,objectFit: "contain"}}/></div>      
      <div className="socialDiv1"><img src="https://detailedcapital.com/wp-content/uploads/2017/05/LinkedIn-Logo-500x500.png" style={{height:40,objectFit: "contain"}}/></div>      
      <div className="socialDiv1"><img src="https://image.similarpng.com/thumbnail/2020/06/Popular-icon-Twitter-clipart-PNG.png" style={{height:40,objectFit: "contain"}}/></div>        
      </div>
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

export default Registerstudent
