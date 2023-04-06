export enum ApiGatewayErrorType {
  SystemInternal = 'System.Internal',
  AuthTokenExpired = 'Auth.TokenExpired',
  AuthInvalid = 'Auth.Invalid',
  AuthBlocked = 'Auth.Blocked',
  InvalidUsernameOrPassword = 'Auth.InvalidUsernameOrPassword',
  AuthUnverifiedEmail = 'Auth.UnverifiedEmail',
  ValidationBadRequest = 'Validation.BadRequest',
}
