import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton'
import './Headr.css'

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
        <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg' alt='brand logo' />
        <IconButton>
            <ForumIcon className='header__icon' fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Header