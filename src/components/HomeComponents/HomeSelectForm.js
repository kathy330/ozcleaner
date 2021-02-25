import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './scss/HomeSelectForm.module.scss'


class HomeSelectForm extends React.Component {

  constructor(){
    super()
    this.state={
      BedRoomNum:'',
      BathRoomNum:'',
      Type:'',
      date:'',
      StartTime:'',
      Postcode:'',
      TimeList:["","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30",
      "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],
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
  }

  render() {
    const {TimeList} = this.state

    return(
      <div className={styles.content}>

        <form className={styles.position} onSubmit={this.submitHandler}>
    
          <label htmlFor="bedroom-number">
            <select name="BedroomNum" className={styles.selection} onChange={this.changeHandler}>
              <option value="" disabled selected hidden>Bedroom</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label htmlFor="bathroom-number">
            <select name="BathroomNum" className={styles.selection} onChange={this.changeHandler}>
              <option value="" disabled selected hidden>Bathroom</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <label htmlFor="task-type">
            <select name="Type" className={styles.selection} onChange={this.changeHandler}>
              <option value="" disabled selected hidden>Type</option>
              <option value="RC">Regular clean</option>
              <option value="EC">End of lease clean</option>
            </select>
          </label>

          <label htmlFor="date">
            <input
              className={styles.selection__date}
              type="date"
              name="date"
              // value="2020-02-25"
              onChange={this.changeHandler}
            />
          </label>

          <label htmlFor="start-time">
            <select name="StartTime" className={styles.selection} onChange={this.changeHandler}>
              <option value="" disabled selected hidden>Time</option>
              {TimeList.map((num)=>(
                <option key={num}>
                  {num}                  
                </option>
            ))}
            </select>
          </label>

          <label htmlFor="task-postcode">
            <input
              type="Number"
              name="Postcode"
              className={styles.selection__postcode}
              onChange={this.changeHandler}
              placeholder="Postcode"
            />
          </label>
        </form>
        
        <button className={styles.button2} type="button">Booking from $80</button>
        {/* <button className={styles.button1} type="button">Booking from $80</button> */}
        <Button variant="contained" color="primary">Booking from $80</Button>

      </div>
    )
  }
}

export default HomeSelectForm