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
      handler: UserController.getAll
    },
    {
      method: 'GET',
      path: '/{id}',
      handler: UserController.getById
    },
    {
      method: 'PUT',
      path: '/{id}',
      handler: UserController.update
    },
    {
      method: 'DELETE',
      path: '/{id}',
      handler: UserController.delete
    }
  ]
}