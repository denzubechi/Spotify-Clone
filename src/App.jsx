import React, { useEffect } from 'react'
import Login from './Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user,token }, dispatch] = useDataLayerValue();

  //Runcode based on a given condition
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash= "";
    const _token = hash.access_token;

    //check if token exists
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      //giving the access token to the spotify api
      spotify.setAccessToken(_token)
      
      //getting the user's account
      spotify.getMe().then(user =>{
        dispatch({
          type: 'SET_USER',
          user:user
        });
      });

      //Getting a User's playlist from spotify and then dispatch to the data layer
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('0NzXTyUC71d3dgBWDUg3qk').then(response =>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
        )
    }

    console.log("User token = ", token)
  },[token, dispatch]);

  console.log(user);

  return (
    <div className='app'>
      {/* change whats going to be rendered after the user logs in */}
      {
        token ?(
          <Player spotify={spotify}/>
        ) : (
            <Login />
        )
      }
    </div>
  )
}

export default App
