import React from 'react'
import Header from '../Header'
import "./styles.css"
import { useSelector,useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HomeIcon from '@mui/icons-material/Home';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SpeedIcon from '@mui/icons-material/Speed';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Buyresearchaudience({history}) {
    let {user} = useSelector((state)=> ({...state}));
    let dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
  
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
  
    if(!user){
        history.push("/signIn")
      }

      const home = () =>{
        history.push("/")
      }
      const ongoingsurveys = () =>{
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
            <Header />
            <div className="buyResearchAudience">
            <div style={{textAlign: "center",fontSize:30,fontWeight:"600",marginBottom:50}}><span>BUY RESEARCH AUDIENCE</span></div>
            
              <div style={{display: "flex",flexWrap: "wrap"}}>
                  <div style={{marginLeft:50,display:"flex",alignItems:"center",objectFit:"contain"}}>
                      <div style={{marginRight:35}}><img style={{height:35,width:30}} src="https://www.pngall.com/wp-content/uploads/5/Google-Maps-Location-Mark.png" alt=""/></div>
                      <div><span style={{marginRight:20}}>LOCATION: </span><span><input type="text"/></span></div>
                  </div>
                  <div style={{marginLeft:50,display:"flex",alignItems:"center",objectFit:"contain"}}>
                      <div style={{marginRight:15}}><img style={{height:35,width:50}} src="https://w7.pngwing.com/pngs/271/883/png-transparent-male-and-female-signage-female-gender-symbol-mentoring-s-blue-text-logo.png" alt=""/></div>
                      <div><span style={{marginRight:15}}>GENDER: </span><span><input type="text"/></span></div>
                  </div>
              </div>
            
              <div style={{display: "flex",flexWrap: "wrap",marginTop:20}}>
                  <div style={{marginLeft:50,display:"flex",alignItems:"center",objectFit:"contain"}}>
                      <div style={{marginRight:35}}><img style={{height:35,width:30}} src="https://www.pngall.com/wp-content/uploads/5/Google-Maps-Location-Mark.png" alt=""/></div>
                      <div><span style={{marginRight:20}}>LOCATION: </span><span><input type="text"/></span></div>
                  </div>
                  <div style={{marginLeft:50,display:"flex",alignItems:"center",objectFit:"contain"}}>
                      <div style={{marginRight:15}}><img style={{height:35,width:50}} src="https://w7.pngwing.com/pngs/271/883/png-transparent-male-and-female-signage-female-gender-symbol-mentoring-s-blue-text-logo.png" alt=""/></div>
                      <div><span style={{marginRight:15}}>GENDER: </span><span><input type="text"/></span></div>
                  </div>
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

export default Buyresearchaudience
