import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Link, useHistory } from 'react-router-dom'
import './Headr.css'

const Header = ({ backButton }) => {
  const history = useHistory()

  return (
    <div className='header'>
        {backButton ?  
        (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosNewIcon className='header__icon' fontSize='large' />
          </IconButton>
        ) : 
        (
          <IconButton>
              <PersonIcon className='header__icon' fontSize='large' />
          </IconButton>
        )}
        <Link to='/'>
            <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg' alt='brand logo' />
        </Link>
          <Link to='/chat'>
            <IconButton>
              <ForumIcon className='header__icon' fontSize='large' />
            </IconButton>
          </Link>
    </div>
  )
}

export default Header