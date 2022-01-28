import axios from 'axios'

const LandingPage = ({ color }) => {
  console.log(currentUser)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async () => {
  const response = await axios.get('https://ms-ticketing.jakepeterson.dev/api/users/currentuser')

  return response.data
}
 
export default LandingPage