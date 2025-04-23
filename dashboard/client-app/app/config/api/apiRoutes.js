// utils/apiRoutes.js

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiRoutes = {
  getUsers: `${BASE_URL}/users`,
  getUserById: (id) => `${BASE_URL}/users/${id}`,
  createUser: `${BASE_URL}/users/create`,
  updateUser: (id) => `${BASE_URL}/users/update/${id}`,
  deleteUser: (id) => `${BASE_URL}/users/delete/${id}`,

  // Add your 100+ routes in a similar way
};

export default apiRoutes;
