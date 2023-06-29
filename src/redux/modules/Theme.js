export const DarkTheme = {
  backgroundColor: "black",
  color: "white",
};

export const LightTheme = {
  backgroundColor: "white",
  color: "black",
};

const initialstate = LightTheme;

const theme = (state = initialstate, action) => {
  switch (action.type) {
    case "toggleTheme":
      return state === LightTheme ? DarkTheme : LightTheme;
    default:
      return state;
  }
};

export default theme;
