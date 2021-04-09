
const header=()=>{
    const {token} = JSON.parse(localStorage.getItem('userInfo')).data
    const Header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
    return {headers:Header}
    }
export default header