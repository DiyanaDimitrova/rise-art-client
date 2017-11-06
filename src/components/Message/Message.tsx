import * as React from 'react'

export interface MessageProps{
  messageText: String
  closeMessage: () => void
}

export default class Message extends React.Component<MessageProps, any> {
  constructor(props) {
    super(props)
  }
  closeMessage = () => {
    this.props.closeMessage()
  }
  render () {
    return (
      <div>
        <div>
          <div>{this.props.messageText}</div>
          <div><button onClick={this.closeMessage}>Close</button></div>
        </div>
     </div>
    )
  }
}
