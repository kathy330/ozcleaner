import React from "react"
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
// import { Container } from "@material-ui/core"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Checkbox from '@material-ui/core/Checkbox'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'

import ovenIcon from "../../../assets/oven.svg"
import fridgeIcon from "../../../assets/fridge.svg"
import windowIcon from "../../../assets/window.svg"
import cabinetIcon from "../../../assets/cabinet.svg"

// https://www.svgrepo.com/svg/188867/cabinets-storage
// https://www.svgrepo.com/svg/281951/cabinet
// https://www.svgrepo.com/svg/26346/window
// https://www.svgrepo.com/svg/81856/fridge
// https://www.svgrepo.com/svg/209863/oven

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '10px',
    marginTop: '10px',
  },

  pickerBackground: {
    background: 'lightgrey' // 最外层灰色背景
  },

  picker: {
    margin: '3px' // 最外层灰色间距
    // "&:hover": { transform: "scale3d(1.05, 1.05, 1)", }, //hover放大效果
  },

  actionArea: {
    padding: '0 12px' // 白色区域间距
  },

  imageIcon: {
    width: '100%',
  },

  check: {
    padding: '0px' // 让hover效果消失
  }

  // extraText: {
  //   marginRight: '30px',
  //   width: '100%',
  // }
}))

export default function ExtraPicker() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    oven: false,
    fridge: false,
    windows: false,
    cabinet:false
  })

  // 法1 每一条单独写，单独改:
  // const [oven, setOven] = useState(false)
  // const [fridge, setOven] = useState(false)
  // const [windows, setOven] = useState(false)
  // const [cabinet, setOven] = useState(false)
  // 然后每个改变的时候使用 setState({'oven':newState}) ，一共要写四个

  // 法2 写在一整个对象里，使用...state,xxx 改变具体一个属性:
  // const defaultValue = {
    // oven: false,
    // fridge: false,
    // windows: false,
    // cabinet:false  
  // }
  // setState({
  // ...state, 'oven': true
  // })

  
  // 这是checkbox自己属性变化的函数
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    console.log(event.target.name,':',event.target.checked)
  }

  // 这里是点击CardActionArea也会触发checkbox属性变化的函数
  const areaClickChange = (event) => { 
    // console.log(event.target)
    // 点击icon上面，就会有alt属性，点击actionArea上面，就会有name属性
    if(event.target.name==='oven'||event.target.alt==='oven') {
      const newState = !state.oven
      console.log('you choose even: ',newState)

      setState({
        ...state, 'oven': newState
      })
    }
    else if(event.target.name==='fridge'||event.target.alt==='fridge') {
      const newState = !state.fridge
      console.log('you choose fridge: ',newState)

      setState({
        ...state, 'fridge': newState
      })
    }
    else if(event.target.name==='windows'||event.target.alt==='windows') {
      const newState = !state.windows
      console.log('you choose windows: ',newState)

      setState({
        ...state, 'windows': newState
      })
    }
    else if(event.target.name==='cabinet'||event.target.alt==='cabinet') {
      const newState = !state.cabinet
      console.log('you choose cabinet: ',newState)

      setState({
        ...state, 'cabinet': newState
      })
  }
  }
  const { oven,fridge, windows,cabinet } = state

  return(
    <Grid container direction="row" spacing={1} className={classes.root}>
      <Grid item xs={6} sm={3}>
        <Card className={classes.pickerBackground}>
          <Card className={classes.picker} elevation={2}>
            <CardActionArea
              className={classes.actionArea} 
              name="oven"
              onClick={areaClickChange}
              // onClick={() =>setState({'oven':state})}
            >
              <Grid container direction='column' alignItems="flex-end">
                <Grid item xs={6} sm={12}>
                  <Checkbox
                    color="primary"
                    checked={oven}
                    name="oven"
                    onChange={handleChange}
                    className={classes.check}
                  />
                </Grid>

                <Grid item xs={6} sm={12}>
                  <Icon>
                    <img className={classes.imageIcon} src={ovenIcon} alt="oven" />
                  </Icon>
                </Grid>
              </Grid>
            </CardActionArea>
            <Typography variant='h6' align='center'>
              oven
            </Typography>
          </Card>
        </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card className={classes.pickerBackground}>
          <Card className={classes.picker} elevation={2}>

            <CardActionArea
              className={classes.actionArea} 
              name="fridge"
              onClick={areaClickChange}
            >
              <Grid container direction='column' alignItems="flex-end">
                <Grid item xs={6} sm={12}>
                  <Checkbox
                    color="primary"
                    checked={fridge}
                    name="fridge"
                    onChange={handleChange}
                    className={classes.check}
                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <Icon>
                    <img className={classes.imageIcon} src={fridgeIcon} alt="fridge" />
                  </Icon>
                </Grid>
              </Grid>
            </CardActionArea>
            <Typography variant='h6' align='center'>
              fridge
            </Typography>
          </Card>
        </Card>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Card className={classes.pickerBackground}>
          <Card className={classes.picker} elevation={2}>

            <CardActionArea
              className={classes.actionArea} 
              name="windows"
              onClick={areaClickChange}
            >
              <Grid container direction='column' alignItems="flex-end">
                <Grid item xs={6} sm={12}>
                  <Checkbox
                    color="primary"
                    checked={windows}
                    name="windows"
                    onChange={handleChange}
                    className={classes.check}
                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <Icon>
                    <img className={classes.imageIcon} src={windowIcon} alt="windows" />
                  </Icon>
                </Grid>
              </Grid>
            </CardActionArea>
            <Typography variant='h6' align='center'>
              windows
            </Typography>
          </Card>
        </Card>
      </Grid>
      
      <Grid item xs={6} sm={3}>
        <Card className={classes.pickerBackground}>
          <Card className={classes.picker} elevation={2}>

            <CardActionArea
              className={classes.actionArea} 
              name="cabinet"
              onClick={areaClickChange}
            >
              <Grid container direction='column' alignItems="flex-end">
                <Grid item xs={6} sm={12}>
                  <Checkbox
                    color="primary"
                    checked={cabinet}
                    name="cabinet"
                    onChange={handleChange}
                    className={classes.check}
                  />
                </Grid>
                <Grid item xs={6} sm={12}>
                  <Icon>
                    <img className={classes.imageIcon} src={cabinetIcon} alt="cabinet" />
                  </Icon>
                </Grid>
              </Grid>
            </CardActionArea>
            <Typography variant='h6' align='center'>
              cabinet
            </Typography>
          </Card>
        </Card>     
      </Grid>
    </Grid>
  )
}








