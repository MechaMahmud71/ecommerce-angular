import { User } from "./user.interface"

export interface Auth {
  success?: boolean,
  token?: string,
  data?: User
}
