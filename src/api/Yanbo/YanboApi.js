const YanboKey = process.env.REACT_APP_YANBO_KEY;

const getWebApi = () => `https://dog.ceo/api/breed/${YanboKey}/images/random`;
const getBackendApi = () => "http://localhost:8000/yanbo";




export  {getWebApi,getBackendApi}
