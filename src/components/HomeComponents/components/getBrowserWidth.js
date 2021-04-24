import React from 'react'
import withWidth from '@material-ui/core/withWidth'

function MyComponent(props) {
  const {width} = props
  console.log("当前浏览器size为: ",width)
  return (
    <div>
      {`当前宽度: ${width}`}
    </div>
)
}

export default withWidth()(MyComponent)