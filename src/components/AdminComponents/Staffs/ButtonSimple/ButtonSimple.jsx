import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
},
    style1:{
        width:120,
        height:30,
        margin:theme.spacing(1),
        fontSize:17,
        fontWeight:'normal',
        borderRadius:20,
        textAlign:'center',
        background:'#cc584e',

    },
}))

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box style={{display:"flex",flexDirection:"row",justifyContent:'space-around'}}>
        <Button className={classes.style1} variant="contained" color="secondary">
          Save
        </Button>
        <Button className={classes.style1} variant="contained" color="secondary">
          Cancel
        </Button>

      </Box>
      

    </div>
  )
}
