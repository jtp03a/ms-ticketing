import axios from 'axios'

const LandingPage = ({ color }) => {
  console.log('I am in the component', color)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async () => {
  // const response = await axios.get('http:///api/users/currentuser')

  // return response.data
  console.log('I am on the server')
  return { color: 'red'}
}
 
export default LandingPage