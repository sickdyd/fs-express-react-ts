import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App(): JSX.Element {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:3001/users')
      setUsers(data)
    }

    getData()
  }, [])

  if (!users) {
    return <div>Loading...</div>
  }

  return <div>{users}</div>
}
