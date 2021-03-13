import { makeStyles } from '@material-ui/core/styles'

const HomeComponentStyle = makeStyles(() => ({
  Picker: {
    padding: "0 10px",
    width: '100%',
    // 🌟 修改自带样式方法：
    // 先浏览器选中要改变的项，看第一个class名字写在这里
    "& .MuiFormLabel-root": { 
      color: "#616161", // 更改label颜色
      fontSize: '1.3rem',
    }
  },

  datePicker: {
    padding: "0 10px",
    width: '100%',
    // 🌟 修改自带样式方法：
    // 先浏览器选中要改变的项，看第一个class名字写在这里
    "& .MuiFormLabel-root": { 
      color: "#616161", // 更改label颜色
      fontSize: '1.3rem',
      marginLeft: '10px',
    }
  },
})
)

export default HomeComponentStyle