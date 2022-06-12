const UserController = require('../../controllers/user-controller')

module.exports = {
  path: 'users',
  routes: [
    {
      method: 'POST',
      path: '/sign-up',
      handler: UserController.signUp
    },
    {
      method: 'POST',
      path: '/sign-in',
      handler: UserController.signIn
    },
    {
      method: 'GET',
      path: '',
      options: {
        auth: 'admin-authentication'
      },
      handler: UserController.getAll
    },
    {
      method: 'GET',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: UserController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: UserController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      options: {
        auth: 'authentication'
      },
      handler: UserController.delete
    }
  ]
}
