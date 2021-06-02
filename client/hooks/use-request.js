import axios from 'axios'
import { useState } from 'react'

const useRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState(null)

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body)
      return response.data
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Oooops...</h4>
          {JSON.stringify(err)}
          {/* <ul className="my-0" >
            {err.response.data.errors.map(error => <li key={error.message}>{error.message}</li>)}
          </ul> */}
        </div>
      )
    }
  }

  return { doRequest, errors }
}

export default useRequest