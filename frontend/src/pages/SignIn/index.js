import { Link, Redirect } from 'react-router-dom'
import { Button, Gap, Input, LoadingBox, MessageBox } from '../../components'
import { SignInForm } from './SignInElements'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../features/SignIn/action'
import { useEffect, useState } from 'react'

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const login = useSelector((state) => state.login)
  const { userInfo, error, loading } = login

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signIn(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo])

  if (userInfo) return <Redirect to='/' />

  return (
    <main>
      <SignInForm onSubmit={submitHandler}>
        <h1>Sign In</h1>
        {loading && <LoadingBox />}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <Gap height={10} />
        <Input
          type='email'
          label='Email'
          id='email'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Gap height={20} />
        <Input
          type='password'
          label='Password'
          id='password'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Gap height={30} />
        <Button full primary>
          Sign In
        </Button>
        <Gap height={30} />
        <p>
          New customer?
          <Link to={`/register?redirect=${redirect}`}>
            {' '}
            Create your account
          </Link>
        </p>
      </SignInForm>
    </main>
  )
}

export default SignIn
