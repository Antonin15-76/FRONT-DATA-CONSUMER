import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

const Log = () => {
    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('accessToken')
    if (token === undefined) setToken(null)
    
 useEffect(() => {
        fetch('https://ws-data-consuming.herokuapp.com/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})
        .then(response => {
            if (response.status === 403) {
                return navigate('/login')
            } else {
                return navigate('/app/infos')
            }
        })
      },[])

        return ('')
}

export default Log
