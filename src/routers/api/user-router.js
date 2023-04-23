const UserController = require('../../controllers/user-controller')

module.exports = [
  {
    method: 'POST',
    path: `/api/${process.env.API_VERSION}/users/sign-up`,
    handler: UserController.signUp
  },
  {
    method: 'POST',
    path: `/api/${process.env.API_VERSION}/users/sign-in`,
    handler: UserController.signIn
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/users`,
    options: {
      auth: 'admin-authentication'
    },
    handler: UserController.getAll
  },
  {
    method: 'GET',
    path: `/api/${process.env.API_VERSION}/users/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: UserController.getById
  },
  {
    method: 'PATCH',
    path: `/api/${process.env.API_VERSION}/users/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: UserController.update
  },
  {
    method: 'DELETE',
    path: `/api/${process.env.API_VERSION}/users/{id}`,
    options: {
      auth: 'authentication'
    },
    handler: UserController.delete
  }
]
