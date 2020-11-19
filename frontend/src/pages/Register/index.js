import { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Gap, Input, LoadingBox, MessageBox } from '../../components'
import { RegisterForm } from './RegisterElements'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../features/Register/action'

const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const register = useSelector((state) => state.register)
  const { userInfo, loading, error } = register

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/'

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Password and Confirmation Password are not match')
    } else {
      dispatch(createUser(name, email, password))
    }
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo])

  if (userInfo) return <Redirect to='/' />

  return (
    <main>
      <RegisterForm onSubmit={submitHandler}>
        <h1>Create Account</h1>
        {loading && <LoadingBox />}
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        <Gap height={10} />
        <Input
          type='text'
          label='Name'
          id='name'
          placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)}
        />
        <Gap height={20} />
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
        <Gap height={20} />
        <Input
          type='password'
          label='Confirm Password'
          id='confirmPassword'
          placeholder='Enter Confirmation Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Gap height={30} />
        <Button full primary>
          Register
        </Button>
        <Gap height={30} />
        <p>
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
        </p>
      </RegisterForm>
    </main>
  )
}

export default Register
