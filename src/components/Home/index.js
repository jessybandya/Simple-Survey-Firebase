import React from 'react'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
function Home() {
    return (
        <body>
            <Header/>

<div className="login">
      <div className="loginForm">
      <div >
            <div class="center" >
                {/* <div>
                <img className="imgHome" src={img} alt="" style={{borderRadius:10,border:"2px solid #999999"}}/>
                </div>
                <div style={{marginLeft:30}}>
                    <span class="span1" style={{fontSize:18,color: "#525252",fontWeight:"600"}}>
                    <p>With Simple Surveys, conduct market research quickly.</p>
             <p>Expand your market research capabilities to keep track of your brand, test your ideas, or get a gut check with your target audience.</p>

                    </span>
                </div> */}

             </div>
             <div>
             <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20}}><span><a style={{color: "#000"}} href="/">START NEW SURVEY</a></span></div>
                <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10}}><span><a style={{color: "#000"}} href="/">ONGOING SURVEYS</a></span></div>
                <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10}}><span><a style={{color: "#000"}} href="/">RESEARCH FINDINGS</a></span></div>
                <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10}}><span><a style={{color: "#000"}} href="/">RECOMMENDED BOOKS</a></span></div>
                <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10}}><span><a style={{color: "#000"}} href="/">BUY RESEARCH AUDIENCE</a></span></div>
                </div>
             </div>
      </div>
    </div>
        </body>
    )
}

export default Home
