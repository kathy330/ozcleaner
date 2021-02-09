const YanboKey = process.env.REACT_APP_YANBO_KEY;

const getWebApi = () => `https://dog.ceo/api/breed/${YanboKey}/images/random`;




export default getWebApi
