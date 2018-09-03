import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class CustomerInformationForm extends React.Component {
  state = {
    id: this.props.id || '',
    first_name: this.props.first_name || '',
    last_name: this.props.last_name || '',
    address: this.props.address || '',
    email: this.props.email || '',
    phone: this.props.phone || '',
    dob: this.props.dob || '',
    progress: this.props.progress || '',
    status: this.props.status || '',
  };

  componentWillReceiveProps(props) {
    this.setState({
      id: this.props.id || '',
      first_name: props.first_name || '',
      last_name: props.last_name || '',
      address: props.address || '',
      email: props.email || '',
      phone: props.phone || '',
      dob: props.dob || '',
      progress: props.progress || '',
      status: props.status || '',
    });
  }

  handleSubmit = () => {
      this.props.onSubmit({
        id: this.props.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
        dob: this.state.dob,
        progress: this.state.progress,
        status: this.state.status,
      });
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const submitText = this.props.id ? "Update" : "Create";
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
          <p className={classes.cardCategoryWhite}>Complete your profile</p>
        </CardHeader>
        <CardBody>
          <Grid container>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="First Name"
                id="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Last Name"
                id="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Email Address"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </Grid>
          <Grid container>
            <GridItem xs={12} sm={12} md={8}>
              <CustomInput
                labelText="Address"
                id="address"
                value={this.state.address}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Phone Number"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </Grid>
          <Grid container>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Date of Birth"
                id="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Progress"
                id="progress"
                value={this.state.progress}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Status"
                id="status"
                value={this.state.status}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
          </Grid>
        </CardBody>
        <CardFooter>
          <span>
            <Button color="primary" onClick={this.handleSubmit}>{submitText}</Button>
          </span>
          <span>
            <Button color="danger" onClick={this.props.onFormCancel}>Cancel</Button>
          </span>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(styles)(CustomerInformationForm);
