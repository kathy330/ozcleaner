import React from 'react'
import {useDispatch} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { useForm,Controller } from "react-hook-form"
import {updateRegularRequest} from "../../store/actions"


function UpdateTesta () {

  const { register, handleSubmit,control } = useForm()
  const dispatch = useDispatch()

  const onSubmit = data => {
    console.log(data)
    dispatch(updateRegularRequest(data))
  }

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="bedroom-number">
          order status:
          <select name="orderstatus" ref={register}>
            <option value="">--</option>
            <option value="cancelled">cancelled</option>
            <option value="in-progress">in-progress</option>
          </select>
        </label>

        <br />
        <br />

        <Controller
          as={(<TextField label="task id" />)}
          name="taskid"
          required
          control={control}
          defaultValue=""
        />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateTesta