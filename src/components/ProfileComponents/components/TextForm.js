/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
// import ReactDOM from "react-dom"
// import Select from "react-select";
// import { Redirect } from "react-router-dom" 
import {useDispatch} from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import { TextField,Typography,Grid,Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import {updateEmployeeRequest} from "../../../store/actions/actionCreator"

// const postData = {      
  // address: {
  //   address1: "king street",
  //   address2: "",
  //   suburb: "",
  //   state: "QLD",
  //   postcode: "4102"
  // },
  // startTime: "2020-01-01T00:00:00",
  // endTime: "",
  // userID: "",
//   employeeID: 2222,
//   firstName: "Ervin",
//   lastName: "Howell",
//   phoneNumber: '0400000000'
// }
const useStyles = makeStyles((theme) => ({
  center: {
    [theme.breakpoints.down('xs')]: {
    textAlign:'center',
  }},
  button: {  
    fontSize:'1rem',
    alignContent:'end',
    background: theme.palette.primary.main, // #007bf5
    color: theme.palette.primary.contrastText,
    textalign: 'right',
    marginTop:'2rem',
    paddingInline: '40px', // 太长，小屏幕装不下
    '&:hover': {
      background: theme.palette.primary.hover, // #0050c1
      boxShadow: '0px 2px 10px #888',},
  },
}))

export default function TextForm() {
  const { control, handleSubmit } = useForm()
  const classes = useStyles()
  const dispatch = useDispatch()
  const onSubmit = data => {
    if(data.type!==""
    &&data.postcode!=="" &&data.birthday!=="" 
    // &&data.email!==""&&data.password!==""
    &&data.firstName!=="" &&data.lastName!=="" &&data.phone!==""
    &&data.address1!==""
    &&data.address2!==""&&data.suburb!=="" &&data.state!==""
    ) {
  const newData = {
    // ...postData,
    type:data.type,
    // email:data.email,
    birthday:data.birthday,
    address:{
      address1:data.address1,
      address2:data.address2,
      suburb:data.suburb,
      state:data.state,
      postcode:data.postcode,
    },
    phone:data.phone,
    // password:data.password,
    employeeID: 2222,
    name:{
      firstName:data.firstName,
      lastName:data.lastName,
    }
  } 
    console.log(newData)
    dispatch(updateEmployeeRequest(newData)) 
  }}

  // const loading = useSelector(astate => astate.employee_in_reducer_index.loading)
  // // console.log("loading parameter: ", loading)
  // if (onsubmit && !loading) {
  //   return (<Redirect to="/profile/customer" />)
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="row" spacing={2} className={classes.center}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> First name</Typography> 
          <Controller
            as={(
              <TextField
                id="firstName"
            // label="First name"
                variant="outlined"
                size="small"
              />
)}
            name="firstName"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Last name</Typography> 
          <Controller
            as={(
              <TextField
                id="lastName"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="lastName"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            Street  Address
          </Typography> 
          <Controller
            as={(
              <TextField
                id="address1"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="address1"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Apt  #(optional) </Typography> 
          <Controller
            as={(
              <TextField
                id="address2"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="address2"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Suburb </Typography> 
          <Controller
            as={(
              <TextField
                id="suburb"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="suburb"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> State </Typography> 
          <Controller
            as={(
              <TextField
                id="state"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="state"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Postcode </Typography> 
          <Controller
            as={(
              <TextField
                id="postcode"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="postcode"
            control={control}
            defaultValue=""
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Birthday </Typography> 
          <Controller
            as={(
              <TextField
                id="birthday"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="birthday"
            control={control}
            defaultValue=""
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Phone </Typography> 
          <Controller
            as={(
              <TextField
                id="phone"
            // label="First name"
                variant="outlined"
                size="small"
              />
 )}
            name="phone"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={7} />
        <Grid item xs={12} sm={5}>

          {/* <input type="submit" /> */}
          <Button 
            // href='/order/confirm'
            type="submit"
            variant="contained"
            size="medium"
            startIcon={<SaveIcon />}
            className={classes.button}
          >
            save
          </Button> 
        </Grid>
      </Grid>
    </form>
  )
}



