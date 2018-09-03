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


class ProductionSystem extends React.Component {
  state = {
    inventory: []
  };

  componentDidMount() {
    this.loadData();
  };

  loadData = () => {
    Client.loginProductionSystem((res) => {
      Client.getProductionInventory(res.token, (inventory) => {
          this.setState({
            inventory: inventory
          });
      });
    });
  };

  renderInventory = () => {
    const { classes } = this.props
    var groups = {};
    var inventory = this.state.inventory;
    for (var i = 0; i < inventory.length; i++) {
      var location = inventory[i].location;
      if (!groups[location]) {
        groups[location] = [];
      }
      groups[location].push({ name: inventory[i].name, quantity: inventory[i].quantity });
    }
    var inventoryData = [];
    for (var l in groups) {
      inventoryData.push({location: l, items: groups[l]});
    }

    var inventoryList = inventoryData.map((i, key ) => {
        var items = i.items.map((item, key1) => {
          return(
            <TableRow key={key1}>
              <TableCell key={key1 + 1}>{item.name}</TableCell>
              <TableCell key={key1 + 2}>{item.quantity}</TableCell>
            </TableRow>
          );
        });

        return(
          <span key={key}>
            <h3 key={key + 1}>{i.location}</h3>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items}
              </TableBody>
            </Table>
            <br/>
          </span>
        );
    });

    return(
      <div>
        {inventoryList}
      </div>
    );
  };

  render() {
    const { classes } = this.props
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Inventory</h4>
          <p className={classes.cardCategoryWhite}>Part stock for service</p>
        </CardHeader>
        <CardBody>
          <Grid container>
            {this.renderInventory()}
          </Grid>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(ProductionSystem)
