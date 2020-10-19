export const initialState = {
  user: null,
  // token: "BQDt8jrYTmN3NGfHLUAj4uyXthGKjsaclCAT7QG_0BEMtPAJpL…eI2TdS811BGf94j8eB3LQOlXJM31sW2KhMzPyPxKcM_tBxb6Q",
  playlists: [],
  playing: false,
  item: null,
  token:null,
};

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
