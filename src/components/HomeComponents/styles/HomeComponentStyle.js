import { makeStyles } from '@material-ui/core/styles'

const HomeComponentStyle = makeStyles((theme) => ({
  // 🌟diy样式方法1: 需要引用的地方：className={classes.root}，
  // 并且需要引入 const classes = useStyles()  🌟diy方法2在timePicker
  roomPicker: {
    marginLeft: '5px',
    width: '140px',
  },

  typePicker: {
    marginLeft: '5px',
    width: '170px',
  },
  
  datePicker: {
    marginLeft: '5px',
    width: '210px',
  },

  // 🌟diy样式方法3: 嵌套<& p> 引用:className={classes.root},下面的<p>自动上色
  postCode: {
    marginLeft: '5px',
    width: '140px',

    '& p': {
      color: theme.palette.primary.light, // 引用src/theme/primary.light配色
      fontSize: '30px',
    }
  }
})
)

export default HomeComponentStyle