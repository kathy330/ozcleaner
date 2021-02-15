import React  from 'react'
import axios from 'axios'
import {getWebApi,getBackendApi1,getBackendApi2,
  getUserListApi,getRegRoomApi,getEndRoomApi} from '../../api/Dongyu/DongyuApi'

/* eslint-disable no-unused-expressions */

export const getImage = () => axios.get(getWebApi())
export const getName = () => axios.get(getBackendApi1())
export const getBookName = () => axios.get(getBackendApi2())
export const getUserData = () => axios.get(getUserListApi())
export const getRegRoomData = () => axios.get(getRegRoomApi())
export const getEndRoomrData = () => axios.get(getEndRoomApi())


class Message extends React.Component {
  constructor(){
    super()
    this.state={
      webMessage:'',
      backEndNameMessage:'',
      backEndBookMessage:'',
      // dbMessage:'',
      // dbAddress:'',
      dbRegRoom:'',
      dbEndRoom:''
    }
  }

  componentDidMount(){
    this.getImageApi()
    this.getUserName()
    this.getBookName()
    // this.getUserDBInfo()
    this.getRegDBInfo()
    this.getEndDBInfo()
  }
  
  // 1.直接从网络api获取信息
  getImageApi = async() =>{
    try{
      const response = await (getImage())
      // console.log(response)
      const {data:{message}} = response
      // console.log(message)
      this.setState({
            webMessage:message
      })
    }catch{(e) => {
        console.error(e)
    }}
  }

  // 2.从后端api GET
  getUserName = async() => {
    const response = await (getName())
    const {status} = response
    // console.log(response.data)

    if(status===200)
    {
      const {data} = response
      this.setState({
        backEndNameMessage:data
      })
    }
  }

  // 3.从后端api GET
  getBookName = async() => {
    const response = await (getBookName())
    const {status} = response
    // console.log(response.data)
  
    if(status===200)
    {
      const {data} = response
      this.setState({
        backEndBookMessage:data
      })
    }
  }

  // 4.从MongoDB GET User List by id
  // getUserDBInfo = async() => {
  //   const response = await (getUserData())
  //   const {status} = response
  //   // console.log(response)
  //   console.log(response.data[0]) // 全部信息
  //   // console.log(response.data[0].email) // 取回email
  //   if(status===200)
  //   {
  //     const {data} = response
  //     this.setState({
  //       // dbMessage:data[0].email //取回email
  //       // dbMessage:JSON.stringify(data[0]) // 如果取回整个对象需要加上 JSON.stringify(),否则报错
  //       dbMessage:data[0],// 取回整个对象，在下面render先转化成数组在用map遍历
  //       dbAddress:data[0].address // 取回address对象，下面转化成数组在map遍历
  //     })
  //   }
  // }

  // 5.从MongoDB get Regular room list by task id
  getRegDBInfo = async() => {
    const response = await (getRegRoomData())
    const {status} = response
    // console.log(response)
    console.log(response.data[0]) // 全部信息
    if(status===200)
    {
      const {data} = response
      this.setState({
        dbRegRoom:data[0] // 取回整个对象，在下面render先转化成数组在用map遍历
      })
    }
  }

  // 6.从MongoDB get End of room list by task id
  getEndDBInfo = async() => {
    const response = await (getEndRoomrData())
    const {status} = response
    // console.log(response)
    console.log(response.data[0]) // 全部信息
    if(status===200)
    {
      const {data} = response
      this.setState({
        dbEndRoom:data[0] // 取回整个对象，在下面render先转化成数组在用map遍历
      })
    }
  }


  render(){
    const{webMessage,backEndNameMessage,backEndBookMessage} = this.state
    // 1. 取回User List
    // const{dbMessage} = this.state
    // const result = Object.entries(dbMessage)// 先把object转化成Array数组，下面才可以map遍历
    // result.shift() // 移除第一个address对象，因为这里面是Object，无法直接打印
    // // console.log(result) // 此时result是移除address后的数组了

    // const{dbAddress} = this.state // address因为有嵌套，放在这里单独打印
    // const address = Object.entries(dbAddress) // 先把object转化成Array数组，下面才可以map遍历
    // // console.log(address)

    // 2. 取回RegRoom List
    const{dbRegRoom} = this.state
    const regRoomList = Object.entries(dbRegRoom)// 先把object转化成Array数组，下面才可以map遍历
    // console.log(regRoomList)

    // 3. 取回End Leese List
    const{dbEndRoom} = this.state
    const endRoomList = Object.entries(dbEndRoom)// 先把object转化成Array数组，下面才可以map遍历
    // console.log(endRoomList)

    return(
      <>
        <div className="dongyu-page__image-api">
          <h2>1. Get the image from api:</h2>
          <img src={webMessage} alt="dog" />
        </div>

        <div className="dongyu-page__backend-message">
          <h2>2. Get the message from back-end:</h2>
          <br />
          <span>
            Message1:
            {backEndNameMessage}
          </span>
          <br />
          <span>
            Message2:
            {backEndBookMessage[0]}
            ,
            {backEndBookMessage[1]}
            ,
            {backEndBookMessage[2]}
          </span>
        </div>

        {/* <div className="dongyu-page__backend-message">
          <h2>3.Get User List Table By User Id (From MongoDB):</h2>
          <ul>
            {result.map((item)=>(
              // Keys do not have to be unique globally. 
              // They just need to be unique across sibling elements.
              <li key={item[0]}> 
                {item[0]} 
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
          <ul>
            {address.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
        </div> */}

        <div className="dongyu-page__backend-message get-regular-list">
          <h2>4.Get Regular Order List Table By Task Id (From MongoDB):</h2>
          <ul>
            {regRoomList.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
        </div>

        <div className="dongyu-page__backend-message get-end-list">
          <h2>5.Get End of Lease Order List Table By Task Id (From MongoDB):</h2>
          <ul>
            {endRoomList.map((item)=>(
              <li key={item[0]}>
                {item[0]}
                {' : '}
                {item[1]}
              </li>
            ))}
          </ul>
        </div>
      
        <div className="dongyu-page__backend-message send-post" /> 
      
      </>
    )
  }
}

export default Message