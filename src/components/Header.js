import Button from './Button'

const Header = () => {
const onClick = () => {
  console.log('click')
}

  return (
  <header className='header'>
    <h1>Task Tracker</h1>
    <Button color='green' text='Add' onClick={onClick}/> {/* You can give a component props like this */}
  </header>
  )
}

export default Header
