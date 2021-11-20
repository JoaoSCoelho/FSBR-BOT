import 'dotenv/config'

interface IEnv {
  PREFIX: string
  OWNERS: string[]
  TOKEN: string
  MEMBER_DEFAULT_ROLE: string
}

export const env: IEnv = {
  PREFIX: process.env.PREFIX || '!',
  OWNERS: process.env.OWNERS ? process.env.OWNERS.split(',') : [],
  TOKEN: process.env.TOKEN || '',
  MEMBER_DEFAULT_ROLE: process.env.MEMBER_DEFAULT_ROLE || '',
}
