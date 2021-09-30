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
                      <TableCell style={{fontWeight:"600",color:"#980DFF"}} align="right">No participation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow >
                        <TableCell component="th" scope="row">
                          Fri, 22nd Jan 11.09 PM
                        </TableCell>
                        <TableCell>jessy.bandya5@gmail.com</TableCell>
                        <TableCell align="right">Closed</TableCell>
                        <TableCell align="right">
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
function Researchfindings() {
    return (
        <body >
            <Header/>
            <div className="ResearchBody">
                <div style={{textAlign: "center",fontSize:30,fontWeight:"600"}}><span>RESEARCH FINDINGS</span></div>
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
        
            </div>
        </body>
    )
}

export default Researchfindings
