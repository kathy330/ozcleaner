import React, {useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { useForm } from "react-hook-form"
import {getREGULARRequest,postRegularRequest} from "../../store/actions"


const RegularTest = () => {

  const { register, handleSubmit } = useForm()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getREGULARRequest())
  },[])

  const repo = useSelector(state => state.regular_in_reducer_index.repos_in_reducer_init)  
  console.log("init reducer info: ",repo)


  const postData = {      
    address: {
      address1: "a",
      address2: "",
      suburb: "",
      state: "a",
      postcode: ""
    },
    type: "RCCC",
    status: "finished",
    propertyType: "unknown",
    cabinets: 0,
    fridge: 0,
    oven: 0,
    interiorWindows: 0,
    review: "",
    rating: "",
    title: "1",
    bedroomNum: 2,
    bathroomNum: 3,
    price: 1,
    startTime: "2021-02-16T13:00:00",
    endTime: "2020-01-01T12:00:00",
    userID: "",
    employeeID: "",
    firstName: "a",
    lastName: "a",
    'phoneNumber': 12222202100220200202020202020
  }
  const onSubmit = data => {
    const startTime = `${data.date }T${ data.startTime}:00Z` 
   
    const newData = {
      ...postData,
      bedroomNum:data.bedroomNum,
      bathroomNum:data.bathroomNum,
      startTime:startTime,
      endTime:startTime
    }
    console.log('after pick, new data is: ',newData)

    dispatch(postRegularRequest(newData))
  }

  const onErrors = () => {
    console.log("ERROR!")
  }

  const TimeList = ["","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30",
  "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"]
  

  return(
    <>
      <div>
        <p>POST to regular order</p>
        <form onSubmit={handleSubmit(onSubmit,onErrors)}>

          <label htmlFor="bedroom-number">
            *Bedroom number:
            <select name="bedroomNum" ref={register}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <br />
          <label htmlFor="bathroom-number">
            *Bathroom number:
            <select name="bathroomNum" ref={register}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          <br />
          <label htmlFor="task-type">
            *Type of clean:
            <select name="Type" ref={register}>
              <option value="RC">Regular clean</option>
              <option value="EC">End of lease clean</option>
            </select>
          </label>

          <br />
          <label htmlFor="date">
            *Choose the date:
            <input
              type="date"
              name="date"
              ref={register}
            />
          </label>

          <br />
          <label htmlFor="start-time">
            Choose the start time:
            <select name="startTime" ref={register}>
              {TimeList.map((num)=>(
                <option key={num}>
                  {num}                  
                </option>
          ))}
            </select>
          </label>

          <br />
          <button type='submit'>POST REGULAR ORDER</button>
        </form>
      </div> 
    </>
  )
}
export default RegularTest