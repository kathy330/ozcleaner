import React from 'react'
import { Avatar, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        fontSize: "36px"
    }
}))

export default function UserAvatar(props) {
    const classes = useStyles()
    const { firstName, lastName } = props
    return (
      <>
        <Avatar className={classes.avatar}>
          {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </Avatar>
        <Box
          fontWeight="fontWeightBold"
          fontSize={20}
          mt={2}
        >
          {`${firstName} ${lastName}`}
        </Box>


      </>
    )
}