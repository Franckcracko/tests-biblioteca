import { Input } from '@nextui-org/react'

export const InputCustom = ({
  register,
  label,
  isRequired,
  registerId,
  type = 'text',
  color = 'primary',
  variant = 'bordered'
  , ...props
}) => {
  return (
    <Input
      type={type}
      isRequired={isRequired}
      color={color}
      variant={variant}
      label={label}
      {...register(registerId)}
      {
      ...props
      }
    />
  )
}
