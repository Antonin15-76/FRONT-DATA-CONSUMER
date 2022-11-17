import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import LogIn from "./LogIn"

const Log = () => {
    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('accessToken')
    if (token === undefined) setToken(null)
    
    // const [response, setResponse] = useState(null)
    const [data, setData] = useState(null)

const response = useEffect(() => {
        fetch('https://ws-data-consuming.herokuapp.com/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})
        .then(response => {
            if (response.status === 403) {
                navigate('/login')
            } else {
                navigate('/app/infos')
            }
            response.json()
        })
        .then(data => setData(data))
      },[])

        return <LogIn />
}

export default Log
