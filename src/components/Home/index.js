import React,{useState,useEffect} from 'react'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { useDispatch,useSelector } from 'react-redux';







const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Home({history}) {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);



  const [open, setOpen] = React.useState(false);
  let {user} = useSelector((state)=> ({...state}));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [academicField, setAcademicField] = React.useState('');
  const [academicTopic, setAcademicTopic] = React.useState('');
  const [academicTopicOther, setAcademicTopicOther] = React.useState('');
  const [surveyName, setSurveyName] = React.useState('');


  const handleChange = (event) => {
    setAcademicField(event.target.value);
  };

 
    return (
        <body>
            <Header/>

<div className="login">
      <div className="loginForm">
      <div >
            <div class="center" >
              {!user &&(
                <>
                                <div>
                <img className="imgHome" src={img} alt="" style={{borderRadius:10,border:"2px solid #999999"}}/>
                </div>
                <div style={{marginLeft:30}}>
                    <span class="span1" style={{fontSize:18,color: "#525252",fontWeight:"600"}}>
                    <p>With Simple Surveys, conduct market research quickly.</p>
             <p>Expand your market research capabilities to keep track of your brand, test your ideas, or get a gut check with your target audience.</p>

                    </span>
                </div>
                </>
              )}

            

             {user &&(
                            <div>
                            {/* <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,cursor: "pointer"}}><span ><a style={{color: "#000"}} onClick={handleClickOpen}>START NEW SURVEY</a></span></div> */}
                            <div>
                            <button onClick={handleClickOpen} style={{marginLeft: 10,marginTop:10,width:300}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>START NEW SURVEY</span></button>
                            </div>
                            <div>
                           <a href="">
                           <button onClick={handleClickOpen} style={{marginLeft: 10,marginTop:10,width:300}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>BUY RESEARCH AUDIENCE</span></button>
                           </a>
                           </div>
                               {/* <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10,cursor: "pointer"}}><span><a style={{color: "#000"}} href="/Ongoingsurveys">ONGOING SURVEYS</a></span></div>
                               <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10,cursor: "pointer"}}><span><a style={{color: "#000"}} href="/researchfindings">RESEARCH FINDINGS</a></span></div>
                               <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10,cursor: "pointer"}}><span><a style={{color: "#000"}} href="/recommendedbooks">RECOMMENDED BOOKS</a></span></div>
                               <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,marginTop:10,cursor: "pointer"}}><span><a style={{color: "#000"}} href="/buyresearchaudience">BUY RESEARCH AUDIENCE</a></span></div> */}
                               </div>
             )}

             </div>
             </div>

             <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{justifyContent: "center",margin:  "auto"}}
      >
        <AppBar sx={{ position: 'relative' }} style={{backgroundColor: "#000",marginTop:63}}>
        <Header/>

          <Toolbar style={{borderTop: "2px solid #fff"}}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        <List >
          <div style={{textAlign: "center"}}><span><h2 style={{fontWeight: "600"}}>START NEW SURVEY</h2></span></div>
       <div className="ListHomeModal">
       <Box sx={{ minWidth: 120 }} >
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Which academic field are you interested in ?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={academicField}
          label="Which academic field are you interested in ?"
          onChange={(e) => {
            setAcademicField(e.target.value)
        }}
          className="ListHomeModal1"
        >
          <MenuItem  value="Architecture">Architecture</MenuItem>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Medicine">Medicine</MenuItem>
          <MenuItem value="Psychology">Psychology</MenuItem>
        </Select>
      </FormControl>
      
    </Box>

       </div>

       <div className="ListHomeModal">
       {academicField !== '' &&(
  <>
      <Box sx={{ minWidth: 120 }} style={{marginTop:50}}>
      <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Which topic would you like to conduct your research on ?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={academicTopic}
          label="Which topic would you like to conduct your research on ?"
          onChange={(e) => {
            setAcademicTopic(e.target.value)
        }}
          className="ListHomeModal1"
        >
          <MenuItem  value="Community Feedback">Community Feedback</MenuItem>
          <MenuItem value="Customer Feedback">Customer Feedback</MenuItem>
          <MenuItem value="Academic Research">Academic Research</MenuItem>
          <MenuItem value="Course Evaluation">Course Evaluation</MenuItem>
          <MenuItem value="Student Feedback">Student Feedback</MenuItem>
          <MenuItem value="Student Performance">Student Performance</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      
    </Box>
  </>
)}
       </div>
       {academicTopic === 'Other'  &&(
        <div className="ListHomeModal">
  <>
      <Box sx={{ minWidth: 120 }} style={{marginTop:10}}>
       <div>
         <span style={{fontSize:18,fontWeight:"600",color:"#696969"}}>If other, kindly indicate which other topic you are interested in</span>
      </div> 
      <div>
        <input type="text"
                  onChange={(e) => {
                    setAcademicTopicOther(e.target.value)
                }}
          style={{width: "100%",height:50,border: "2px solid #AEAEAE"}}/>
      </div>      
    </Box>
  </>
       </div>
)}

       { (academicTopic !== '' && academicTopic !== 'Other') || (academicTopicOther !== '') ?(
        <div className="ListHomeModal">
  <>
      <Box sx={{ minWidth: 120 }} style={{marginTop:50}}>
       <div>
       <span style={{fontSize:18,fontWeight:"600",color:"#696969"}}>Kindly give a name to your survey</span>
      </div> 
      <div>
        <input type="text"
                  onChange={(e) => {
                    setSurveyName(e.target.value)
                }}
          style={{width: "100%",height:50,border: "2px solid #AEAEAE"}}/>
      </div>      
    </Box>
  </>
       </div>
): (academicTopic !== '' && academicTopic !== 'Other') ?(
  <div className="ListHomeModal">
  <>
      <Box sx={{ minWidth: 120 }} style={{marginTop:50}}>
       <div>
       <span style={{fontSize:18,fontWeight:"600",color:"#696969"}}>Kindly give a name to your survey</span>
      </div> 
      <div>
        <input type="text"
                  onChange={(e) => {
                    setSurveyName(e.target.value)
                }}
          style={{width: "100%",height:50,border: "2px solid #AEAEAE"}}/>
      </div>      
    </Box>
  </>
       </div> 
):(
  <h1></h1>
)}

       {surveyName !== ''  &&(
   <div className="ListHomeModal">
   <>
       <Box sx={{ minWidth: 120 }} style={{marginTop:50}}>
  
       <div>
       <button className="surveySubmitBtn">Submit Survey</button>
       </div>      
     </Box>
   </>
        </div> 
       )}
        </List>
      </Dialog>
      </div>



      
    </div>




    
        </body>
    )
}

export default Home

