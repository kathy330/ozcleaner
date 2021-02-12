const KathyKey = process.env.REACT_APP_KATHY_KEY;

const getWebApi = () => `https://dog.ceo/api/breeds/image/${KathyKey}`;
const getBackendApi = () => "http://localhost:8000/kathy";

export { getWebApi , getBackendApi};