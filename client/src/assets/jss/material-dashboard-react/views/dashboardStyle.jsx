import { successColor } from "assets/jss/material-dashboard-react.jsx";

const dashboardStyle = {
  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px"
    }
  },
  cardCategory: {
    color: "#999999",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  greenWhiteBox: {
    width:"10px",
    height:"10px",
    background:"#DBEBDC",
    display:"inline-block"
  },
  blueWhiteBox: {
    width:"10px",
    height:"10px",
    background:"#D5F2F6",
    display:"inline-block"
  },
  yellowBox: {
    width:"10px",
    height:"10px",
    background:"#F3C54B",
    display:"inline-block"
  },
  pinkBox: {
    width:"10px",
    height:"10px",
    background:"#EE5C53",
    display:"inline-block"
  },
  redBox: {
    width:"10px",
    height:"10px",
    background:"#D50B19",
    display:"inline-block"
  },
  orangeBox: {
    width:"10px",
    height:"10px",
    background:"#CF7820",
    display:"inline-block"
  },
  legendText: {
    display:"inline-block",
    marginTop:"10px",
    marginLeft:"10px",
    marginRight:"20px"
  }
};

export default dashboardStyle;
