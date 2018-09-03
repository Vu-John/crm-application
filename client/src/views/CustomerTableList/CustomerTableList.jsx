import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomerInformationForm from "components/CustomerInformationForm/CustomerInformationForm.jsx";
// client
import Client from "Client";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
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
  }
};

class CustomerTableList extends React.Component {
  state = {
      customers: [],
      tableData: [],
      openCustomerForm: false,
  };

  componentDidMount() {
      this.loadCustomersFromServer();
  };

  loadCustomersFromServer = () => {
      Client.getCustomers((serverCustomers) => (
        this.setState({
          customers: serverCustomers,
          tableData: this.formatTableData(serverCustomers),
        })
      ));
  };

  formatTableData = (customers) => {
    var tableData=[];

    customers.map((customer) => {
      var tableEntry=[];
      tableEntry.push(customer.id.toString());
      tableEntry.push(customer.first_name + " " + customer.last_name);
      tableEntry.push(customer.email);
      tableEntry.push(customer.address);
      tableEntry.push(customer.progress);
      tableEntry.push(customer.status);

      tableData.push(tableEntry);

      return null;
    });

    return tableData;
  }

  handleCreate = () => {
      this.setState({
          openCustomerForm: true,
      });
  };

  handleFormCancel = () => {
      this.setState({
          openCustomerForm: false,
      });
  };

  handleCreateSubmit = (customer) => {
    this.createCustomer(customer);
  };

  createCustomer = (customer) => {
      Client.createCustomer(customer, c => {
          const  newCustomersList = this.state.customers.concat(c)
          this.setState({
              customers: newCustomersList,
              tableData: this.formatTableData(newCustomersList),
              openCustomerForm: false,
          });
      });
  };

  render() {
    const { classes } = this.props;
    if (this.state.openCustomerForm === true) {
      return (
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <CustomerInformationForm
              onSubmit={this.handleCreateSubmit}
              onFormCancel={this.handleFormCancel}
            />
          </GridItem>
        </Grid>
      );
    } else {
      return(
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Customers</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p> */}
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name", "Email", "Address", "Progress", "Status"]}
                  tableData={this.state.tableData}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Button variant="contained" color="secondary" align='right' justify='right' className={classes.button} onClick={this.handleCreate}>
              <AddIcon />
              Customer
            </Button>
          </GridItem>
        </Grid>
      );
    }
  }
}

export default withStyles(styles)(CustomerTableList);
