import axios from 'axios'

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

LandingPage.getInitialProps = () => {
  
}

export default Index