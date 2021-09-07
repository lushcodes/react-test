

import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => { 
  // You can ask a component to take properties as an argument and use them in the function. This relates to when it is called in App.js

  return ( <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}


Button.defaultProps = { // declare default props if not given
  color: 'steelblue'
}

Button.propTypes = { // declare proptypes (data types) to make code robust and catch errors
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
