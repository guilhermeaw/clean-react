import { AccountModel } from '../models/account-model'

interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
