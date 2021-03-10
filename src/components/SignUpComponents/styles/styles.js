import { makeStyles } from "@material-ui/core"
// 🌟这个文件的style只负责material UI 组件的 配色和字体和样式（从theme引用），不负责位置
// 🌟位置需要给组件加上<div calssName=""></div>，并在scss中定义


export const navBarStyle = makeStyles((theme) => ({
    AppBar: {
      backgroundColor: theme.palette.primary.white,
    },
    grow:{
      flexGrow:1,
    },
    container: {
      width: 1170,
      margin: "auto",
    },
    bookingButton: {
      color: theme.palette.primary.white,
      background: theme.palette.primary.main, // #007bf5
      borderRadius: "25px",
      marginInline: "20px",
      "&:hover": {
        background: theme.palette.primary.main,
        boxShadow: "0px 2px 10px #888888",
      },
    },
}))

export const buttonStyle = makeStyles((theme) => ({
  // 🔥这个名字 改成navbar booking button？
  homeBookingButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderRadius: '30px',
    marginInline: '25px',
    paddingTop:'2.0%',
    paddingBottom:'2.0%',
    width:'85%',
    
    
    
    // marginTop:'-5px',
    marginBottom:'15px',
      // marginLeft:'40px',
      // marginRight:'40px',
      // paddingInline: '130px',
      // marginRight:'40px',
  
      "&:hover": {
        background: theme.palette.primary.dark, // #0050c1
        boxShadow: "0px 2px 10px #888",
      }
    },
  faceBookButton: {
      background: theme.palette.secondary.darkBlue, // #007bf5
      borderRadius: '30px',
      marginInline: '25px',
      paddingTop:'2.0%',
      paddingBottom:'2.0%',
      marginTop:'3px',
      marginBottom:'20px',
      color: theme.palette.primary.contrastText,
      
      width:'85%',
  
      
      
     "&:hover": {
        background: theme.palette.primary.dark, // #0050c1
        boxShadow: "0px 2px 10px #888",
      }
    },

    googleButton: {
      background: theme.palette.primary.contrastText, // #007bf5theme.palette.primary.white
      borderRadius: '30px',
      marginInline: '25px',
      paddingTop:'2.0%',
      paddingBottom:'2.0%',
      width:'85%',
      marginTop:'-5px',
      marginBottom:'8px',
      color: theme.palette.secondary.black,
     
      "&:hover": {
        background: theme.palette.primary.dark, // #0050c1
        boxShadow: "0px 2px 10px #888",
      }
    }
  

})
)

