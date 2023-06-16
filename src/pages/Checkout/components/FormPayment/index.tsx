import { Icon } from 'phosphor-react'
import { Button, Title } from './styles'

interface PropsFormPayment {
  icon: Icon
  name: string
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export function FormPayment({
  icon: Icon,
  name,
  active,
  disabled,
  onClick,
}: PropsFormPayment) {
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Button onClick={handleClick} active={active} disabled={disabled}>
      <Icon className="iconPayment" size={16} />
      <Title>{name}</Title>
    </Button>
  )
}
