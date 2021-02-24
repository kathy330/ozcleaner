const Mengxuankey = process.env.REACT_APP_MENGXUAN_KEY
const getWebApi = () => `https://dog.ceo/api/breeds/image/${Mengxuankey}`
const getBackendApi = () => "http://localhost:8000/mx"


export {getWebApi,getBackendApi}

