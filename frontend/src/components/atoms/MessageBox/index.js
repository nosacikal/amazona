import { MessageBoxElement } from './MessageBoxElements'

const MessageBox = ({ variant, children }) => {
  return <MessageBoxElement variant={variant}>{children}</MessageBoxElement>
}

export default MessageBox
