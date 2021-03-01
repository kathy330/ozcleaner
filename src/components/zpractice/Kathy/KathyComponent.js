import React from 'react'
import axios from 'axios'
// import { getWebApi } from '../../api/Kathy/KathyApi'; // use for image
import { getAllEmployees, getOneEmployee } from '../../../api/practice/Kathy/KathyApi'

class KathyComponent extends React.Component {
  constructor() {
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

  getEmployeeInfo = async () => {
    try {
      const res = await axios.get(getOneEmployee(999909))
      const { data } = res
      this.setState({
        oneEmployee: data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  getEmployeesInfo = async () => {
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

  componentDidMount = () => {
    // this.getWebImg() 
    this.getEmployeeInfo()
    this.getEmployeesInfo()
  }

  render() {
    const { oneEmployee } = this.state
    const { allEmployees } = this.state
    // eslint-disable-next-line array-callback-return
    const listResult = Object.keys(allEmployees).map((keyName, keyIndex) => {
      console.log(keyIndex, allEmployees[keyName])
    })
    console.log(listResult)
    if (oneEmployee !== '') {
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
      )
    }
    return (
      <main>
        <h1>Employee not found!</h1>
      </main>
    )
  }
}
export default KathyComponent