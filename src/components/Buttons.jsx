import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay'
import CloseIcon from '@mui/icons-material/Close'
import StarRateIcon from '@mui/icons-material/StarRate'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BoltIcon from '@mui/icons-material/Bolt'
import IconButton from '@mui/material/IconButton'
import './Buttons.css'

const Buttons = () => {
  return (
    <div className='buttons'>
        <IconButton  className='buttons__replay'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='buttons__close'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='buttons__rate'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='buttons__favorite'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='buttons__blot'>
            <BoltIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Buttons