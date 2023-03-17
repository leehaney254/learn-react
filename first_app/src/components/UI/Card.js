import "./Card.css"

function Card(props) {
  //we pass the children class to our custom jsx
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Card;