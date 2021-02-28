import React from 'react'

import BedroomPicker from './BedroomPicker'
import BathroomPicker from './BathroomPicker'
import TypePicker from './TypePicker'
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"
import InsertPostcode from "./PostcodeInput"
import HomeButton from './HomeButton'

import scssStyle from '../scss/HomeContent.module.scss' // scss 

// 🌟官方文档diy的方式在TimePicker,style/HomeComponentStyle.js里有三种
// 🌟scss Module/material style的引用方法 className={styles.position}
// 🌟material的本页面设置diy的引用方法 style={diyStyle.button}

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
    const {bedRoomNum,bathRoomNum,type} = this.state
    const {date,StartTime} = this.state
    const {Postcode} = this.state
    const startDateAndTime = `${date}T${StartTime}:00.000+00:00`

    console.log("bedroom: ",bedRoomNum)
    console.log("bathroom: ",bathRoomNum)
    console.log("type: ",type)
    console.log("start time: ",startDateAndTime)
    console.log("postcode: ",Postcode)
  }

  changeHandler = (e) => {
    const {name} = e.target
    this.setState({
      [name]:e.target.value
    })
    // console.log(name,e.target.value)
  }
  
  render() {
    return(
      <div>
        <div className={scssStyle.select__position}>
          <BedroomPicker />
          <BathroomPicker />
          <TypePicker />
          <DatePicker />
          <TimePicker />
          <InsertPostcode />
        </div>

        <div className={scssStyle.select__button}>
          <HomeButton />
        </div>
      </div>
    )
  }
}

export default HomeSelectForm