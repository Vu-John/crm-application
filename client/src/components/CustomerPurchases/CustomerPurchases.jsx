import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

class CustomerPurchases extends React.Component {
  state = {
    products: [],
    tableHead: ["ID", "Product", "Date of Purchase", "Description"]
  };

  componentDidMount() {
      this.loadCustomersOrdersFromServer();
  };

  loadCustomersOrdersFromServer = () => {
      Client.getCustomerOrders(this.props.customerID, (orders) => (
        this.setState({
          products: orders,
        })
      ));
  };

  renderTableData = () => {
    const { classes } = this.props;
    const products = this.state.products
    var tableData =products.map((product, key) => {
      return (
        <TableRow key={key}>
          <TableCell className={classes.tableCell} key={key + 1}>
            {product.customer_id}
          </TableCell>
          <TableCell className={classes.tableCell} key={key + 2}>
            {product.item}
          </TableCell>
          <TableCell className={classes.tableCell} key={key + 3}>
            {product.purchased_date}
          </TableCell>
          <TableCell className={classes.tableCell} key={key + 4}>
            {product.description}
          </TableCell>
        </TableRow>
      );
    });

    return tableData
  }

  render() {
    const { classes } = this.props;
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Purchases</h4>
          <p className={classes.cardCategoryWhite}>Products this customer has purchased</p>
        </CardHeader>
        <CardBody>
          <Grid container>
            <Table className={classes.table}>
              {this.state.tableHead !== undefined ? (
                <TableHead>
                  <TableRow>
                    {this.state.tableHead.map((prop, key) => {
                      return (
                        <TableCell
                          className={classes.tableCell + " " + classes.tableHeadCell}
                          key={key}
                        >
                          {prop}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
              ) : null}
              <TableBody>
                {this.renderTableData()}
              </TableBody>
            </Table>
          </Grid>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(CustomerPurchases);
