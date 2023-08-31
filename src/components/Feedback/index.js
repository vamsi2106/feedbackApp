import {Component} from 'react'
import EmojiItem from './Emoji'
import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  onClickEmoji = () => {
    this.setState({emojiClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {emojiClicked} = this.state

    let r = null

    if (emojiClicked === false) {
      r = (
        <div className="main-div">
          <div className="card">
            <h1
              style={{
                color: '#0f172a',
                fontSize: '24px',
                textAlign: 'center',
                marginBottom: '50px',
              }}
            >
              How satisfied are you with our customer support performance
            </h1>
            <ul style={{align: 'center'}}>
              {emojis.map(obj => (
                <EmojiItem key={obj.id} item={obj} Click={this.onClickEmoji} />
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      r = (
        <div className="main-div">
          <div
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={loveEmojiUrl} alt="love emoji" style={{width: '15vw'}} />
            <h1 style={{color: '#0f172a'}}>Thank You!</h1>
            <p style={{color: '#1e293b'}}>
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      )
    }

    return r
  }
}
export default Feedback
