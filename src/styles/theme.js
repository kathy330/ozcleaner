import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      "fontFamily": "museo-sans, sans-serif",
      "fontSize": 20,
      "fontWeightLight": 300,
      "fontWeightRegular": 500,
      "fontWeightMedium": 700,
      "textTransform": "none",
      button: {
          textTransform: 'none'
      }
    },
})

export default theme