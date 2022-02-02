import axios from 'axios'

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers)
  if (typeof window === 'undefined') {
    const { data } = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {
      headers: req.headers
    })
    return data
  } else {
    const { data } = await axios.get('/api/users/currentuser')
    return data
  }
}
 
export default LandingPage