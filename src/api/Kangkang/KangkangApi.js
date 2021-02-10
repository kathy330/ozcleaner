const KangkangKey = process.env.REACT_APP_KANGKANG_KEY;

const getWebApi = () => `https://dog.ceo/api/breeds/image/${KangkangKey}`;

export default getWebApi;