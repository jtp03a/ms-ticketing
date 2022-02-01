import axios from 'axios'

const LandingPage = ({ response }) => {
  console.log(response)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async () => {
  const response = await axios.get('http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser')

  return response.data
}
 
export default LandingPage