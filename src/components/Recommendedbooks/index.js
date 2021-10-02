import React from 'react'
import "./styles.css"
import Header from '../Header'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
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

import SpeedIcon from '@mui/icons-material/Speed';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight:"600",color:""}}>Date Modified</TableCell>
                    <TableCell style={{fontWeight:"600",color:""}}>Owner Email</TableCell>
                    <TableCell style={{fontWeight:"600",color:""}} align="right">Status</TableCell>
                    <TableCell style={{fontWeight:"600",color:""}} align="right">Participate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell component="th" scope="row">
                        Fri, 22nd Jan 11.09 PM
                      </TableCell>
                      <TableCell>jessy.bandya5@gmail.com</TableCell>
                      <TableCell align="right">Open</TableCell>
                      <TableCell align="right">
                          <button style={{width:80,backgroundColor:"#980DFF",color:"#fff"}}>Respond</button>
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
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),
  createData('CIVIL ENGINEERING', "GEO-TECHNICAL FLOW","TENSOR FLOW", "Thur 11th May 2021, 10:05PM"),



];

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





function Recommendedbooks({history}) {
  const [open, setOpen] = React.useState(false);

  let {user} = useSelector((state)=> ({...state}));
  let dispatch = useDispatch();



  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  if(!user){
      history.push("/signIn")
    }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  const actions = [
    { icon: <PostAddIcon onClick={handleClickOpen}/>, name: 'Recommend a book' },
    { icon: <QueryBuilderIcon onClick={()=> alert("Oops!, sorry we're still working on this\nBear with us kindly and thank you.")}/>, name: 'Querry/Help' },
    // { icon: <PrintIcon />, name: 'Print' },
    // { icon: <ShareIcon />, name: 'Share' },
  ];

    // const [value, setValue] = React.useState(0);
    // const ref = React.useRef(null);
    // const [messages, setMessages] = React.useState(() => refreshMessages());
  
    // React.useEffect(() => {
    //   ref.current.ownerDocument.body.scrollTop = 0;
    //   setMessages(refreshMessages());
    // }, [value, setMessages]);
    return (
        <body>
       <Header/>

                <div>
                    
                {/* <Box sx={{ pb: 7 }} ref={ref}> */}
                <div className="RecommendedBody">
     <div style={{textAlign: "center",fontSize:30,fontWeight:"600"}}><span>RECOMMENDED BOOKS</span></div>

     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
      <Table aria-label="collapsible table"
      stickyHeader aria-label="sticky table">
        <TableHead 
        
        >
          <TableRow >
            <TableCell sx={{borderBottom: "2px solid #980DFF"}}/>
            <TableCell sx={{backgroundColor: "",fontWeight:"900",borderBottom: "2px solid #980DFF"}}>ACADEMIC FIELD</TableCell>
            <TableCell sx={{backgroundColor: "",fontWeight:"900",borderBottom: "2px solid #980DFF"}} align="right">TOPIC</TableCell>
            <TableCell sx={{backgroundColor: "",fontWeight:"900",borderBottom: "2px solid #980DFF"}} align="right">BOOK TITLE</TableCell>
            <TableCell sx={{backgroundColor: "",fontWeight:"900",borderBottom: "2px solid #980DFF"}} align="right">TIME ADDED</TableCell>
            <TableCell sx={{backgroundColor: "",borderBottom: "2px solid #980DFF"}}/>
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


     <div>
     <Box sx={{  flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 80, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
             
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
     </div>


     </div>
     <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        RECOMMEND A BOOK
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>

          <TextField
          id="outlined-textarea"
          label="ACADEMIC FIELD"
          placeholder="Placeholder"
          multiline
          style={{width: "100%"}}
        />
          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
        <TextField
          id="outlined-textarea"
          label="TOPIC OF THE ACADEMIC FIELD"
          placeholder="Placeholder"
          style={{width: "100%"}}
          multiline
        />
          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
        <TextField
          id="outlined-textarea"
          label="TITLE OF THE BOOK"
          placeholder="Placeholder"
          style={{width: "100%"}}
          multiline
        />
          </Typography>
          <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight:"600"}} autoFocus onClick={handleClose}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
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

export default Recommendedbooks


const messageExamples = [
    {
      primary: 'Brunch this week?',
      secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      person: '/static/images/avatar/5.jpg',
    },
    {
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: '/static/images/avatar/1.jpg',
    },
    {
      primary: 'Recipe to try',
      secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
      person: '/static/images/avatar/2.jpg',
    },
    {
      primary: 'Yes!',
      secondary: 'I have the tickets to the ReactConf for this year.',
      person: '/static/images/avatar/3.jpg',
    },
    {
      primary: "Doctor's Appointment",
      secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
      person: '/static/images/avatar/4.jpg',
    },
    {
      primary: 'Discussion',
      secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
      person: '/static/images/avatar/5.jpg',
    },
    {
      primary: 'Summer BBQ',
      secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
      person: '/static/images/avatar/1.jpg',
    },
  ];
  
  