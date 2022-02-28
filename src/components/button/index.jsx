import { ContentButton } from './styles'

const Button = ({ children, ...props}) => {
  return (
    <ContentButton {...props}>
      {children}
    </ContentButton>
  )
}

export default Button;