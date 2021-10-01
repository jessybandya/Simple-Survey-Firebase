import React from 'react'
import Header from '../Header'
import "./styles.css"
import img from "../../assets/jedd.jpg"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PostAddIcon from '@mui/icons-material/PostAdd';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';




function Ongoingsurvey({history}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  let {user} = useSelector((state)=> ({...state}));
  let dispatch = useDispatch();

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
            <TableCell style={{ paddingBottom: 0, paddingTop: 0,border:"1px solid #980DFF" }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    More
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{fontWeight:"600",color:"#980DFF"}}>Date Modified</TableCell>
                        <TableCell style={{fontWeight:"600",color:"#980DFF"}}>Owner Email</TableCell>
                        <TableCell style={{fontWeight:"600",color:"#980DFF"}} align="right">Status</TableCell>
                        <TableCell style={{fontWeight:"600",color:"#980DFF"}} align="right">Participate</TableCell>
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
                              <button onClick={handleClickOpen}  style={{width:80,backgroundColor:"#980DFF",color:"#fff"}}>Respond</button>
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









    return (
        <body >
            <Header/>
            <div className="OngoingBody">
                <div style={{textAlign: "center",fontSize:30,fontWeight:"600"}}><span>ONGOING SURVEYS</span></div>
                <div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
      <Table aria-label="collapsible table"
      stickyHeader aria-label="sticky table">
      
        <TableHead 
        >
          <TableRow >
            <TableCell sx={{backgroundColor: "#980DFF"}}/>
            <TableCell sx={{backgroundColor: "#980DFF",fontWeight:"900"}}>SURVEY NAME</TableCell>
            <TableCell sx={{backgroundColor: "#980DFF",fontWeight:"900"}} align="right">RESPONSES</TableCell>
            <TableCell sx={{backgroundColor: "#980DFF"}}/>
            <TableCell sx={{backgroundColor: "#980DFF"}}/>
            <TableCell sx={{backgroundColor: "#980DFF"}}/>
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
                </div>
                <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        RESPONSE FORM FOR SURVEY
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <TextField
          id="outlined-textarea"
          label="Academic Field"
          defaultValue="Engineering"
          InputProps={{
            readOnly: true,
          }}
          style={{width: "100%"}}
        />
              </Typography>
       <Typography gutterBottom style={{marginTop:20}}>
          <TextField
          id="outlined-textarea"
          label="Academic Field Topic"
          defaultValue="How long is your course ?"
          InputProps={{
            readOnly: true,
          }}
          style={{width: "100%"}}
        />
          </Typography>

          <Typography gutterBottom style={{marginTop:20}}>
        <TextField
          id="outlined-textarea"
          label="Kindly write your response here..."
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
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
            </div>
        </body>
    )
}

export default Ongoingsurvey
