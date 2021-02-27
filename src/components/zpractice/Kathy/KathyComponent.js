
import React from 'react'
/* eslint-disable */
// import axios from 'axios'
// import { getWebApi } from '../../api/Kathy/KathyApi'; // use for image
// import { getAllEmployees, getOneEmployee } from '../../../api/practice/Kathy/KathyApi'
import { DueDate } from '../../AdminComponents/Customers/DueDate'
import { makeStyles, Box, Container, Grid, Typography, Link, Avatar } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LocationOn, Today} from '@material-ui/icons/';
import Icon from '@material-ui/core/Icon';


// class KathyComponent extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//         //   displayImgUrl: '',
//           oneEmployee: '',
//           allEmployees: '',
//         }
//     }

//     // getWebImg = async() => {
//     //     try{
//     //         const res = await axios.get(getWebApi())
//     //         const {data:{message}} = res
//     //         this.setState({
//     //             displayImgUrl: message
//     //         })
//     //     } catch (e) {
//     //         console.log(e)
//     //     }
//     // }
    
//     getEmployeeInfo = async() =>{
//         try{
//             const res = await axios.get(getOneEmployee(999909))
//             const { data } = res
//             this.setState({
//               oneEmployee: data,
//             })
//         } catch (e){
//             console.log(e)
//         }
//     }

//     getEmployeesInfo = async() => {
//         try {
//           const res = await axios.get(getAllEmployees())
//           const { data } = res
//           this.setState({
//             allEmployees: data,
//           })
//         } catch (e) {
//           console.log(e)
//         }
//     }
    
//     componentDidMount=()=>{
//         // this.getWebImg() 
//         this.getEmployeeInfo()
//         this.getEmployeesInfo()
//     }

//     render(){
//         const { oneEmployee } = this.state
//         const { allEmployees } = this.state
//         // eslint-disable-next-line array-callback-return
//         const listResult = Object.keys(allEmployees).map((keyName, keyIndex)=> {
//           console.log(keyIndex, allEmployees[keyName])
//         })
//         console.log(listResult)
//         if (oneEmployee !== '') {
//           return (
//             <main>
//               <h1>Kathy&apos;s Page</h1>
//               <h2>One employee Info</h2>
//               <ul>
//                 <li>
//                   Email:
//                   {oneEmployee.email}
//                 </li>
//                 <li>
//                   loginName:
//                   {oneEmployee.loginName}
//                 </li>
//                 <li>
//                   phone:
//                   {oneEmployee.phone}
//                 </li>
//                 <li>
//                   ABN:
//                   {oneEmployee.ABN}
//                 </li>
//                 <li>
//                   birthday:
//                   {oneEmployee.birthday}
//                 </li>
//                 <li>
//                   averageRating:
//                   {oneEmployee.averageRating}
//                 </li>
//                 <li>
//                   totalRating:
//                   {oneEmployee.totalRating}
//                 </li>
//                 <li>
//                   position:
//                   {oneEmployee.position}
//                 </li>
//                 <li>
//                   workingExperience:
//                   {oneEmployee.workingExperience}
//                 </li>
//                 <li>
//                   employmentStatus:
//                   {oneEmployee.employmentStatus}
//                 </li>
//               </ul>
//             </main>
//           )
//         } 
//         return (
//           <main>
//             <h1>Employee not found!</h1>
//           </main>
//         )
//     }
// }

const useStyles = makeStyles((theme) => ({
  root:{
    border: '1px solid red'
  }
}));
function KathyComponent(){
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="row" justify="center">
        <Grid item xs={9} className={classes.root}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={1}>
              <LocationOnIcon />
            </Grid>
            <Grid item justify="center" xs={11}>
              <Typography variant="body1">
                Locaton
              </Typography>
              <Typography variant="body1">
                Unit 302, 27 Buchanan Street, West End, QLD 4101
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} className={classes.root}>
          <Icon>star</Icon>
        </Grid>
      </Box>
    </Container>
  );
}
export default KathyComponent