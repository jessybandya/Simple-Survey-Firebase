import React, { useState,useEffect } from 'react'
import "./styles.css"
import Header from '../Header'
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
import { useHistory } from 'react-router';
import { auth, googleProvider } from '../firebase';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';



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

function Login() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');
    let dispatch = useDispatch();
    const [loading, setLoading] = useState(false);




    const login = async(e)=> {
      e.preventDefault();
      setLoading(true)
     try{
      const result = await auth.signInWithEmailAndPassword(email, password)
      const {user} = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          email: user.email,
          token: idTokenResult.token,
        }

      });
      history.push('/')
     }catch(error){
       toast.error(error.message)
       setLoading(false)

     }
    }


    const googleLogin = async () =>{
      auth
      .signInWithPopup(googleProvider)
      .then( async(result)=>{
       const {user} = result;
       const idTokenResult = await user.getIdTokenResult();
       dispatch({
        type: 'LOGGED_IN_USER',
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },

      });
      history.push('/')
      })
      .catch((err) => toast.err(err.message))
    }
    return (
      <body>
        <>
    <Header/>
    <ToastContainer/>

<div className="loginbody">
<div  class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span ><i class="fab fa-facebook-square"></i></span>
					<span onClick={googleLogin}><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
                    <span><i class="fab fa-linkedin-in"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control"
            onChange={(e) => {
              setEmail(e.target.value)
          }}
            placeholder="Enter email"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" 
            onChange={(e) => {
              setPassword(e.target.value)
          }}
            placeholder="password"/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Remember Me   
					</div>
					<div class="form-group">
						<button  onClick={login}  class="btn float-right login_btn">{loading ? <CircularProgress style={{height:25,width:25,color:"blue"}}/> : <span>Login</span>}</button>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?
                    <a href="#" onClick={handleClickOpen}>Sign Up</a>
    				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <BootstrapDialogTitle  id="customized-dialog-title" style={{backgroundColor: "#000",color:"#fff",borderBottom:"1px solid #fff"}} onClose={handleClose} >
          Pre-SignUp Modal
        </BootstrapDialogTitle>
        <DialogContent dividers class="anim">
          <Typography gutterBottom style={{backgroundColor: "#000"}}>

        
            <a style={{fontSize:18}} href="/registerInstitution">
        
                <span></span>
        
                <span></span>
        
                <span></span>
        
                <span></span>
        
                Register as an institution
        
            </a>
            <a href="/registerstudent">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>

        Register as a student

    </a>
    <a href="/registerindividual">
        
        <span></span>

        <span></span>

        <span></span>

        <span></span>

        Register as an individual

    </a>
        
          </Typography>

        </DialogContent>

      </BootstrapDialog>
      </div>
</>

</body>
    )
}

export default Login
