/* eslint-disable */
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  makeStyles,
  Button,
  TextareaAutosize,
  Grid,
  Typography,
  FormControlLabel
} from '@material-ui/core';
import { useDispatch } from 'react-redux'
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
  const [text, setText] = React.useState(value);
  const classes = useStyles()
  const handleChange = (err) => {
    const value = err.target.value;
    setText(value);
    onChange(value);
  };
  return (
    <TextareaAutosize
      onChange={handleChange}
      value={text}
      className={classes.text}
      required
      rowsMin={3}
    />);
};

export default function App(props) {
  const { _id, type } = props
  console.log(props)
  const dispatch = useDispatch()
  const [rateStar, setRateStar] = React.useState(0.0)
  const { control, handleSubmit, register } = useForm()
  const classes = useStyles()
  const onSubmit = data => {
    console.log(data)
    const payload = { id: _id, type: type, review: data.review, rate: rateStar }
    console.log(payload)
    // dispatch
    // dispatch(updateProfileRequest(data)) 
    dispatch(submitReviewsRequest(payload))
    alert('Your review has been uploaded successfully! ')
  }

  return (
    <Grid className={classes.grid}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='subtitle2' className={classes.title}>Write Review: </Typography>


        <FormControlLabel control={
          <>
            <input name="rating" type="number" value={rateStar} ref={register} readOnly hidden />
            <Rating
              name="rating"
              value={rateStar}
              precision={0.5}
              onChange={(_, value) => {
                setRateStar(value);
              }}
              icon={<StarIcon fontSize="inherit" />}
              className={classes.stars}
            />
          </>
        }
        />
        <Controller name="review" as={ParseTextarea} control={control} required />
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
    </Grid>
  )
}

