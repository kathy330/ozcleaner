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
    primary: {
      main: '#007bf5',
      hover: '#107CE6',
    },
    secondary: {
      main: '#F35162',
      hover: '#E55766',
      darkBlue:'#405592',// popUp facrbook登录按钮 
      black:'#131523'// 黑色字体色

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

})



    




export default theme