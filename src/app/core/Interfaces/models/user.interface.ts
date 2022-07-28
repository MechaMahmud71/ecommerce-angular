export interface User{
  fullName?: string,
  userName?: string,
  firstName?: string,
  lastName?: string,
  address?: object[],
  phoneNo?: string,
  email?: string,
  gender?: string,
  profileImg?: string,
  password: string,
  wishlist: object[],
  carts: object[],
  checkout: object[],
  usedCoupons: object[],
  isVerified: boolean,
  role: string,
  otpToken?: string,
  resetPasswordToken?: string,
  resetPasswordExpire?: string,
  isPassport?: boolean,
  createdAt: string,
  updatedAt:string
}
