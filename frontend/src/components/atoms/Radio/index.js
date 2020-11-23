const Radio = ({ id, value, name, checked, onChange }) => {
  return (
    <div>
      <div>
        <input
          type='radio'
          id={id}
          value={value}
          name={name}
          required
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>{value}</label>
      </div>
    </div>
  )
}

export default Radio
