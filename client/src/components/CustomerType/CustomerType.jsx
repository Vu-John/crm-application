import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
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

class CustomerType extends React.Component {
  state = {
      customers: [],
      tableData: [],
      componentType: this.props.componentType || '',
      type: this.props.type || '',
  };

  componentDidMount() {
    if (this.state.componentType === "progress") {
      this.loadCustomersFromServerByProgress();
    } else if (this.state.componentType === "status") {
      this.loadCustomersFromServerByStatus();
    }
  };

  loadCustomersFromServerByProgress = () => {
      Client.getCustomerByProgress(this.state.type, serverCustomers => (
        this.setState({
          customers: serverCustomers,
          tableData: this.formatTableData(serverCustomers),
        })
      ));
  };

  loadCustomersFromServerByStatus = () => {
      Client.getCustomerByStatus(this.state.type, serverCustomers => (
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

  render() {
    const { classes} = this.props;
    const cardHeader = this.state.type.replace(/%20/g , " ") + "s";
    return(
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>{cardHeader}</h4>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Email", "Address", "Progress", "Status"]}
            tableData={this.state.tableData}
          />
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(CustomerType);
