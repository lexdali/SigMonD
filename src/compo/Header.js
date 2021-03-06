//rafce - generates boilerplate code (function)

import PropTypes from 'prop-types';
import Button from './Button';
import logo from '../Logo.png'



const Header = ({title}) => 
{
    const onClick = () =>
    {
        console.log('Epic games presents Snorlax Edition of Pokemon GO')
    }

  return (
    <header className='header'>
        
        <a href="./"><img id='logo' src={logo} alt="SigMonD"/></a>
        
        
        
        {/* <Button color="green" text="Create Sigature" 
        onClick={onClick} /> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Website Title',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header