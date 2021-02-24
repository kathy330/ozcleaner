/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import axios from 'axios'
import React,{Component} from 'react'


class YanboForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            ID:'',
            email:'',
            name:'',
            birthday:'',
            phone: "",
            password:'',
            address:{
              address1:"",
              address2:"",
              suburb:"",
              state:'',
              postcode:'',

            }
          }
        }

      changeHandler = (e) =>{
          
          if(e.target.name==="address1"
            ||e.target.name==="address2"
            ||e.target.name==="suburb"
            ||e.target.name==="state"
            ||e.target.name==="postcode"){
            const newLocal = this.state.address
            this.setState({
              address: { ...newLocal, [e.target.name]:e.target.value },
            })
          }
        else{
          this.setState({[e.target.name]:e.target.value})
        }
      }
    

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/users/store',this.state)// 对koa传参
            .then(response=>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
      }

    render(){
        const {ID,email,name,birthday,phone,password,
          address1,address2,suburb,state,postcode}=this.state
       
        return(
          <div>
            <form onSubmit={this.submitHandler}>
              <div>
                <p>Insert your ID</p>
                <input 
                  type="number"
                  name="ID"
                  value={ID}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <p>Insert your email</p>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your name</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your birthday</p>
                <input
                  type="date"
                  name="birthday"
                  value={birthday}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your phone number</p>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your password</p>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandler} 
                />
              </div>
              <h1>Address</h1>
              
              <div>
                <p>Insert your address1</p>
                <input
                  type="string"
                  name="address1"
                  value={address1}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <p>Insert your address2</p>
                <input
                  type="string"
                  name="address2"
                  value={address2}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your suburb</p>
                <input
                  type="string"
                  name="suburb"
                  value={suburb}
                  onChange={this.changeHandler} 
                />
              </div>
              <div>
                <p>Insert your state</p>
                <input
                  type="string"
                  name="state"
                  value={state}
                  onChange={this.changeHandler} 
                />
              </div> 
              <div>
                <p>Insert your postcode</p>
                <input
                  type="number"
                  name="postcode"
                  value={postcode}
                  onChange={this.changeHandler} 
                />
              </div> 
              <button type="submit">Submit</button>
            </form>
          </div>
        )
      }
    }
export default YanboForm