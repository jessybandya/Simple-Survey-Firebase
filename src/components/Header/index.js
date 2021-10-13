import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import img from "../../assets/jedd.jpg"
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "./styles.css"
import firebase from 'firebase'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PostAddIcon from '@mui/icons-material/PostAdd';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { auth,db } from "../firebase"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Charts from '../Charts';
import  {useState, useEffect} from 'react'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}








const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));









export default function Header() {

  
// Table
const [open, setOpen] = React.useState(false);
const [dashboard, setDashboard] = React.useState(false);
const [updateProfile, setUpdateProfile] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClickDashboardOpen = () => {
  setDashboard(true);
};

const handleClickUpdateProfiledOpen = () => {
  setUpdateProfile(true);
};

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory()









const handleClose = () => {
  setOpen(false);
};
const handleCloseDashboard = () => {
  setDashboard(false);
};
const handleCloseUpdateProfile = () => {
  setUpdateProfile(false);
};

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  
  let dispatch = useDispatch()


  //Rendering selectively
  let {user} = useSelector((state)=> ({...state}));

// logout
  const logout = () =>{
    firebase.auth().signOut()

    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/signIn")
  }

  const [username, setUsername] = useState("")

    const [profileUserData, setProfileUserData] = useState('');

    useEffect(() => {
      // const q = query(collection(db, "users"), where("uid", "==", "zZk159XSVBhWzESee3uiAPyO6Ut2"));
      // const query = await doc(q)
      // console.log()
        // db.collection('users').doc(`${auth?.currentUser?.uid}`).onSnapshot((doc) => {
        //     setProfileUserData(doc.data());
        //         console.log("Username:", doc.value)
        //     setUsername(doc.data.displayName)
        // });

        // db.collection('users').where("uid", "==", `${auth?.currentUser?.uid}`).onSnapshot(snapshot => {
        //  console.log(snapshot)
        //     })

    }, [])




const profileUpdate = (e) => {
  console.log(`${auth?.currentUser?.uid}`)
   e.preventDefault()

db.collection("users").doc(`${auth?.currentUser?.uid}`).update({
  displayName: username
}).then(function() {
  alert("Successfull updated the profile");
});

}



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>{user.email.split('@')[0]}</MenuItem> */}
      <div style={{flexDirection: "column"}}>
      <MenuItem onClick={handleClickOpen}><div>My Profile</div></MenuItem>
      <MenuItem onClick={logout}><div>Logout</div></MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <ImportContactsIcon />
          </Badge>
        </IconButton>
        <span>RESEARCH</span>
      </MenuItem>



      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <RequestQuoteIcon />
          </Badge>
        </IconButton>
        <span>REQUEST INFO</span>
      </MenuItem>
   {!user &&(
      <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={0} color="error">
          <VpnKeyIcon />
        </Badge>
      </IconButton>
      <a href="/signIn">
      <span style={{color: "#000"}}>SIGN IN</span>
      </a>
    </MenuItem>
   )}

      {user &&(
        <>
              <MenuItem
           onClick={handleClickDashboardOpen}
              >
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={0} color="error">
                  <PriceChangeIcon />
                </Badge>
              </IconButton>
              <span>DASHBOARD</span>
            </MenuItem>
              <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
            {auth?.currentUser?.photoURL ? (
  <Avatar src={auth?.currentUser?.photoURL} style={{ width: 56, height: 56 }} /> 
            ):(
      <Avatar {...stringAvatar(user.email)} /> 
            )}
              </IconButton>

              {auth?.currentUser?.displayName ? (
  <span>{auth?.currentUser?.displayName}</span>
            ):(
  <span>{user.email.split('@')[0]}</span>
            )}
              
            </MenuItem>
            </>
      )}

    </Menu>
  );



  return (
    <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar style={{position: "fixed",zIndex:1,top:0,backgroundColor:"#000"}} position="static">
        <Toolbar>
            <a href={`/`}>
        <img src={img} style={{height:60,width:120,marginLeft:-15, objectFit:"cover"}}/>

        </a>
          <Search style={{marginLeft:10}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
              <span style={{fontSize:20}}>RESEARCH</span>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
              <span style={{fontSize:20}}>PLANS AND PRICING</span>
            </IconButton>


            {!user &&(
            <IconButton
            //   size="large"
            //   edge="end"
            //   aria-label="account of current user"
            //   aria-controls={menuId}
            //   aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <a href="/signIn">
              <span style={{fontSize:20,color:"#fff"}}>SIGN IN</span>
              </a>
              
            </IconButton>
            )}
            {user &&(
              <>
                    <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClickDashboardOpen}
            >
              {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
              <span style={{fontSize:20}}>DASHBOARD</span>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            {auth?.currentUser?.photoURL ? (
  <Avatar src={auth?.currentUser?.photoURL} style={{ width: 56, height: 56 }} /> 
            ):(
      <Avatar {...stringAvatar(user.email)} /> 
            )}

              
            </IconButton>
            </>
            )}

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{textAlign: "center"}}>
        <span>MY Profile</span>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>

    <div class="row">
        <div class="col-md-4">
        {auth?.currentUser?.photoURL ? (
  <img alt="" style={{width:600,borderRadius:600/2,objectFit: "contain"}} title="" class="img-circle img-thumbnail isTooltip" src={auth?.currentUser?.photoURL}  data-original-title="Usuario"/> 

            ):(
              <img alt="" style={{width:300,borderRadius:300/2,objectFit: "contain"}} title="" class="img-circle img-thumbnail isTooltip" src="https://cdn.pngsumo.com/default-image-png-picture-710222-default-image-png-default-png-265_265.png" data-original-title="Usuario"/> 

            )}
            <ul title="Ratings" class="list-inline ratings text-center">
                <li><a href="#"><span class="glyphicon glyphicon-star">Bio</span></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-star">Location</span></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
            </ul>
        </div>
        <div class="col-md-6">
            <strong>Information</strong><br/>
            <div class="table-responsive">
            <table class="table table-user-information">
                <tbody>

                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                               First Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {/* Bootdey      */}
                            {auth?.currentUser?.email ? (
  <span>{auth?.currentUser?.displayName?.split(' ')[0]}</span>
            ):(
  <span>{`${user?.email}`}</span>
            )} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                Last Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {/* Bootstrap   */}
                            {auth?.currentUser?.email ? (
  <span>{auth?.currentUser?.displayName?.split(' ')[1]}</span>
            ):(
  <span>{`${user?.email}`}</span>
            )} 
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-bookmark text-primary"></span> 
                                Username                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                        {auth?.currentUser?.displayName ? (
  <span>{auth?.currentUser?.displayName}</span>
            ):(
  <span>{`${user?.email?.split('@')[0]}`}</span>
            )} 
                        </td>
                    </tr>


                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                Place of Work                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {/* Admin */}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                Email                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                        
                        {auth?.currentUser?.email ? (
  <span>{auth?.currentUser?.email}
  </span>
            ):(
  <span>{`${user?.email}`}</span>
            )} 
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                School                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            {/*  */}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Date Of Birth                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                             20 jul 20014 
                        </td>
                    </tr>                                    
                </tbody>
            </table>
            </div>
        </div>
    </div>
{/* </div>
</div>   */}

          </Typography>


          <DialogActions style={{flexDirection: "column"}}>
        <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          </Typography>
          <Button onClick={handleClickUpdateProfiledOpen} style={{fontWeight:"600",marginTop:0,border: "1px solid #000"}} >
            Update Profile
          </Button>
        </DialogActions>
        </DialogContent>
 
      </BootstrapDialog>



      <BootstrapDialog
        onClose={handleCloseDashboard}
        aria-labelledby="customized-dialog-title"
        open={dashboard}
        sx={{width: "100%"}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDashboard}>
          <div style={{textAlign: "center"}}>
        <span>MY SURVEYS</span>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom style={{marginTop:-50}}>
 


       <Charts   />

          </Typography>


          <DialogActions style={{flexDirection: "column"}}>
        <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          </Typography>

        </DialogActions>
        </DialogContent>
 
      </BootstrapDialog>




      {/* Update Profile */}

          <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={updateProfile}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseUpdateProfile}>
          <div style={{textAlign: "center"}}>
        <span>MY Profile Update</span>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>




<div class="wrapper bg-white mt-sm-5">
    <h4 class="pb-4 border-bottom">Account settings</h4>
    <div class="d-flex align-items-start py-3 border-bottom"> 
    
    <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img" alt=""/>
        <div class="pl-sm-4 pl-2" id="img-section"> <b>Profile Photo</b>
            <p>Accepted file type .png. Less than 1MB</p> <button class="btn button border"><b>Upload</b></button>
        </div>
    </div>
    <div class="py-2">
            <div class="row py-2">
            <div class="col-md-6 pt-md-0 pt-3"> <label for="lastname">Username</label> <input type="text" class="bg-light form-control" value={username}
            onChange={(e) => {
                                setUsername(e.target.value) }}
                                 /> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="firstname">First Name</label> <input type="text" class="bg-light form-control" placeholder="Steve"/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="lastname">Last Name</label> <input type="text" class="bg-light form-control" placeholder="Smith"/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label for="email">Location</label> <input type="text" class="bg-light form-control" placeholder="Location"/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">Place Of Work</label> <input type="tel" class="bg-light form-control" placeholder="Place of work"/> </div>
        </div>
                <div class="row py-2">
            <div class="col-md-6"> <label for="email">School</label> <input type="text" class="bg-light form-control" placeholder="School"/> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">Bio</label> <input type="tel" class="bg-light form-control" placeholder="Bio"/> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">DOB</label> <input type="tel" class="bg-light form-control" placeholder="12-10-1999"/> </div>
        </div>
        {/* <div class="row py-2">
            <div class="col-md-6"> <label for="country">Country</label> <select name="country" id="country" class="bg-light">
                    <option value="india" selected>India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="uae">UAE</option>
                </select> </div>
            <div class="col-md-6 pt-md-0 pt-3" id="lang"> <label for="language">Language</label>
                <div class="arrow"> <select name="language" id="language" class="bg-light">
                        <option value="english" selected>English</option>
                        <option value="english_us">English (United States)</option>
                        <option value="enguk">English UK</option>
                        <option value="arab">Arabic</option>
                    </select> </div>
            </div>
        </div> */}
        <div class="py-3 pb-4 border-bottom"> <button onClick={profileUpdate} class="btn btn-primary mr-3">Save Changes</button> <button class="btn border button">Cancel</button> </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate">
            <div> <b>Deactivate your account</b>
                <p>Details about your company account and password</p>
            </div>
            <div class="ml-auto"> <button class="btn danger">Deactivate</button> </div>
        </div>
    </div>
</div>
          </Typography>


          <DialogActions style={{flexDirection: "column"}}>
        <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          </Typography>

        </DialogActions>
        </DialogContent>
 
      </BootstrapDialog>
    </>
  );
}
