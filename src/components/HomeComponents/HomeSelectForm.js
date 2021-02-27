import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import DatePicker from "./components/DatePicker"
import TimePicker from "./components/TimePicker"
import InsertPostcode from "./components/PostcodeInput"
import styles from './scss/HomeSelectForm.module.scss' // scss 
import HomeButton from './components/HomeButton'
// import HomeComponentStyle from './styles/HomeComponentStyle' //开会🐛 1/3

// 🌟不能在css里设置material ui 组件的样式，每次重启都会失灵，放在这里可以用
// 🌟官方文档diy的方式在TimePicker,style/HomeComponentStyle.js里有三种
// 🌟scss Module里的引用方法 className={styles.position}
// 🌟material的其他js文件设置diy的引用方法 className={diyStyle.button}
// 🌟material的本页面设置diy的引用方法 style={diyStyle.button}
const diyStyle = {
  roomSelect: {
    width:'140px',
    marginLeft:'5px',
  },
  typeSelect: {
    width:'170px',
    marginLeft:'5px'
  },
}
// const classes = HomeComponentStyle() //开会🐛 2/3

class HomeSelectForm extends React.Component {
  
  constructor(){
    super()
    this.state={
      bedRoomNum:'',
      bathRoomNum:'',
      type:'',
      date:'',
      StartTime:'',
      Postcode:'',
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    const {BedRoomNum,BathRoomNum,Type} = this.state
    const {date,StartTime} = this.state
    const {Postcode} = this.state
    const startDateAndTime = `${date}T${StartTime}:00.000+00:00`

    console.log("bedroom: ",BedRoomNum)
    console.log("bathroom: ",BathRoomNum)
    console.log("type: ",Type)
    console.log("start time: ",startDateAndTime)
    console.log("postcode: ",Postcode)
  }

  changeHandler = (e) => {
    const {name} = e.target
    this.setState({
      [name]:e.target.value
    })
    console.log(name,e.target.value)
  }
  
  render() {
    const{bedRoomNum,bathRoomNum,type} = this.state
    return(
      <div className={styles.content}>
      
        <div className={styles.select__position}>
          {/* <div className={classes.datePicker}> //开会🐛 2/3 */}

          {/* variant="filled"是背景填充Standard/filled/outlined */}
          {/* <FormControl variant="filled" style={diyStyle.select}> */}
          {/* 🌟这三个FormControl等会saga后，也拆分出去，暂时放这里 */}
          <FormControl style={diyStyle.roomSelect} onSubmit={this.submitHandler}>
            <InputLabel id="demo-simple-select-filled-label">Bedroom</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={bedRoomNum}
              name="bedRoomNum"
              onChange={this.changeHandler}
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={diyStyle.roomSelect}>
            <InputLabel id="demo-simple-select-filled-label">Bathroom</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={bathRoomNum}
              name="bathRoomNum"
              onChange={this.changeHandler}
            >
              <MenuItem value="0">0</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={diyStyle.typeSelect}>
            <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={type}
              name="type"
              onChange={this.changeHandler}
            >
              <MenuItem value="RC">Regular</MenuItem>
              <MenuItem value="EC">End of lease</MenuItem>
            </Select>
          </FormControl>
        
          <DatePicker />
          <TimePicker />
          <InsertPostcode />
        </div>

        <div className={styles.select__button}>
          <HomeButton />
        </div>

      </div>
    )
  }
}

export default HomeSelectForm



// {/* <button className={styles.button2} type="button">Booking from $80</button> */}
// {/* <button className={styles.button1} type="button">Booking from $80</button> */}
        
// {/* <form className={styles.position} onSubmit={this.submitHandler}>
    
// <label htmlFor="bedroom-number">
//   <select name="BedroomNum" className={styles.selection} onChange={this.changeHandler}>
//     <option value="" disabled selected hidden>Bedroom</option>
//     <option value="0">0</option>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//   </select>
// </label>

// <label htmlFor="bathroom-number">
//   <select name="BathroomNum" className={styles.selection} onChange={this.changeHandler}>
//     <option value="" disabled selected hidden>Bathroom</option>
//     <option value="0">0</option>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     <option value="5">5</option>
//   </select>
// </label>

// <label htmlFor="task-type">
//   <select name="Type" className={styles.selection} onChange={this.changeHandler}>
//     <option value="" disabled selected hidden>Type</option>
//     <option value="RC">Regular clean</option>
//     <option value="EC">End of lease clean</option>
//   </select>
// </label>

// <label htmlFor="date">
//   <input
//     className={styles.selection__date}
//     type="date"
//     name="date"
//     // value="2020-02-25"
//     onChange={this.changeHandler}
//   />
// </label>

// <label htmlFor="start-time">
//   <select name="StartTime" className={styles.selection} onChange={this.changeHandler}>
//     <option value="" disabled selected hidden>Time</option>
//     {TimeList.map((num)=>(
//       <option key={num}>
//         {num}                  
//       </option>
//   ))}
//   </select>
// </label>

// <label htmlFor="task-postcode">
//   <input
//     type="Number"
//     name="Postcode"
//     className={styles.selection__postcode}
//     onChange={this.changeHandler}
//     placeholder="Postcode"
//   />
// </label>
// </form> */}
