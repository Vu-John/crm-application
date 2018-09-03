import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CustomerInformation from "components/CustomerInformation/CustomerInformation.jsx";
import CustomerInformationForm from "components/CustomerInformationForm/CustomerInformationForm.jsx";
import CustomerPurchases from "components/CustomerPurchases/CustomerPurchases.jsx";
import Notes from "components/Notes/Notes.jsx";
import ProductionSystem from "components/ProductionSystem/ProductionSystem.jsx";
// client
import Client from "Client";

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

class CustomerProfile extends React.Component {
  state = {
    customer: {
      id: this.props.match.params.id || '',
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      phone: '',
      dob: null,
      progress: '',
      status:'',
    },
    openCustomerForm: false,
  };

  componentDidMount() {
    this.loadCustomersFromServer();
  }

  loadCustomersFromServer = () => {
    Client.getCustomerByID(this.props.match.params.id, serverCustomer => {
        this.setState({ customer: serverCustomer});
    });
  };

  handleEditClick = () => {
    this.setState({
      openCustomerForm: true,
    });
  };

  handleFormCancel = () => {
    this.setState({
      openCustomerForm: false,
    });
  };

  handleEditSubmit = (attrs) => {
    this.updateCustomer(attrs);
  };

  updateCustomer = (attrs) => {

    this.setState({
      customer: {
        first_name: attrs.first_name,
        last_name: attrs.last_name,
        address: attrs.address,
        email: attrs.email,
        phone: attrs.phone,
        dob: attrs.dob,
        progress: attrs.progress,
        status: attrs.status,
      },
      openCustomerForm: false,
    });

    if (typeof attrs.id !== 'undefined') {
      Client.updateCustomer(attrs);
    }
  };

  render() {
    const customer = this.state.customer;
    if (this.state.openCustomerForm) {
      return (
        <CustomerInformationForm
          id={customer.id}
          first_name={customer.first_name}
          last_name={customer.last_name}
          address={customer.address}
          email={customer.email}
          phone={customer.phone}
          dob={customer.dob}
          progress={customer.progress}
          status={customer.status}
          onSubmit={this.handleEditSubmit}
          onFormCancel={this.handleFormCancel}
        />
      );
    } else {
      return (
        <div>
          <Grid container>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CustomerInformation
                  customer={this.state.customer}
                  onSubmit={this.handleSubmit}
                  onCustomerInformationFormEdit={this.handleEditClick}
                 />
              </Card>
              <ProductionSystem />
            </GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <CustomerPurchases
                customerID={customer.id}
              />
              <Card>
                <Notes
                  customerID={customer.id}
                />
              </Card>
            </GridItem>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(CustomerProfile);
