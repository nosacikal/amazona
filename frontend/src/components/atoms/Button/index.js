import { ButtonElement } from './ButtonElements'

const Button = ({
  children,
  primary = false,
  full = false,
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonElement
      primary={primary}
      full={full}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonElement>
  )
}

export default Button
