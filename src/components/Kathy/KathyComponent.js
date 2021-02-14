import React from 'react'
import axios from 'axios'
// import { getWebApi } from '../../api/Kathy/KathyApi'; // use for image
import { getAllEmployees, getOneEmployee } from '../../api/Kathy/KathyApi'

class KathyComponent extends React.Component{
    constructor(){
        super()
        this.state = {
        //   displayImgUrl: '',
          oneEmployee: '',
          allEmployees: '',
        }
    }

    // getWebImg = async() => {
    //     try{
    //         const res = await axios.get(getWebApi())
    //         const {data:{message}} = res
    //         this.setState({
    //             displayImgUrl: message
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    
    getEmployeeInfo = async() =>{
        try{
            const res = await axios.get(getOneEmployee(999999))
            const { data } = res
            this.setState({
              oneEmployee: data,
            })
        } catch (e){
            console.log(e)
        }
    }

    getEmployeesInfo = async() => {
        try {
          const res = await axios.get(getAllEmployees())
          const { data } = res
          this.setState({
            allEmployees: data,
          })
        } catch (e) {
          console.log(e)
        }
    }
    
    componentDidMount=()=>{
        // this.getWebImg() 
        this.getEmployeeInfo()
        this.getEmployeesInfo()
    }

    render(){
        const { oneEmployee } = this.state
        const { allEmployees } = this.state
        console.log(allEmployees)
        if (oneEmployee !== 0) {
          return (
            <main>
              <h1>Kathy&apos;s Page</h1>
              <h2>One employee Info</h2>
              <ul>
                <li>
                  Email:
                  {oneEmployee.email}
                </li>
                <li>
                  loginName:
                  {oneEmployee.loginName}
                </li>
                <li>
                  phone:
                  {oneEmployee.phone}
                </li>
                <li>
                  ABN:
                  {oneEmployee.ABN}
                </li>
                <li>
                  birthday:
                  {oneEmployee.birthday}
                </li>
                <li>
                  averageRating:
                  {oneEmployee.averageRating}
                </li>
                <li>
                  totalRating:
                  {oneEmployee.totalRating}
                </li>
                <li>
                  position:
                  {oneEmployee.position}
                </li>
                <li>
                  workingExperience:
                  {oneEmployee.workingExperience}
                </li>
                <li>
                  employmentStatus:
                  {oneEmployee.employmentStatus}
                </li>
              </ul>
            </main>
          );
        } 
        return <h1>Employee not found!</h1>
    }
}

export default KathyComponent