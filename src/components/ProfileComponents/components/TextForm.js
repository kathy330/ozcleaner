/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React,{useState} from "react"
// import ReactDOM from "react-dom"
// import Select from "react-select";
// import { Redirect } from "react-router-dom" 
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import {useDispatch,useSelector} from 'react-redux'
import { useForm, Controller } from "react-hook-form"
import { TextField,Typography,Grid,Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import {updateProfileRequest} from "../../../store/actions/actionCreator"


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
    // [theme.breakpoints.down('xs')]: {
    //   textAlign: 'center',
    // }
    textAlign: 'left',
  },

  button: {
    // alignContent: 'center',
    background: theme.palette.primary.main, // #007bf5
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
    marginTop: '2rem',
    paddingInline: '50px', // 太长，小屏幕装不下
    // textalign: 'center',

    '&:hover': {
      background: theme.palette.primary.hover, // #0050c1
      boxShadow: '0px 2px 10px #888',},
  },

  formcenter: {
    // padding: '0 5vh',
    width: '100%',
  }
}))

export default function TextForm() {
  const { control, handleSubmit } = useForm()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const onSubmit = data => {
    setOpen(true)
    if(data.type!==""
    &&data.postcode!=="" &&data.birthday!=="" 
    // &&data.email!==""&&data.password!==""
    &&data.firstName!=="" &&data.lastName!=="" &&data.phone!==""
    &&data.address1!==""
    &&data.address2!==""&&data.suburb!=="" &&data.state!==""
    ) {
  const newData = {
    address:{
      address1:data.address1,
      address2:data.address2,
      suburb:data.suburb,
      state:data.state,
      postcode:data.postcode,
    },
    phone:data.phone,
    name:{
      firstName:data.firstName,
      lastName:data.lastName,
    }
  } 
    console.log(newData)
    dispatch(updateProfileRequest(newData)) 
  }}
  const detail = useSelector(state => state.employee_in_reducer_index)
  const handleClose = () =>{setOpen(false)}
  const {profile}= detail

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid 
        container
        direction="row"
        spacing={2}
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.center}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> First name</Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Last name</Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            Street  Address
          </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Apt  #(optional) </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Suburb </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> State </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Postcode </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6"> Phone </Typography> 
          <Controller
            className={classes.formcenter}
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
            required
          />
        </Grid>

        {/* <Grid item xs={12} sm={7} />
        <Grid item xs={12} sm={5}>

          <Button 
            type="submit"
            variant="contained"
            size="medium"
            startIcon={<SaveIcon />}
            className={classes.button}
          >
            save
          </Button> */}

        {/* <Grid item xs={12} sm={7} /> */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={4}>
            {/* <input type="submit" /> */}
            <Button 
            // href='/order/confirm'
              type="submit"
              variant="contained"
              size="medium"
              startIcon={<SaveIcon />}
              className={classes.button}
            >
              SAVE
            </Button> 
          </Grid>
        </Grid>

      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog}>
          Update profile successfully!
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  )
}



