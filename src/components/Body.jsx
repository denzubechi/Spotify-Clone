import React from 'react'
import './css/Body.css'
import Header from './subComponents/Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavouriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from './subComponents/SongRow'

const Body = ({spotify}) => {
  const [{ discover_weekly }, dispatch]= useDataLayerValue();

  return (
    <div className='body'>
      <Header  spotify={spotify}/>

      <div className="body__info">
        <img 
        src={discover_weekly?.images[0].url}
        alt="discover weekly" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavouriteIcon />
          <MoreHorizIcon/>
        </div>

        {discover_weekly?.tracks.items.map((item) =>(
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body