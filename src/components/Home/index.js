import React,{useState,useEffect} from 'react'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { useDispatch,useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HomeIcon from '@mui/icons-material/Home';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';






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

  const home = (e) =>{
    e.preventDefault()
    history.push("/")
  }
  const ongoingsurveys = (e) =>{
    e.preventDefault()
    history.push("/ongoingsurveys")
  }
  const researchFindings = (e) =>{
    e.preventDefault()
    history.push("/researchfindings")
  }
  const recommendedBooks = (e) =>{
    e.preventDefault()
    history.push("/recommendedbooks")
  }
  const buyAudience = (e) =>{
    e.preventDefault()
    history.push("/buyresearchaudience")
  }
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
                            <div style={{border: "2px solid #0476D0",width:300,height:40,textAlign: "center",fontWeight:"700",fontSize: 20,cursor: "pointer"}}><span ><a style={{color: "#000"}} onClick={handleClickOpen}>START NEW SURVEY</a></span></div>
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
        <AppBar sx={{ position: 'relative' }} style={{backgroundColor: "#000",marginTop:65}}>
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


      {user &&(
  <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          
          <BottomNavigationAction style={{color: "gray"}} onClick={home} label="Home" icon={<HomeIcon/>} onClick={home}/>
          <BottomNavigationAction style={{color: "gray"}} onClick={ongoingsurveys} label="Ongoing Surveys" icon={<SpeedIcon onClick={ongoingsurveys}/>}  onClick={ongoingsurveys}/>
          <BottomNavigationAction style={{color: "gray"}} onClick={researchFindings} label="Research Findings" icon={<CancelPresentationIcon />} onClick={researchFindings}/>
          <BottomNavigationAction  style={{color: "gray"}} onClick={recommendedBooks} label="Recommended Books"  icon={<LocalLibraryIcon />} onClick={recommendedBooks}/>
          <BottomNavigationAction style={{color: "gray"}} onClick={buyAudience} label="Buy Audience" icon={<ShoppingBasketIcon />} onClick={buyAudience}/>

        </BottomNavigation>
      </Paper>
    </Box>
)}
      
    </div>




    
        </body>
    )
}

export default Home

