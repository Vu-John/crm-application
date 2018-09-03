import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
// core components
import Button from "components/CustomButtons/Button.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
// assets
import avatar from "assets/img/faces/user.jpg";

const styles = {
  editButton: {
    margin: "-65px 15px auto 0",
    overflow: "hidden",
    padding: "0",
    float: "right",
  },
  profileHeader: {
    textAlign: "center"
  },
  fieldName: {
    color:"#9A30AE"
  }
};

class CustomerInformation extends React.Component {
  renderStatus = () => {
    const { classes } = this.props;
    const progress = this.props.customer.progress;
    if(progress === 'Closed') {
      return(
        <Button variant="contained" color="success" disabled={true}  className={classes.button}>
        {progress}
        </Button>
      );
    } else if(progress === 'In Progress') {
      return(
        <Button variant="contained" color="warning" disabled={true}  className={classes.button}>
        {progress}
        </Button>
      );
    } else {
      return(
        <Button variant="contained" color="danger" disabled={true}  className={classes.button}>
        {progress}
        </Button>
      );
    }
  };

  render() {
    const { classes, customer, onCustomerInformationFormEdit} = this.props;
    const formatedDate = String(customer.dob).substring(0,10)
    return(
      <div>
        <span>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
        </span>
        <span>
          <Button className={classes.editButton} onClick={onCustomerInformationFormEdit} color="primary" aria-label="edit" justIcon round>
            <Edit />
          </Button>
        </span>
        <CardBody>
          <div className={classes.profileHeader}>
            <h3 className={classes.cardTitle}>{customer.first_name + " " + customer.last_name}</h3>
            <h6 className={classes.fieldName}>{"ID: " + customer.id}</h6>
          </div>
          <Divider />
          <br/>
          <div className={classes.fieldName}>{"Email Address:"}</div>
          <div>{customer.email}</div>
          <br/>
          <div className={classes.fieldName}>{"Phone Number:"}</div>
          <div>{customer.phone}</div>
          <br/>
          <div className={classes.fieldName}>{"Address:"}</div>
          <div>{customer.address}</div>
          <br/>
          <div className={classes.fieldName}>{"Date of Birth:"}</div>
          <div>{formatedDate}</div>
          <br/>
          <Divider />
          <br/>
          {this.renderStatus()}
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(CustomerInformation);
