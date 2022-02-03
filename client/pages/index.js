import BuildClient from "../api/build-client"

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async ({ req }) => {
  const { data } = await BuildClient(context).get('/api/users/currentuser')
  return data
}
 
export default LandingPage