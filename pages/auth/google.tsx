import * as React from 'react'
import { GetServerSideProps, NextPage } from "next"
import axios from 'axios'
import { useRouter } from 'next/router'
import { setCookies } from 'cookies-next';

interface Response {
  access_token: string
}

const AuthGoogle: NextPage<Response> = ({access_token}) => {
  const router = useRouter()
  React.useEffect(() => {
    setCookies('access_token', access_token)
    router.push('/map')
  }, [])

  return (
    <div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const { code } = query
  const REDIRECT_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:3000/auth/google' : 'https://ssukzip-nextjs.vercel.app/auth/google'
  const res = await axios.get<Response>('https://ssukzip.deta.dev/auth', {
    params: {
      code,
      redirectUri: REDIRECT_URL
    }
  })
  .then(res => res.data)
  .catch(err => console.error(err))

  if(!res) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      access_token: res.access_token
    }
  }
}

export default AuthGoogle