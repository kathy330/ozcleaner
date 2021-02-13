const KangkangKey = process.env.REACT_APP_KANGKANG_KEY

const getWebApi = () => `https://dog.ceo/api/breeds/image/${KangkangKey}`
const getBackendApi1 = () => "http://localhost:8000/kk"

export {getWebApi, getBackendApi1}
