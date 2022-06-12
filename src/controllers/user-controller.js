const bcrypt = require('bcrypt')

const StatusCode = require('../network/status-code')
const Response = require('../network/response')
const Token = require('../network/token')
const UserRepository = require('../repositories/user-repository')

class UserController {
  static async signUp (request, h) {
    try {
      const userRepository = new UserRepository()
      const user = await userRepository.create({ ...request?.payload, role: 'user' })
      return Response.success(h, StatusCode?.CREATED, user, 'User created successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async signIn (request, h) {
    try {
      const userRepository = new UserRepository()
      // Validate user
      const user = await userRepository.getOne({ email: request?.payload?.email })
      if (!user) { return Response.error(h, StatusCode?.NOT_FOUND, 'User not found') }
      // Validate password
      const isMatch = bcrypt.compareSync(req?.payload?.password, user?.password)
      if (!isMatch) {
        return Response.error(h, StatusCode?.NOT_AUTHORIZED, 'Email and password do not match')
      }
      // Generate a token to the session
      const token = Token.generate(user?.id, 'User')
      return Response.success(h, StatusCode?.OK, { user, token }, 'User authenticated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getAll (request, h) {
    try {
      const userRepository = new UserRepository()
      const users = await userRepository.getAll()
      return Response.success(h, StatusCode?.OK, users, 'Users list')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async getById (request, h) {
    try {
      const userRepository = new UserRepository()
      const user = await userRepository.getById(request?.params?.id)
      if (!user) { return Response.error(h, StatusCode?.NOT_FOUND, 'User not found') }
      return Response.success(h, StatusCode?.OK, user, `User of id ${request?.params?.id}`)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async update (request, h) {
    try {
      const userRepository = new UserRepository()
      if (!request?.params?.id) { return Response.error(h, StatusCode?.BAD_REQUEST, 'User id is required') }
      const user = await userRepository.update(request?.params?.id, { ...request?.payload, role: 'user' })
      return Response.success(h, StatusCode?.OK, user, 'User updated successfully')
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }

  static async delete (request, h) {
    try {
      const userRepository = new UserRepository()
      await userRepository.delete(request?.params?.id)
      return Response.success(h, StatusCode?.NO_CONTENT)
    } catch (error) {
      return Response.error(h, StatusCode?.SERVER_ERROR, error?.message)
    }
  }
}

module.exports = UserController
