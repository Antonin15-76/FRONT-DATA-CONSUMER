import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

const Log = () => {
    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('accessToken')
    if (token === undefined) setToken(null)
    
 useEffect(() => {
        fetch('http://localhost:5000/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})
        .then(response => {
            console.log(response)
            if (response.status === 403) {
                console.log('here')
                return navigate('/loginForm')
            } else {
                return navigate('/app/infos')
            }
        })
      },[])

        return ('')
}

export default Log
