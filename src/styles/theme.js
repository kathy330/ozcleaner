import { createMuiTheme } from '@material-ui/core/styles'
// 🌟这个文件的theme只负责material-UI组件的 配色和字体的定义

const theme = createMuiTheme({
    typography: {
      "fontFamily": "museo-sans, sans-serif",
      "fontSize": 15,
      "fontWeightLight": 300,
      "fontWeightRegular": 500,
      "fontWeightMedium": 700,
      "textTransform": "none",
      button: {
          textTransform: 'none'
      }
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
        yellow: '#f4c465' // 订单黄色星级
      },
    },

    iconSize: {
      
    }


})

export default theme