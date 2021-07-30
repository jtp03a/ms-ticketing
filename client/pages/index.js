import axios from 'axios'

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