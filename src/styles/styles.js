import { makeStyles } from '@material-ui/core';
// 🌟这个文件的style只负责material UI 组件的 配色和字体和样式（从theme引用），不负责位置
// 🌟位置需要给组件加上<div calssName=""></div>，并在scss中定义

export const navBarStyle = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: theme.palette.primary.white,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    marginInline: theme.spacing(30),
    [theme.breakpoints.down('md')]: {
      marginInline: 0,
    },
  },
  bookingButton: {
    color: theme.palette.primary.white,
    background: theme.palette.primary.main, // #007bf5
    borderRadius: '25px',
    marginInline: '20px',
    '&:hover': {
      background: theme.palette.primary.main,
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
}));

export const buttonStyle = makeStyles((theme) => ({
  // 🔥这个名字 改成navbar booking button？
  bookingButton: {
    color: theme.palette.primary.white,
    background: theme.palette.primary.main,
    borderRadius: '25px',
    marginInline: '25px',
    '&:hover': {
      background: theme.palette.primary.main,
      boxShadow: '0px 2px 10px #888888',
    },
  },

  homeBookingButton: {
    background: theme.palette.primary.main, // #007bf5
    borderRadius: '5px',
    color: theme.palette.primary.white,
    marginInline: '20px',
    paddingInline: '100px',

    '&:hover': {
      background: theme.palette.primary.dark, // #0050c1
      boxShadow: '0px 2px 10px #888',
    },
  },

  // admin 所有绿色按钮配色和字体和样式，不负责位置
  adminGreenButton: {
    background: theme.palette.secondary.green, // #89b153
    color: theme.palette.primary.white,
    // width:'300px',
    // .....
    // ....

    '&:hover': {
      background: theme.palette.secondary.greenHover,
      boxShadow: '0px 2px 10px #888888',
      // ....
    },
  },

  // admin 所有红色按钮配色和字体和样式，不负责位置
  adminRedButton: {
    color: 'white',
    background: theme.palette.secondary.red, // #f35162
    // .....
    // ....

    '&:hover': {
      background: theme.palette.secondary.redHover,
      boxShadow: '0px 2px 10px #888888',
      // ....
    },
  },

  // admin 所有蓝色按钮配色和字体和样式，不负责位置
  adminBlueButton: {
    color: 'white',
    background: theme.palette.secondary.main, // #007bf5
    // .....
    // ....

    '&:hover': {
      background: theme.palette.secondary.main,
      boxShadow: '0px 2px 10px #888888',
      // ....
    },
  },
}));
