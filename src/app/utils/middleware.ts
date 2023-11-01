export { default } from 'next-auth/middleware'

//Here we can set up for which pages we need users to be logged in
export const config = { matcher: ['/extra', '/dashboard'] }