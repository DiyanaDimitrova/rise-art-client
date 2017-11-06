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
      <div className="alert alert-success" role="alert">
        {this.props.messageText}
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true" onClick={this.closeMessage}>&times;</span>
        </button>
      </div>
    )
  }
}
