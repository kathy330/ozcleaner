const DongyuKey = process.env.REACT_APP_DONGYU_KEY

const getWebApi = () => `https://dog.ceo/api/breeds/image/${DongyuKey}`
const getBackendApi1 = () => "http://localhost:8000/dy/users"
const getBackendApi2 = () => "http://localhost:8000/dy/book"
const getUserListApi = () => "http://localhost:8000/dy/userList"
const getRegRoomApi = () => "http://localhost:8000/dy/regular"
const getEndRoomApi = () => "http://localhost:8000/dy/endOfLease" 


export  {getWebApi,getBackendApi1,getBackendApi2,getUserListApi,getRegRoomApi,getEndRoomApi}
