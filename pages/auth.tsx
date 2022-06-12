import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import axios from 'axios'
import { useRouter } from 'next/router'
import { setCookies } from 'cookies-next';

const Auth: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  React.useEffect(() => {
    setCookies('access_token', data.access_token)
    router.push('/map')
  }, [])

  return (
    <div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const { code } = query
  const res = await axios.get('https://ssukzip.deta.dev/auth/kakao', {
    params: {
      code
    }
  })
  .then(res => res.data)

  return {
    props: {
      data: {
        access_token: res.access_token
      }
    }
  }
}

export default Auth