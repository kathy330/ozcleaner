import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"
import InsertPostcode from "./PostcodeInput"
import styles from './scss/HomeSelectForm.module.scss' // scss 
// import HomeComponentStyle from './styles/HomeComponentStyle' // 1/3在这里引用其他js style文件会出bug🐛🐛？

// 🌟不能在css里设置material ui 组件的样式，每次重启都会失灵，放在这里可以用
// 🌟官方文档diy的方式在TimePicker,style/HomeComponentStyle.js里有三种

// 🌟scss Module里的引用方法 className={styles.position}
// 🌟material的其他js文件设置diy的引用方法 className={diyStyle.button}
// 🌟material的本页面设置diy的引用方法 style={diyStyle.button}
const diyStyle = {
  button: {
    backgroundColor:'#007bf5',
    borderRadius: '5px',
    fontSize:'1.1rem',
    padding: '11px 12px 11px 12px',
    position: 'absolute',
    top: '78%',
    left: '50%',
    transform: 'translate(-50%, -78%)'
  },
  select: {
    width:'110px',
    marginLeft:'5px',
  },
  bigSelect: {
    width:'140px',
    marginLeft:'5px'
  },

}

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
    // const classes = HomeComponentStyle() //2/3在这里引用其他js style文件会出bug🐛🐛？

    const{bedRoomNum,bathRoomNum,type} = this.state
    return(
      <div className={styles.content}>
      
        <div className={styles.select__position}>
          {/* variant="filled"是背景填充Standard/filled/outlined */}
          {/* <FormControl variant="filled" style={diyStyle.select}> */}

          <FormControl style={diyStyle.select} onSubmit={this.submitHandler}>
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
            {/* <button type="submit">ss</button> */}
          </FormControl>

          <FormControl style={diyStyle.select}>
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

          <FormControl style={diyStyle.bigSelect}>
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
      
        <Button 
          style={diyStyle.button} 
          // className={classes.datePicker} // 3/3在这里引用其他js style文件会出bug🐛🐛？
          variant="contained"
          color="primary"
          type="submit"
        >
          Booking from $80
        </Button>
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
