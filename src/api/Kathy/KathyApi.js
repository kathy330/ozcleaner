const KathyKey = process.env.REACT_APP_KATHY_KEY

const getWebApi = () => `https://dog.ceo/api/breeds/image/${KathyKey}`
export default getWebApi
