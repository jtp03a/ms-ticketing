import 'bootstrap/dist/css/bootstrap.css'
import BuildClient from '../api/build-client'
import App from 'next/app'

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return ( 
  <div>
    <h1>Header</h1>
    <Component {...pageProps} />
  </div>
  )}

  AppComponent.getInitialProps = async (appContext) => {
    console.log(Object.keys(appContext))
    const client = BuildClient(appContext.ctx)
    const { data } = client.get('/api/users/currentuser')
    
    let pageProps = {}

    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx)
    }
  
    console.log('I am the custom app component', data)

    return {
      pageProps,
      ...data
    }
  }

export default AppComponent

