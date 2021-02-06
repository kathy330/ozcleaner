const DongyuKey = process.env.REACT_APP_DONGYU_KEY;

const getWebApi = () => `https://dog.ceo/api/breeds/image/${DongyuKey}`;

export default getWebApi
