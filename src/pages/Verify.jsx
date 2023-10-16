import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useSearchParams } from 'react-router-dom'
export default function Verify () {
  const { verifyEmailRequest } = useAuth()
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('Verificando...')

  const token = params.get('token')

  useEffect(() => {
    const checkVerify = async () => {
      if (!loading) {
        try {
          await verifyEmailRequest(token)
          setStatus('Verificado!')
          setLoading(true)
        } catch (error) {
          setStatus('Error!!! D:')
          setLoading(true)
        }
      }
    }
    checkVerify()
  }, [])

  return (
    <div>{status}</div>
  )
}
