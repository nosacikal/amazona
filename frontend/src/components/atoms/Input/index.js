import React from 'react'
import Gap from '../Gap'

const Input = ({ type, id, placeholder, onChange, value, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Gap height={10} />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
