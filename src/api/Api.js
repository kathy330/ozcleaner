const getOrders = (page, pageSize) => `http://localhost:8000/unassigneddOrder?page=${page}&pageSize=${pageSize}`

export default getOrders