import React from 'react'
import Box from '@material-ui/core/Box'
import UploadBIcon from './components/UploadIcon'
import ProfileAvatar from './components/ProfileAvatar'

export default function ProfileLeft() {
  return (
    <Box
      display='span'
      flex-direction='column'
      flex-wrap='wrap'
      marginTop='2vh'
      marginBottom='2vh'
    >
      <UploadBIcon />
      <ProfileAvatar />
    </Box>        
  )
}
