import { makeStyles } from '@material-ui/core/styles'

const HomeComponentStyle = makeStyles({
  // 🌟diy样式方法1: 需要引用的地方：className={classes.root}，
  // 并且需要引入 const classes = useStyles()
  // diy方法2在timePicker
  datePicker: {
    marginLeft: '5px',
    width: '150px',
  },

  // 🌟diy样式方法3: 嵌套<& p>  需要引用的地方：className={classes.root},下面的<p>自动
  // diy方法2在TimePicker
  postCode: {
    marginLeft: '5px',
    width: '150px',

    '& p': {
      color: 'rgb(252, 142, 142)',
      fontSize: '30px',
    }
  },
  
})

export default HomeComponentStyle