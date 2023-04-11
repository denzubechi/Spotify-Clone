export const initialState ={
    user:null,
    playlists:[],
    playing: false,
    item:null,
   // token:'BQCz-tRgipe2c3gBa2IiY03SfCOJuiR7qHG3vGRiFLEyCSWGl-…erwUPwCfGSfpoWhwsgOQWn8WuWvEMPgZqopB2LAkJkgRgjbdg'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        //dispatchin an action
        //Action -> type, [payload]
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }   
        default:
            return state;
    }
}
export default reducer;