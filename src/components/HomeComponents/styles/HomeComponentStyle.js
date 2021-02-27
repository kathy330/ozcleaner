import { makeStyles } from '@material-ui/core/styles'

const HomeComponentStyle = makeStyles((theme) => ({
  // 🌟diy样式方法1: 需要引用的地方：className={classes.root}，
  // 并且需要引入 const classes = useStyles()  🌟diy方法2在timePicker
  datePicker: {
    marginLeft: '5px',
    width: '210px',
  },

  // 🌟diy样式方法3: 嵌套<& p>  需要引用的地方：className={classes.root},下面的<p>自动
  postCode: {
    marginLeft: '5px',
    width: '140px',

    '& p': {
      color: theme.palette.primary.light, // 引用src/theme/primary.light配色
      fontSize: '30px',
    }
  }
  
  // button: {
  //   // background: "#007bf5",
  //   // backgroundColor: '#007bf5',
  //   background: theme.palette.primary.main,
  //   borderRadius: '5px',
  //   color: 'rgb(255, 255, 255)',
  //   left: '50%',
  //   marginInline: "20px",
  //   padding: '11px 12px',
  //   position: 'absolute',
  //   top: '74%',
  //   transform: 'translate(-50%, -74%)',

  //   "&:hover": {
  //     // backgroundColor: "#2196f3",
  //     boxShadow: "0px 2px 10px #888",
  //   }
  // }
})
)

export default HomeComponentStyle