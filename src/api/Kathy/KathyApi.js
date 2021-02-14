const KathyKey = process.env.REACT_APP_KATHY_KEY

const getWebApi = () => `https://dog.ceo/api/breeds/image/${KathyKey}`
const getOneEmployee = (id) => `http://localhost:8000/employees/${id}`
const getAllEmployees = () => 'http://localhost:8000/employees/'

export { getWebApi, getOneEmployee, getAllEmployees }
