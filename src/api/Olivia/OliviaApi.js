const OliviaKey = process.env.REACT_APP_OLIVIA_KEY;

const getWebApi = () => `https://dog.ceo/api/breeds/image/random/${OliviaKey}`;

// const getWebApi = () => "https://dog.ceo/api/breeds/image/random";

export default getWebApi