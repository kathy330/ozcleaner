import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles((theme) => ({
  
  button: {
    margin: theme.spacing(1),
  }, 
}))

export default function SaveButton() {
  const classes = useStyles()

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  )
}
