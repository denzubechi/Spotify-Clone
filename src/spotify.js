export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirectUri ="https://nzubechi-spotify-clone.netlify.app/";
const clientId = "8765545b25344f0095aa282cbadd8093"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

//pulling the access token from the url
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split("=")
        //grabbing he first art after spliting
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialoge=true`;