import React from 'react'
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Avatar,
} from '@material-ui/core'
import { LocationOn, Today } from '@material-ui/icons'

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

const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid red',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: '20px',
  },
}))
function KathyComponent() {
  const classes = useStyles()

  return (
    <Container maxWidth="md">

      <Grid container>

        <Button>UNCONFIRMED</Button>
        <Button>IN PROGRESS</Button>
        <Button>COMPLETED</Button>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={9} className={classes.root}>
          <Box display="flex" flexDirection="row" m={1}>
            <Grid item xs={2} sm={1} className={classes.icon}>
              <Avatar>J</Avatar>
            </Grid>
            <Grid item justify="center" xs={9} sm={10}>
              <Typography variant="subtitle2">
                CREATE BY
              </Typography>
              <Grid container direction="row" justify="space-between" space={5}>
                <Link href="/kathy" variant="subtitle2">
                  Jack P.
                </Link>
                <Typography variant="subtitle2">
                  23 hours ago
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box display="flex" flexDirection="row" m={1}>
            <Grid item xs={2} sm={1} className={classes.icon}>
              <Avatar>J</Avatar>
            </Grid>
            <Grid item justify="center" xs={9} sm={10}>
              <Typography variant="subtitle2">ASSIGNED TO</Typography>
              <Grid container direction="row" justify="space-between" space={5}>
                <Link href="/kathy" variant="subtitle2">
                  Michael J.
                </Link>
                <Typography variant="subtitle2">
                  21 hours ago
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box display="flex" flexDirection="row" m={1}>
            <Grid item xs={2} sm={1} className={classes.icon}>
              <LocationOn />
            </Grid>
            <Grid item justify="center" xs={10} sm={11}>
              <Typography variant="subtitle2">LOCATION</Typography>
              <Typography variant="body2">
                Unit 302, 27 Buchanan Street, West End, QLD 4101
              </Typography>
            </Grid>
          </Box>

          <Box display="flex" flexDirection="row" m={1}>
            <Grid item xs={2} sm={1} className={classes.icon}>
              <Today />
            </Grid>
            <Grid item justify="center" xs={10} sm={11}>
              <Typography variant="subtitle2">DUE DATE</Typography>
              <Typography variant="body2">11:30AM, Sunday, 24th Jan 2021</Typography>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} className={classes.root}>
          <Typography variant="subtitle2" align="center">
            Price
          </Typography>
          <Typography variant="h2" align="center">
            800
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
export default KathyComponent
