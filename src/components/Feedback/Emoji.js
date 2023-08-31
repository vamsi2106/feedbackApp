import './index.css'

const EmojiItem = props => {
  const {item, Click} = props
  const {name, imageUrl} = item
  return (
    <li onClick={Click}>
      <img src={imageUrl} alt={name} className="emojiSize" />
      <p className="emojiName">{name}</p>
    </li>
  )
}
export default EmojiItem
