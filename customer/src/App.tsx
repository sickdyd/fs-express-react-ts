import { useEffect, useState } from 'react'
import axios from 'axios'
import socketIoClient from './socketIoClient'

export default function App(): JSX.Element {
  const [users, setUsers] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:3030/users')
      setUsers(data)
    }

    getData()
  }, [])

  useEffect(() => {
    const handleSocketIo = async () => {
      const socket = await socketIoClient()

      socket.on('greeting', (data: string) => {
        console.log(data)
      })

      socket.emit('greeting', 'hello from client')
    }

    handleSocketIo()
  }, [])

  if (!users) {
    return <div>Loading...</div>
  }

  return <div>{users}</div>
}
