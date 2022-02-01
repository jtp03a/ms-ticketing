import axios from 'axios'

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async () => {
  const response = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser')

  return response.data
}
 
export default LandingPage