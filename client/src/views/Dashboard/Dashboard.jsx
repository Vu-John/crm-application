import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import ReportProblem from "@material-ui/icons/ReportProblem";
import Schedule from "@material-ui/icons/Schedule";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomerType from "components/CustomerType/CustomerType.jsx";
//client
import Client from "Client";

import {
  monthlyCustomerGrowthChart,
  emailsSubscriptionChart,
  socialMediaUsageChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    progressStats: [],
    marketingPerformance: [],
    totalCount: 0
  };

  componentDidMount(){
    this.loadData();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  loadData = () => {
    Client.getProgressStats((stats) => {
        Client.getMarketingPerformance((mp) => {
          this.setState({
            progressStats: [stats.notStarted, stats.inProgress, stats.closed],
            totalCount: stats.total,
            marketingPerformance: mp
          })
        });
    });
  };

  marketingBarGraphData = () => {
    var online = [];
    var socialMedia = [];
    var printMedia = [];
    var revenue = [];

    const expenses = this.state.marketingPerformance.expenses;
    if(expenses){
      for (var i = 0; i < Object.keys(expenses).length; i++) {
        online.push(expenses[i].online/1000);
        socialMedia.push(expenses[i].socialMedia/1000);
        printMedia.push(expenses[i].printMedia/1000);
        revenue.push(expenses[i].revenue/1000);
      }
    }

    return([online,socialMedia,printMedia,revenue]);
};

  render() {
    const { classes } = this.props;

    // ##############################
    // // // Completed Tasks
    // #############################
    var completedTasksChart = {
      data: {
        label: ['Not Started', 'In-Progress', 'Resolved'],
        series: this.state.progressStats
      },
    };

    var d = new Date();
    var n = d.toString();

    const newChart = {
      data: {
        labels: [
          "0",
          "1",
          "2"
        ],
        series: this.marketingBarGraphData()
      },
      options: {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 1200,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      },
      responsiveOptions: [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ]
    };

    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <ReportProblem />
                </CardIcon>
                <p className={classes.cardCategory}>Not Started</p>
                <h3 className={classes.cardTitle}>{this.state.progressStats[0]}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Update />
                  Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Schedule />
                </CardIcon>
                <p className={classes.cardCategory}>In Progress</p>
                <h3 className={classes.cardTitle}>{this.state.progressStats[1]}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Update />
                  Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <AssignmentTurnedIn />
                </CardIcon>
                <p className={classes.cardCategory}>Closed</p>
                <h3 className={classes.cardTitle}>{this.state.progressStats[2]}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Update />
                 Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <AccountCircle />
                </CardIcon>
                <p className={classes.cardCategory}>Customers</p>
                <h3 className={classes.cardTitle}>{this.state.totalCount}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                   Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem xs={12} sm={12} md={8}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={monthlyCustomerGrowthChart.data}
                  type="Line"
                  options={monthlyCustomerGrowthChart.options}
                  listener={monthlyCustomerGrowthChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Customer Growth</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> ~13%
                  </span>{" "}
                  increase in new customers compared to last month.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated yesterday
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Pie"
                  options={completedTasksChart.options}
                  responsiveOptions={completedTasksChart.responsiveOptions}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <div className={classes.redBox}></div><div className={classes.legendText}>Not started</div>
                <div className={classes.pinkBox}></div><div className={classes.legendText}>In Progress</div>
                <div className={classes.yellowBox}></div><div className={classes.legendText}>Closed</div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 23 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={socialMediaUsageChart.data}
                  type="Bar"
                  options={socialMediaUsageChart.options}
                  listener={socialMediaUsageChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Social Media Usage by Quarters</h4>
                <p className={classes.cardCategory}>
                 % of users using a particular social media platform to interact with RecreationUSA
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  ordered as Facebook, Twitter, Instagram & Youtube, respectively
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={newChart.data}
                  type="Bar"
                  options={newChart.options}
                  responsiveOptions={newChart.responsiveOptions}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Marketing Expenses (x$1000)</h4>
                <div className={classes.greenWhiteBox}></div><div className={classes.legendText}>Online</div>
                <div className={classes.redBox}></div><div className={classes.legendText}>Social Media</div>
                <div className={classes.yellowBox}></div><div className={classes.legendText}>Print Media</div>
                <div className={classes.orangeBox}></div><div className={classes.legendText}>Revenue</div>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated {n}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomerType
              componentType="status"
              type="New%20Lead"/>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
