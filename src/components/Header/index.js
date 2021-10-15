import React,{useContext,useState,useEffect} from 'react'
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
import $ from 'jquery';
import EditIcon from '@mui/icons-material/Edit';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


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

  const [bio, setBio] = useState('');
  const [bioPresent, setBioPresent] = useState(false)
  const [username, setUsername] = useState('');
  const [usernamePresent, setUsernamePresent] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [firstNamePresent, setFirstNamePresent] = useState(false)
  const [lastName, setlastName] = useState('');
  const [lastNamePresent, setlastNamePresent] = useState(false)
  const [location, setLocation] = useState('');
  const [locationPresent, setlocationPresent] = useState(false)
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [placeOfWorkPresent, setPlaceOfWorkPresent] = useState(false)
  const [school, setSchool] = useState('');
  const [schoolPresent, setSchoolPresent] = useState(false)
  const [birthday, setBirthday] = useState('');
  const [birthdayPresent, setBirthdayPresent] = useState(false)
  const [scroll, setScroll] = React.useState('paper');

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
    window.localStorage.removeItem("getCurrentUserId");

  }


    const [profileUserData, setProfileUserData] = useState();
   var test = profileUserData?.username
   console.log("Uid: ",test)


   const currentUserId= `${auth?.currentUser?.uid}`
   console.log("CurrentUser Uid: ", `${currentUserId}`)
// username
   const addUsername = () => {
     $('.username')[0].style.display = 'none';
     $('.usernameFields')[0].style.display = 'flex';
 }
 
 const collapseUsername = () => {
     $('.username')[0].style.display = 'block';
     $('.usernameFields')[0].style.display = 'none';
 }
 
 const usernameUpdate = () => {
   if (101 - username.length < 0 || username.length === 0) {
       return;
   } else {
    db.collection('users').where("username", "==", username).get().then((resultSnapShot) => {

      if (resultSnapShot.size == 0) {
        //Proceed
        db.collection('users').doc(currentUserId).update({
          username: username
        }).then(
         toast.success("Username been successfully updated")
         )
      }else{
        toast.error(`Username ${username} already in use`)
      }
    })

   }
 }
 
 const usernameSet = (e) => {
     setUsername(e.target.value)
     if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
         $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
         $('.saveButton')[0].style.opacity = 0.4;
     } else {
         $('.saveButton')[0].style.opacity = 1;
         $('.saveButton')[0].style.backgroundColor = '#2D88FF';
     }
 }
 
 useEffect(() => {
   if (usernamePresent === false) {
       console.log()
   } else {
       $('.username')[0].innerText = "Edit";
       $('.usernameText')[0].innerText = username;
   }
 }, [usernamePresent])


// First Name
const addFirstName = () => {
  $('.firstName')[0].style.display = 'none';
  $('.firstNameFields')[0].style.display = 'flex';
}
const collapseFirstName = () => {
  $('.firstName')[0].style.display = 'block';
  $('.firstNameFields')[0].style.display = 'none';
}
const firstNameUpdate = () => {
if (101 - firstName.length < 0 || firstName.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      firstName: firstName
    }).then(
      toast.success("First name been successfully updated")
    )
}
}
const firstNameSet = (e) => {
  setFirstName(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}
useEffect(() => {
if (firstNamePresent === false) {
    console.log()
} else {
    $('.firstName')[0].innerText = "Edit";
    $('.firstNameText')[0].innerText = firstName;
}
}, [firstNamePresent])

// Last Name
const addLastName = () => {
  $('.lastName')[0].style.display = 'none';
  $('.lastNameFields')[0].style.display = 'flex';
}

const collapseLastName = () => {
  $('.lastName')[0].style.display = 'block';
  $('.lastNameFields')[0].style.display = 'none';
}

const lastNameUpdate = () => {
if (101 - lastName.length < 0 || lastName.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      lastName: lastName
    }).then(
      toast.success("Last name been successfully updated")
    )
}
}

const lastNameSet = (e) => {
  setlastName(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (lastNamePresent === false) {
    console.log()
} else {
    $('.lastName')[0].innerText = "Edit";
    $('.lastNameText')[0].innerText = lastName;
}
}, [lastNamePresent])


// Location
const addLocation = () => {
  $('.location')[0].style.display = 'none';
  $('.locationFields')[0].style.display = 'flex';
}

const collapseLocation = () => {
  $('.location')[0].style.display = 'block';
  $('.locationFields')[0].style.display = 'none';
}

const locationUpdate = () => {
if (101 - location.length < 0 || location.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      location: location
    }).then(
      toast.success("Location been successfully updated")
    )
}
}

const locationSet = (e) => {
  setLocation(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (locationPresent === false) {
    console.log()
} else {
    $('.location')[0].innerText = "Edit";
    $('.locationText')[0].innerText = location;
}
}, [locationPresent])


// Place Of Work
const addPlaceOfWork = () => {
  $('.placeOfWork')[0].style.display = 'none';
  $('.placeOfWorkFields')[0].style.display = 'flex';
}

const collapsePlaceOfWork = () => {
  $('.placeOfWork')[0].style.display = 'block';
  $('.placeOfWorkFields')[0].style.display = 'none';
}

const placeOfWorkUpdate = () => {
if (101 - placeOfWork.length < 0 || placeOfWork.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      placeOfWork: placeOfWork
    }).then(
      toast.success("Work place been successfully updated")
    )
}
}

const placeOfWorkSet = (e) => {
  setPlaceOfWork(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (placeOfWorkPresent === false) {
    console.log()
} else {
    $('.placeOfWork')[0].innerText = "Edit";
    $('.placeOfWorkText')[0].innerText = placeOfWork;
}
}, [placeOfWorkPresent])



// School
const addSchool = () => {
  $('.school')[0].style.display = 'none';
  $('.schoolFields')[0].style.display = 'flex';
}

const collapseSchool = () => {
  $('.school')[0].style.display = 'block';
  $('.schoolFields')[0].style.display = 'none';
}

const schoolUpdate = () => {
if (101 - school.length < 0 || school.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      school: school
    }).then(
      toast.success("School been successfully updated")
    )
}
}

const schoolSet = (e) => {
  setSchool(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (schoolPresent === false) {
    console.log()
} else {
    $('.school')[0].innerText = "Edit";
    $('.schoolText')[0].innerText = school;
}
}, [schoolPresent])



// Bio
const addbio = () => {
  $('.bio')[0].style.display = 'none';
  $('.bioFields')[0].style.display = 'flex';
}

const collapsebio = () => {
  $('.bio')[0].style.display = 'block';
  $('.bioFields')[0].style.display = 'none';
}

const bioUpdate = () => {
if (101 - bio.length < 0 || bio.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      bio: bio
    }).then(
      toast.success("Bio been successfully updated")
    )
}
}

const bioSet = (e) => {
  setBio(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (bioPresent === false) {
    console.log()
} else {
    $('.bio')[0].innerText = "Edit";
    $('.bioText')[0].innerText = bio;
}
}, [bioPresent])




// Birthday
const addBirthday = () => {
  $('.birthday')[0].style.display = 'none';
  $('.birthdayFields')[0].style.display = 'flex';
}

const collapseBirthday = () => {
  $('.birthday')[0].style.display = 'block';
  $('.birthdayFields')[0].style.display = 'none';
}

const birthdayUpdate = () => {
if (101 - birthday.length < 0 || birthday.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      birthday: birthday
    }).then(
      toast.success("Birth date been successfully updated")
    )
}
}

const birthdaySet = (e) => {
  setBirthday(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[0].style.opacity = 0.4;
  } else {
      $('.saveButton')[0].style.opacity = 1;
      $('.saveButton')[0].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (birthdayPresent === false) {
    console.log()
} else {
    $('.birthday')[0].innerText = "Edit";
    $('.birthdayText')[0].innerText = birthday;
}
}, [birthdayPresent])

   useEffect(() => {
    db.collection('users').doc(`${currentUserId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])



 
useEffect(() => {
      // const q = query(collection(db, "users"), where("uid", "==", "uXMHFw9teTSzJFiVNUj34QpCm1E3"));
      // const query = await doc(q)
      // // console.log()
        // db.collection('users').doc(`${auth?.currentUser?.uid}`).onSnapshot((doc) => {
        //     setProfileUserData(doc.data());
        //         console.log("Username:", doc.value)
        //     setUsername(doc.data.displayName)
        // });

        // db.collection('users').where("uid", "==", `${auth?.currentUser?.uid}`).onSnapshot(snapshot => {
        //  console.log(snapshot)
        //     })

        // const userId = auth?.currentUser?.uid

        // setCurrentUserId(userId)

        // fetchUser()



    }, [])


    // const userData = AsyncStorage.setItem("userData", user)
    // const userData = AsycStorage.getItem("userData")
    // "state" => setUserData(userData)
    // "ourFunction" => fetchUser() {
    // "you set the userdata from state"
    // } 
    
    
//     const fetchUser = async () => {
//       console.log("Current User Id: ",`${currentUserId}`)

//       var docRef = db.collection("users").doc(`${currentUserId}`);
//       docRef.get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
    
// }
      




const profileUpdate = (e) => {
  console.log(`${auth?.currentUser?.uid}`)
   e.preventDefault()

db.collection("users").doc(`${auth?.currentUser?.uid}`).update({
  username: username
}).then(function() {
  console.log("Updated Username: ", `${auth?.currentUser?.uid}`)
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
              <span style={{fontSize:20}}>RESEARCH</span>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <span style={{fontSize:20}}>PLANS AND PRICING</span>
            </IconButton>


            {!user &&(
            <IconButton
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
                <li><a href="#"><span class="glyphicon glyphicon-star">{profileUserData?.bio}</span></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-star">{profileUserData?.location}</span></a></li>
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
                            {profileUserData?.firstName}
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
                            {profileUserData?.lastName}
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
                        {profileUserData?.username} 
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
                            {profileUserData?.placeOfWork}
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
                        
                        {profileUserData?.email}
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
                            {profileUserData?.school}
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
                        {profileUserData?.birthday}
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
            <ToastContainer/>

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
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Username</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"   class="bg-light form-control" value={`${profileUserData?.username}`}/>
            </div>
            <div><EditIcon onClick={addUsername} className="username"/>
            </div>
            </div>
                <div className="usernameFields">
                    <textarea value={username} placeholder="Describe who you are" onChange={usernameSet} className="bioInput" />
                    <p>{`${101 - username.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseUsername} >Cancel</button>
                        <button onClick={usernameUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">First Name</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"   class="bg-light form-control" value={`${profileUserData?.firstName}`}/>
            </div>
            <div><EditIcon onClick={addFirstName} className="firstName"/>
            </div>
            </div>

                <div className="firstNameFields">
                    <textarea value={firstName} placeholder="Update your first name" onChange={firstNameSet} className="bioInput" />
                    <p>{`${101 - firstName.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseFirstName} >Cancel</button>
                        <button onClick={firstNameUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Last Name</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" value={`${profileUserData?.lastName}`}/>
            </div>
            <div><EditIcon onClick={addLastName} className="lastName"/>
            </div>
            </div>

                <div className="lastNameFields">
                    <textarea value={lastName} placeholder="Update your last name" onChange={lastNameSet} className="bioInput" />
                    <p>{`${101 - lastName.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseLastName} >Cancel</button>
                        <button onClick={lastNameUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>        </div>
        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">Location</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" value={`${profileUserData?.location}`}/>
            </div>
            <div><EditIcon onClick={addLocation} className="location"/>
            </div>
            </div>

                <div className="locationFields">
                    <textarea value={location} placeholder="Update your location" onChange={locationSet} className="bioInput" />
                    <p>{`${101 - location.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseLocation} >Cancel</button>
                        <button onClick={locationUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>           
            
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Place Of Work</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" value={`${profileUserData?.placeOfWork}`}/>
            </div>
            <div><EditIcon onClick={addPlaceOfWork} className="placeOfWork"/>
            </div>
            </div>

                <div className="placeOfWorkFields">
                    <textarea value={placeOfWork} placeholder="Update your place of work" onChange={placeOfWorkSet} className="bioInput" />
                    <p>{`${101 - placeOfWork.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapsePlaceOfWork} >Cancel</button>
                        <button onClick={placeOfWorkUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>      
            
              </div>
                <div class="row py-2">
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">School</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" value={`${profileUserData?.school}`}/>
            </div>
            <div><EditIcon onClick={addSchool} className="school"/>
            </div>
            </div>

                <div className="schoolFields">
                    <textarea value={school} placeholder="Update your school" onChange={schoolSet} className="bioInput" />
                    <p>{`${101 - school.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseSchool} >Cancel</button>
                        <button onClick={schoolUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Bio</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text" value={bio} onClick={addbio}  onChange={bioSet} class="bg-light form-control" placeholder={`${profileUserData?.bio}`}/>
            </div>
            <div><EditIcon onClick={addbio} className="bio"/>
            </div>
            </div>

                <div className="bioFields">
                    <textarea value={bio} placeholder="Updtate your username" onChange={bioSet} className="bioInput" />
                    <p>{`${101 - bio.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapsebio} >Cancel</button>
                        <button onClick={bioUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">Date Of Birth</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text" value={birthday} onClick={addBirthday}  onChange={birthdaySet} class="bg-light form-control" placeholder={`${profileUserData?.dateOfBirth}`}/>
            </div>
            <div><EditIcon onClick={addBirthday} className="birthday"/>
            </div>
            </div>

                <div className="birthdayFields">
                    <textarea value={birthday} placeholder="Update your username" onChange={birthdaySet} className="bioInput" />
                    <p>{`${101 - birthday.length} characters remaining`}</p>
                    <div className="cancelAndSaveButtons">
                        <button onClick={collapseBirthday} >Cancel</button>
                        <button onClick={birthdayUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>        
            </div>
        <div class="py-3 pb-4 border-bottom">  <button class="btn border button">Cancel</button> </div>
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
