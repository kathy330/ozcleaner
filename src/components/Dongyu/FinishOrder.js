import React from 'react'
import axios from 'axios'

class FinishOrder extends React.Component {

  constructor(){
    super()
    this.state={
      isFinish:"false",
      taskId:''
    }
  }

  checkFinish = () => {
    const {taskId} = this.state

    axios.put(`http://localhost:8000/oni/update/${taskId}`)
    .then(response=>{
        console.log(response)
        const{data:{message}} = response

        if(message === "Update Success!") {
          this.setState({
            isFinish:"success"
          })
        }else {
          this.setState({
            isFinish:"false"
          })
        }
    })
    .catch(error => {
      console.log(error)
      // this.setState({
      //   isFinish:"false, Not found your order!" //找不到订单的判断写在后端了
      // })
    }) 
  }

  changeHandler = (e) => {
    this.setState({
      taskId:e.target.value
    })
  }

  render(){
    const{isFinish} = this.state
    return(
      <div className="finish-order">
        <h1>员工点击Finish按钮，numberOfOrderFinished +1,DB状态改为finish</h1>
        <input
          type="Number"
          name="taskId"
          onChange={this.changeHandler}
          placeholder="*task id"
        />
        <div className="order">
          <h2>
            Order is update
            {' '}
            {`${isFinish}`}
          </h2>
          
          <button 
            type="button"
            onClick={this.checkFinish}
            // className={isFinish ? "finish":"not-finish"}
          >
            Finished
          </button>
        </div>
      </div>
    )
  }
}

export default FinishOrder