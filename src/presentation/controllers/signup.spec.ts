import { SignupController } from './signup'

describe('SignUP Controller', () => {
  test('Should return 400 if no name is provides ', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
