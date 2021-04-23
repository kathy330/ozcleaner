import { makeStyles } from '@material-ui/core'
// 🌟这个文件的style只负责material UI 组件的 配色和字体和样式（从theme引用），不负责位置
// 🌟位置需要给组件加上<div calssName=""></div>，并在scss中定义

// 三种星星：
// import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarHalfIcon from '@material-ui/icons/StarHalf';

export const navBarStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'white',
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    marginInline: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginInline: 0,
    },
  },
  logoimg: {
    height: '5vh'
  },
  bookingButton: {
    // fontSize:'1rem',
    color: 'white',
    background: theme.palette.primary.main,
    borderRadius: '12px', // 跟首页下面booking button一样尺寸
    marginInline: '20px',
    paddingLeft: '25px',
    paddingRight: '25px',
    '&:hover': {
      background: theme.palette.primary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonsBox: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}))

export const buttonStyle = makeStyles((theme) => ({
  primaryButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.primary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },

  secondaryButton: {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.secondary.hover,
      boxShadow: '0px 2px 10px #888888',
    },
  },

  bookingButton: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
    background: theme.palette.primary.main, // #007bf5
    borderRadius: '12px',
    color: theme.palette.primary.contrastText,
    // marginInline: '20px',
    // paddingInline: '50px', // 太长，小屏幕装不下
    padding: '8px 60px',
    '&:hover': {
      background: theme.palette.primary.hover, // #0050c1
      boxShadow: '0px 2px 10px #888',
    },
  },
  previousButton:{
    background: '#29b6f6', // #007bf5
    borderRadius: '8px',
    padding: '8px 30px',
    margin:'30px 0',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: '#29b6f6', // #0050c1
      boxShadow: '0px 2px 10px #888',
    }
  },
  nextButton:{
    background: '#29b6f6', // #007bf5
    borderRadius: '8px',
    padding: '8px 30px',
    margin:'30px 0',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: '#29b6f6', // #0050c1
      boxShadow: '0px 2px 10px #888',
    }
  },
  finalBookingButton:{
    background: '#29b6f6', // #007bf5
    borderRadius: '8px',
    padding: '8px 30px',
    margin:'30px 0',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: '#29b6f6', // #0050c1
      boxShadow: '0px 2px 10px #888',
    },
  }
}))

export const statusStyle = makeStyles((theme) => ({
  green: {
    color: 'white',
    minWidth: '135px',
    background: theme.palette.green.main,
    borderRadius: '20px',
    '&:disabled': {
      color: 'white',
    },

  },
  grey: {
    background: theme.palette.grey.main,
    minWidth: '135px',
    borderRadius: '20px',
    '&:disabled': {
      color: 'white',
    },

  },
  red: {
    background: theme.palette.red.main,
    minWidth: '135px',
    borderRadius: '20px',
    '&:disabled': {
      color: 'white',
    },
  },
  blue: {
    background: theme.palette.blue.main,
    minWidth: '135px',
    borderRadius: '20px',
    '&:disabled': {
      color: 'white',
    },

  },
  yellow: {
    background: theme.palette.yellow.main,
    minWidth: '135px',
    borderRadius: '20px',
    '&:disabled': {
      color: 'white',
    },
  },
  greenSquare: {
    color: 'white',
    background: theme.palette.green.main,
    '&:disabled': {
      color: 'white',
    },
  },
  greySquare: {
    background: theme.palette.grey.main,
    '&:disabled': {
      color: 'white',
    },
  },
  redSquare: {
    background: theme.palette.red.main,
    '&:disabled': {
      color: 'white',
    },
  },
  blueSquare: {
    background: theme.palette.blue.main,
    '&:disabled': {
      color: 'white',
    },
  },
  yellowSquare: {
    background: theme.palette.yellow.main,
    '&:disabled': {
      color: 'white',
    },
  },
  disabled: {
    '&:disabled': {
      color: '#BEC3DC',
    },
  },
}))
