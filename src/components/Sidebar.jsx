import React from 'react'
import './css/Sidebar.css'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../DataLayer'

const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <img 
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='spotify'
        />
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />

        {/**Mapping through the user's playlist */}
        {playlists?.items?.map((playlist)=>(
          <SidebarOption title={playlist.name}/>
        ))}
    </div>
  )
}

export default Sidebar