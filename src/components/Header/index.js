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
import { auth } from "../firebase"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';





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

const handleClickOpen = () => {
  setOpen(true);
};
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0,border:"1px solid #0476D0" }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:"600",color:"#0476D0"}}>Date Modified</TableCell>
                    <TableCell style={{fontWeight:"600",color:"#0476D0"}}>More Details</TableCell>
                    <TableCell style={{fontWeight:"600",color:"#0476D0"}} align="right">Status</TableCell>
                    <TableCell style={{fontWeight:"600",color:"#0476D0"}} align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell component="th" scope="row">
                        Fri, 22nd Jan 11.09 PM
                      </TableCell>
                      <TableCell><TableCell align="right"><button  style={{width:80,backgroundColor:"#0476D0",color:"#fff"}}>More</button></TableCell></TableCell>
                      <TableCell align="right"><button  style={{width:80,backgroundColor:"#0476D0",color:"#fff"}}>Open</button></TableCell>
                      <TableCell align="right">
                          <button onClick={handleClickOpen}  style={{width:80,backgroundColor:"#0476D0",color:"#fff"}}>Delete</button>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    responses: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('DREAM SCHOOLS', 401),
  createData('WILDLIFE', 237),
  createData('HEALTH', 262),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),
  createData('CAMPUS LIFE', 305),


];





  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory()









const handleClose = () => {
  setOpen(false);
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
      <MenuItem onClick={handleClickOpen}>My Account</MenuItem>
      <MenuItem onClick={logout}><span>Logout</span></MenuItem>
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
            <PriceChangeIcon />
          </Badge>
        </IconButton>
        <span>PLANS AND PRICING</span>
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

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
              <span style={{fontSize:20}}>REQUEST INFO</span>
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
                          style={{marginRight:-20}}
                        >
                          {/* <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                          </Badge> */}
                                      {auth?.currentUser?.displayName ? (
  <span style={{fontSize:18}}>{auth?.currentUser?.displayName}</span>
            ):(
              <span style={{fontSize:18}}>{user.email.split('@')[0]}</span>
            )}
                          
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
        <span>MY ACCOUNT</span>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
        <div style={{margin: "auto",width: "20%",padding: 10}}>
          <div>
            {auth?.currentUser?.photoURL ? (
  <Avatar src={auth?.currentUser?.photoURL} style={{ width: 56, height: 56 }} /> 
            ):(
      <Avatar {...stringAvatar(`${user?.email}`)} /> 
            )}

           
            </div>
        </div>

          </Typography>
          <Typography gutterBottom>
        <div style={{textAlign: "center"}}>
          <span>
          {auth?.currentUser?.email ? (
  <span>{auth?.currentUser?.email}</span>
            ):(
  <span>{user.email}</span>
            )}
          </span>
        </div>

          </Typography>
          <Typography gutterBottom>
        <div style={{textAlign: "center"}}>
         <span>
          {auth?.currentUser?.displayName ? (
  <span>{auth?.currentUser?.displayName}</span>
            ):(
  <span>{user.email.split('@')[0]}</span>
            )}
          </span>
        </div>

          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
        <div style={{textAlign:"center",fontWeight:"600"}}><span>Manage Your Survey Forms</span></div>
            
          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
       {/* Survey List */}
       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
      <Table aria-label="collapsible table"
      stickyHeader aria-label="sticky table">
      
        <TableHead 
        >
          <TableRow >
            <TableCell sx={{backgroundColor: "#0476D0"}}/>
            <TableCell sx={{backgroundColor: "#0476D0",fontWeight:"900"}}>SURVEY NAME</TableCell>
            <TableCell sx={{backgroundColor: "#0476D0",fontWeight:"900"}} align="right">RESPONSES</TableCell>
            <TableCell sx={{backgroundColor: "#0476D0"}}/>
            <TableCell sx={{backgroundColor: "#0476D0"}}/>
            <TableCell sx={{backgroundColor: "#0476D0"}}/>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>

          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          </Typography>
        </DialogContent>
 
      </BootstrapDialog>
    </>
  );
}
