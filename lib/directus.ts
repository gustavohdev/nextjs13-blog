import {
  TokenAuth,
  auth,
  authentication,
  createDirectus,
  rest,
  staticToken,
} from "@directus/sdk";

// const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
// .with(staticToken(process.env.ADMIN_TOKEN as string))
// const tokenAuth = {access_token: process.env.ADMIN_TOKEN } as TokenAuth
const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
  // .with(staticToken(process.env.ADMIN_TOKEN as string))
  .with(authentication());

// const token = async () => { return await directus.getToken() }
// console.log("my token", token)
// await directus.setToken(process.env.ADMIN_TOKEN as string)
//.with(staticToken(process.env.ADMIN_TOKEN as string))
//.with(rest())

// const directus2 = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)

export default directus;
