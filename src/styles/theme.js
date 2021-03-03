import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'museo-sans, sans-serif',
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    textTransform: 'none',
    button: {
      textTransform: 'none',
    },
    h3: {
      fontWeight: 700,
    },
  },


    palette: {
      // 主配色
      primary: {
        main: '#007bf5', // 首页浅蓝按钮
        dark: '#0050c1', // 首页hover深蓝按钮
        white: '#ffffff' // 纯白
      },
      // 次要配色，订单界面 绿色/红色/浅蓝按钮按钮
      secondary: {
        main: '#007bf5', // 订单浅蓝按钮
        mainHover: '#0001F5', // 订单蓝色hover按钮
        red: '#f35162', // 订单红色按钮
        redHover: '#ba1138', // 订单红色hover按钮
        green: '#89b153', // 订单绿色按钮
        greenHover: '#598125', // 订单绿色hover按钮
        yellow: '#f4c465' ,// 订单黄色星级
        darkBlue:'#405592',// popUp facrbook登录按钮 
        black:'#131523'
      },
  palette: {
    primary: {
      main: '#007bf5',
      hover: '#107CE6',
    },
    secondary: {
      main: '#F35162',
      hover: '#E55766',
    },
    green: {
      main: '#89B153',
      light: '#E8F0DC',
      hover: '#88AB59',
    },
    red: {
      main: '#C5554B',
    },
    grey: {
      main: '#5F647D',
    },
  },

  // 统一字体：
  caption:{ // 首页最大标题（We clean)

  },
  subtitle:{ // 首页小标题（Get your)
   
  },
  button:{
    
  },
  h1: { // 首页（User feedback title/How we works）
    
  },

  h2:{ // 首页（User feedback here）
   
  },

  h3:{ // 首页（-User name）

  },
  h4:{

  },
  h5:{

  }

}})



    




export default theme
