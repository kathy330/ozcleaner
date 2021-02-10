const WystanKey = process.env.REACT_APP_WYSTAN_KEY;


const getWebApi = () => `https://dog.ceo/api/breeds/image/${WystanKey}`;

export default getWebApi
