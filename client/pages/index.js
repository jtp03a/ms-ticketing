import axios from 'axios'
<<<<<<< HEAD

const LandingPage = ({ color }) => {
  console.log('I am in the component', color)
  return <h1>LandingPage</h1>
}

LandingPage.getInitialProps = ()=> {
  console.log
}
 
const Index = () => {
  return (<h1>Landing Page</h1>)
}
=======
>>>>>>> 500232cdf842598d16e361a2e34e58cb85ae590e

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  try {
    axios.get('/api/users/currentuser')
  } catch (error) {
    
  }
  
  return <h1>LandingPage</h1>
}

// LandingPage.getInitialProps = async () => {
//   try {
//     const response = await axios.get('/api/users/currentuser')

//     return response.data
//   } catch (err) {
    
//   }
// }
 
export default LandingPage