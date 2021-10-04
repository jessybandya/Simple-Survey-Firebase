import React, {useState,useEffect} from 'react'
import "./styles.css"
import Ongoingsurvey from '..'
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
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';
import { db } from "../../firebase"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




function Posts({ postId,  ownerEmail, ownerId, ownerUsername, questions, timestamp, formDescription, formTitle, read}) {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [ans, setAns] = React.useState([])



    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClickOpen1 = () => {
        setOpen1(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
    
      const handleClose1 = () => {
        setOpen1(false);
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


      var d = timestamp;
      //var d =val.timestamp;
      
      //NB: use + before variable name
      var date = new Date(+d);

      for(let i = 0; i < questions.length; i++) {
  
        for(let j = 0; j < questions[i].length; j++) {
          
           console.log(questions[i][j]);
        }
     }
      
  return (
      <>
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
                  {formTitle}
                </TableCell>
                <TableCell align="right">401</TableCell>

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
                            <TableCell style={{fontWeight:"600",color:"#0476D0"}}>Owner Username</TableCell>
                            <TableCell style={{fontWeight:"600",color:"#0476D0"}} align="right">Status</TableCell>
                            <TableCell style={{fontWeight:"600",color:"#0476D0"}} align="right">More</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                              <TableCell component="th" scope="row">
                                {date.toDateString()} {date.toLocaleTimeString()}
                              </TableCell>
                              <TableCell>{ownerUsername}</TableCell>
                              <TableCell align="right">Open</TableCell>
                              <TableCell align="right">
                                  <button onClick={handleClickOpen1}  style={{width:80,backgroundColor:"#0476D0",color:"#fff"}}>Respond</button>
                              </TableCell>
                            </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
            <BootstrapDialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1}>
        RESPONSE FORM FOR SURVEY
        </BootstrapDialogTitle>
        <DialogContent dividers>

       <Typography gutterBottom style={{marginTop:20}}>
          <TextField
          id="outlined-textarea"
          label="Descriptions"
          defaultValue={formDescription}
          InputProps={{
            readOnly: true,
          }}
          style={{width: "100%"}}
        />
          </Typography>


  <br />
  <hr />

{questions.map((item,i) =>
<div>
    
    <Typography gutterBottom style={{marginTop:20}}>
          <TextField
          id="outlined-textarea"
          label="Question"
          defaultValue= {item.questionText}
          InputProps={{
            readOnly: true,
          }}
          style={{width: "100%"}}
        />

          </Typography>
    {
    
    (typeof(item.options) == 'object') ?
    <div>
        {
        item.options.map((subRowData,k) =>
        <div>
            
            <FormControlLabel  control={<Radio />} label={subRowData.optionText} />
        </div>
        )

        }
    </div>   
    :
    null
    }

</div>

)}
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
          </>
  )
}

export default Posts
