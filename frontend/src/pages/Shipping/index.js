import { useState } from 'react'
import { Button, CheckoutStep, Gap, Input } from '../../components'
import { ShippingForm } from './ShippingElements'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../features/Cart/action'

const Shipping = (props) => {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress)
  const userInfo = useSelector((state) => state.login.userInfo)

  if (!userInfo) {
    props.history.push('/')
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    )

    props.history.push('/payment')
  }

  return (
    <main>
      <CheckoutStep step1 step2 />

      <ShippingForm onSubmit={submitHandler}>
        <h1>Shipping Address</h1>
        <Gap height={10} />
        <Input
          type='text'
          label='Full Name'
          id='name'
          placeholder='Enter Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <Gap height={20} />
        <Input
          type='text'
          label='Address'
          id='address'
          placeholder='Enter Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Gap height={20} />
        <Input
          type='text'
          label='City'
          id='city'
          placeholder='Enter City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <Gap height={20} />
        <Input
          type='text'
          label='Postal Code'
          id='postalCode'
          placeholder='Enter Postal Code'
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
        <Gap height={20} />
        <Input
          type='text'
          label='Country'
          id='country'
          placeholder='Enter Country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Gap height={30} />
        <Button full primary>
          Continue
        </Button>
      </ShippingForm>
    </main>
  )
}

export default Shipping
