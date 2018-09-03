const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 260px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  }
});

export default appStyle;
