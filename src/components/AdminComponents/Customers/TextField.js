/* eslint-disable */
import React,{useState} from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  makeStyles,
  Button,
  TextareaAutosize,
  Grid,
  Typography,
  FormControlLabel
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import StarIcon from '@material-ui/icons/Star'
import { Rating } from '@material-ui/lab'
import { submitReviewsRequest } from '../../../store/actions'


// style
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 10,
  },
  rate: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  grid: {
    padding: "7px"
  },
  title: {
    marginBottom: "10px"
  },
  text: {
    marginBottom: "10px",
    width: '85%',
    maxWidth: '100%'
  },
  stars: {
    marginLeft: '7px',
    marginBottom: '10px'

  }
}))

const ParseTextarea = ({ value = '', onChange }) => {
  const [text, setText] = useState(value)
  const classes = useStyles()
  const handleChange = (err) => {
    const {value} = err.target
    setText(value)
    onChange(value)
  }
  return (
    <TextareaAutosize
      onChange={handleChange}
      value={text}
      className={classes.text}
      required
      rowsMin={3}
    />
)
}

export default function App(props) {
  const { _id, type } = props
  console.log(props)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [rateStar, setRateStar] = useState(0.0)
  const [reviews, setReviews] = useState('')
  const { control, handleSubmit, register } = useForm()
  const classes = useStyles()
  
  const onSubmit = data => {
    setOpen(true)
    setReviews(data.review)
    // console.log(data)
    // payload = { id: _id, type: type, review: data.review, rate: rateStar }
    // console.log(payload)
    // dispatch
    // dispatch(updateProfileRequest(data)) 
    // dispatch(submitReviewsRequest(payload))
    // alert('Your review has been uploaded successfully! ')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const hadlesubmit =() => {
    setOpen(false)
    const payload = { id: _id, type: type, review: reviews, rate: rateStar }
    dispatch(submitReviewsRequest(payload))
  }

  return (
    <Grid className={classes.grid}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='subtitle2' className={classes.title}>Write Review: </Typography>


        <FormControlLabel control={(
          <>
            <input name="rating" type="number" value={rateStar} ref={register} readOnly hidden />
            <Rating
              name="rating"
              value={rateStar}
              precision={0.5}
              onChange={(_, value) => {
                setRateStar(value)
              }}
              icon={<StarIcon fontSize="inherit" />}
              className={classes.stars}
            />
          </>
        )}
        />
        <Controller name="review" as={ParseTextarea} control={control} defaultValue='' required />
        <br />
        <Button
          name="rating"
          type="submit"
          variant="outlined"
          color="primary"
          ref={register}
        >
          SUBMIT
        </Button>
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialog}>
          Do you want to upload this review?
        </DialogTitle>
        <DialogActions>
          <Button onClick={hadlesubmit} color="primary">
            YES
          </Button>
          <Button onClick={handleClose} color="primary">
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

