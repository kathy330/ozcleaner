import React from 'react'
import axios from 'axios'
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

// writen by dongyu
class InsertOder extends React.Component {
  constructor() {
    super()
    this.state= {
      TaskId:'',
      Title:'',
      Type:'',
      Status:'confirmed',
      BedroomNum:'',
      BathroomNum:'',
      PropertyType:'unknown',
      Price:'',
      Date:'',
      StartTime:'',
      EndTime:'',
      CabinetsNum:0,
      FridgeNum:0,
      OvenNum:0,
      WindowsNum:0,
      UserId:'',
      EmployeeId:'',
      Review:'',
      Rating:0,
      FirstName:'',
      LastName:'',
      PhoneNumber:'',
      TimeList:["","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30",
      "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],
      Address:'',
      AptName:'',
      Suburb:'',
      State:'',
      Postcode:'',
      LocationLat:-27.470125, // Brisbane
      LocationLng:153.021072,
      ErrorMessage:'None Error'
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    const{TaskId,Title,Type,Status} = this.state
    const{Address,AptName,Suburb,State,Postcode,LocationLat,LocationLng} = this.state
    const{BedroomNum,BathroomNum,PropertyType,Price} = this.state
    const{Date,StartTime,EndTime} = this.state
    const{CabinetsNum,FridgeNum,OvenNum,WindowsNum} = this.state
    const{FirstName,LastName,PhoneNumber} = this.state
    const{UserId,EmployeeId} = this.state
    const{Review,Rating} = this.state

    const addressObj = {"address1":Address,"address2":AptName,"suburb":Suburb,
    "state":State,"postcode":Postcode}
    const locationObj = {"lat":LocationLat,"lon":LocationLng}
    const startDateAndTime = `${Date} ${StartTime}`
    const endDateAndTime = `${Date} ${EndTime}`

    const OrderMessage = {
      "taskID": TaskId,
      "title":Title,
      "type":Type,
      "status":Status,

      "address":addressObj,
      "currentLocation":locationObj,

      "bedroomNum":BedroomNum,
      "bathroomNum":BathroomNum,

      "propertyType":PropertyType,
      "price":Price,
      "startTime":startDateAndTime,
      "endTime":endDateAndTime,
      "cabinets":CabinetsNum,
      "fridge":FridgeNum,
      "oven":OvenNum,
      "interiorWindows":WindowsNum,

      "userID":UserId,
      "employeeID":EmployeeId,
      "review":Review,
      "rating":Rating,

      "firstName":FirstName,
      "lastName":LastName,
      "phoneNumber":PhoneNumber,
  }

    if(Type==="RC") {
      axios.post('http://localhost:8000/regular',OrderMessage)
      .then(response=>{
          console.log(response)
          const{data} = response

          // 如果错误发送RE 不是RC，会返回data{errors:{..}}对象报错，走这条
          // 如果发送重复id 后返回data{code:..}对象报错
          // Object.getOwnPropertyNames判断返回的data是{}还是{error:".."/code:".."}
          if(Object.getOwnPropertyNames(data).length>0) { 
            console.log("Not Send")
            this.setState({
              ErrorMessage:"Failed Posting"
            })
          }else {
            console.log("Send Successful")
            this.setState({
              ErrorMessage:"Successful Posting"
            })
          }
      })
      .catch(error => {
          console.log(error)
      })
    }
    else if(Type==="EC") {      
      axios.post('http://localhost:8000/endOfLease',OrderMessage)
      .then(response=>{
        console.log(response)
        const{data} = response
        // 如果错误发送RE 不是RC，会返回data{errors:{..}}对象报错，走这条
        // 如果发送重复id 后返回data{code:..}对象报错
        // Object.getOwnPropertyNames判断返回的data是{}还是{error:".."/code:".."}
        if(Object.getOwnPropertyNames(data).length>0) { 
          console.log("Not Send")
          this.setState({
            ErrorMessage:"Failed Posting"
          })
        }else {
          console.log("Send Successful")
          this.setState({
            ErrorMessage:"Successful Posting"
          })
        }
    })
    .catch(error => {
        console.log(error)
    })
    } 
    else {
      this.setState({
        ErrorMessage:"Please choose the type of your clean!"
      })
    }
  }

  changeHandler = (e) => {
    const {name} = e.target
    console.log(name)
    console.log(e.target.value)
    this.setState({
      [name]:e.target.value
    })
  }

  render() {
    const {TimeList,ErrorMessage} = this.state

    return(
      <div className="insert-order">
        <p>Input your order information:</p>
        <p>{ErrorMessage}</p>
      
        <form onSubmit={this.submitHandler}>
          <div className="home-page__input">
            <h4>1. Homepage首页输入的信息:</h4>
            <label htmlFor="bedroom-number">
              *Bedroom number:
              <select name="BedroomNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          
            <label htmlFor="bathroom-number">
              *Bathroom number:
              <select name="BathroomNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label htmlFor="task-type">
              *Type of clean:
              <select name="Type" onChange={this.changeHandler}>
                <option> </option>
                <option value="RC">Regular clean</option>
                <option value="EC">End of lease clean</option>
              </select>
            </label>

            <br />
            <label htmlFor="date">
              Choose the date:
              <input
                type="date"
                name="Date"
                onChange={this.changeHandler}
              />
            </label>
                
            <label htmlFor="start-time">
              Choose the start time:
              <select name="StartTime" onChange={this.changeHandler}>
                {TimeList.map((num)=>(
                  <option key={num}>
                    {num}                  
                  </option>
            ))}
              </select>
            </label>
              
            <label htmlFor="post-code">
              Postcode:
              <input
                type="Number"
                name="Postcode"
                onChange={this.changeHandler}
              />
            </label>
          </div>
          
          <br />

          <div className="order-page__input">
            <h4>2. 下订单页面 输入的信息:</h4>
            <h5>2.1 第一栏Extra Clean(这里oven fridge是不是单选选项？有或者没有)</h5>
            <label htmlFor="oven-number">
              Oven number
              <select name="OvenNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="1">1</option>
              </select>
            </label>

            <label htmlFor="fridge-number">
              Fridge number
              <select name="FridgeNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="1">1</option>
              </select>
            </label>

            <label htmlFor="window-number">
              Window number
              <select name="WindowsNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="1">1</option>
              </select>
            </label>

            <label htmlFor="Cabinet-number">
              Cabinet number
              <select name="CabinetsNum" onChange={this.changeHandler}>
                <option> </option>
                <option value="1">1</option>
              </select>
            </label>

            <br />

            <h5>2.2 第二栏个人地址等信息</h5>

            <label htmlFor="first-name">
              *First Name:
              <input
                type="String"
                name="FirstName"
                onChange={this.changeHandler}
              />
            </label>

            <label htmlFor="last-name">
              *Last Name:
              <input
                type="String"
                name="LastName"
                onChange={this.changeHandler}
              />
            </label>

            <br />

            <label htmlFor="address1">
              *Street Address:
              <input
                type="String"
                name="Address"
                onChange={this.changeHandler}
              />
            </label>

            <label htmlFor="address2">
              Apt # (optional):
              <input
                type="String"
                name="AptName"
                onChange={this.changeHandler}
                placeholder="Apt Name(optional)"
              />
            </label>

            <br />

            <label htmlFor="suburb">
              Suburb:
              <input
                type="String"
                name="Suburb"
                onChange={this.changeHandler}
              />
            </label>

            <label htmlFor="state">
              *State:
              <input
                type="String"
                name="State"
                onChange={this.changeHandler}
              />
            </label>

            <br />
            <label htmlFor="phone-number">
              *Phone Number:
              <input
                type="Number"
                name="PhoneNumber"
                onChange={this.changeHandler}
              />
            </label>
          </div>

          <br />

          <div className="back-end__process">
            <h4>3. 下订单后前端处理传递的信息:</h4>
    
            <input
              type="Number"
              name="TaskId"
              onChange={this.changeHandler}
              placeholder="*task id"
            />

            <input
              type="String"
              name="Title"
              onChange={this.changeHandler}
              placeholder="*task title"
            />

            <label htmlFor="task-status">
              *task status
              <select name="Status" onChange={this.changeHandler}>
                <option> </option>
                <option value="confirmed">confirmed</option>
                <option value="assigned">assigned</option>
                <option value="in-progress">in-progress</option>
                <option value="finished">finished</option>
                <option value="reviewed">reviewed</option>
                <option value="cancelled">cancelled</option>
              </select>
            </label>

            <input
              type="String"
              name="PropertyType"
              onChange={this.changeHandler}
              placeholder="property type"
            />

            <input
              type="Number"
              name="Price"
              onChange={this.changeHandler}
              placeholder="*price"
            />

            <br />

            <input
              type="Number"
              name="UserId"
              onChange={this.changeHandler}
              placeholder="userID"
            />

            <input
              type="Number"
              name="EmployeeId"
              onChange={this.changeHandler}
              placeholder="employeeId"
            />

            <br />

            <input
              type="String"
              name="Review"
              onChange={this.changeHandler}
              placeholder="review"
            />

            <input
              type="Number"
              name="Rating"
              onChange={this.changeHandler}
              placeholder="rating"
            />

            <input
              type="String"
              name="EndTime"
              onChange={this.changeHandler}
              placeholder="enter your endTime"
            />
            endtime 是由员工点击完确认后传入的时间
            <br />
          
            <input
              type="Number"
              name="LocationLat"
              onChange={this.changeHandler}
              placeholder="location's lat"
            />

            <input
              type="Number"
              name="LocationLng"
              onChange={this.changeHandler}
              placeholder="location's lng"
            />
            lat lng 是用api的address系统产生

          </div>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }


} 


export default InsertOder


//  {/* <select name="BathroomNum" onChange={this.changeHandler}>
//               {NumOfRoom.map((num)=>(
//                 <option key={num}>
//                   {num}
//                   {' '}
//                   baths
//                 </option>
//               ))}
//             </select> */}