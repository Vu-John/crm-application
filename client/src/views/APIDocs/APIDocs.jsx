import React from "react";
import Highlight from "react-highlight";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import apiDocsStyle from "assets/jss/material-dashboard-react/views/apiDocsStyle.jsx";

class APIDocs extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>API Document</h4>
          <p className={classes.cardCategoryWhite}>Public API</p>
        </CardHeader>
        <CardBody>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.expandLabel}>GET: /customers</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid>
                <Typography>REQUEST:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>
                      curl -X GET https://crm-application-.herokuapp.com/api/v1/customers
                    </Highlight>
                  </CardBody>
                </Card>
                <br/>
                <Typography>RESPONSE:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>

{`[
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "address": "200 University Ave W, Waterloo, ON N2L 3G1",
        "email": "johndoe@customer.com",
        "phone": "+1(111) 111-1111",
        "dob": "2017-01-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.478Z",
        "updated_at": "2018-07-21T01:38:31.478Z",
        "progress": "Not Started",
        "status": "New Lead"
    },
    {
        "id": 2,
        "first_name": "John",
        "last_name": "Smith",
        "address": "75 University Ave W, Waterloo, ON N2L 3C5",
        "email": "johnsmith@customer.com",
        "phone": "+1(222) 222-2222",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.488Z",
        "updated_at": "2018-07-21T01:38:31.488Z",
        "progress": "In Progress",
        "status": "Complaint"
    },
    {
        "id": 3,
        "first_name": "Chad",
        "last_name": "Read",
        "address": "New York Way, Rotherham S60 1FJ, UK",
        "email": "chadread@customer.com",
        "phone": "+1(333) 333-3333",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.495Z",
        "updated_at": "2018-07-21T01:38:31.495Z",
        "progress": "Closed",
        "status": "New Lead"
    },
    {
        "id": 4,
        "first_name": "James",
        "last_name": "Stewart Jr.",
        "address": "175 N State St, Chicago, IL 60601, USA",
        "email": "jamesstewardjr@customer.com",
        "phone": "+1(444) 444-4444",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.502Z",
        "updated_at": "2018-07-21T01:38:31.502Z",
        "progress": "Closed",
        "status": "Removed"
    },
    {
        "id": 5,
        "first_name": "Jeremy",
        "last_name": "McGrath",
        "address": "18 W Monroe St, Chicago, IL 60603, USA",
        "email": "jeremymcgrath@customer.com",
        "phone": "+1(555) 555-5555",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.509Z",
        "updated_at": "2018-07-21T01:38:31.509Z",
        "progress": "Not Started",
        "status": "Removed"
    },
    {
        "id": 6,
        "first_name": "LeBron",
        "last_name": "James",
        "address": "1111 S Figueroa St, Los Angeles, CA 90015, USA",
        "email": "lebronjames@customer.com",
        "phone": "+1(666) 666-6666",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.516Z",
        "updated_at": "2018-07-21T01:38:31.516Z",
        "progress": "In Progress",
        "status": "New Lead"
    },
    {
        "id": 7,
        "first_name": "Travis",
        "last_name": "Docker",
        "address": "301 Front St W, Toronto, ON M5V 2T6",
        "email": "travisdocker@customer.com",
        "phone": "+1(777) 777-7777",
        "dob": "2017-03-01T01:00:00.000Z",
        "created_at": "2018-07-21T01:38:31.522Z",
        "updated_at": "2018-07-21T01:38:31.522Z",
        "progress": "Closed",
        "status": "Complaint"
    }
]`}
                    </Highlight>
                  </CardBody>
                </Card>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.expandLabel}>GET: /customers/:customer_id</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid>
                <Typography>REQUEST:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>
                      {`
curl -X GET https://crm-application-.herokuapp.com/api/v1/customers/1
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
                <br/>
                <Typography>RESPONSE:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>

                      {`
{
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "address": "200 University Ave W, Waterloo, ON N2L 3G1",
    "email": "johndoe@customer.com",
    "phone": "+1(111) 111-1111",
    "dob": "2017-01-01T01:00:00.000Z",
    "created_at": "2018-07-22T16:53:35.377Z",
    "updated_at": "2018-07-22T16:53:35.377Z",
    "progress": "Not Started",
    "status": "New Lead"
}
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.expandLabel}>GET: /customers/:customer_id/orders</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid>
                <Typography>REQUEST:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>
                      {`
curl -X GET https://crm-application-.herokuapp.com/api/v1/customers/:customer_id/orders
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
                <br/>
                <Typography>RESPONSE:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>

                      {`
[
    {
        "id": 1,
        "customer_id": 2,
        "item": "2017 WR250R",
        "purchased_date": "2017-03-01T01:00:00.000Z",
        "description": "DISPLACEMENT(cc): 250, SEAT HEIGHT(IN): 37, WET WEIGHT(LBS): 295",
        "created_at": "2018-07-22T22:28:31.699Z",
        "updated_at": "2018-07-22T22:28:31.699Z"
    }
]
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.expandLabel}>GET: /customers/progress/data/stats</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid>
                <Typography>REQUEST:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>
                      {`
curl -X GET https://crm-application-.herokuapp.com/api/v1/customers/progress/data/stats
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
                <br/>
                <Typography>RESPONSE:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>

                      {`
{
    "notStarted": 2,
    "inProgress": 2,
    "closed": 3
}
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.expandLabel}>POST: /customers</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid>
                <Typography>REQUEST:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>
                      {`
curl -X POST
https://crm-application-.herokuapp.com/api/v1/customers
-H 'content-type: application/json'
-d '{
    "first_name":"John",
    "last_name": "Smith",
    "address": "301 Front St W, Toronto, ON M5V 2T6",
    "email": "johnsmith@customer.com",
    "phone": "+1(111) 111-1111",
    "dob": "2017-03-01T01:00:00.000Z",
    "progress": "Closed",
    "status": "Complaint"
}'
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
                <br/>
                <Typography>RESPONSE:</Typography>
                <Card className={classes.cardBody}>
                  <CardBody>
                    <Highlight className='language-name-of-snippet'>

                      {`
{
  "id": 8,
  "first_name":"John",
  "last_name": "Smith",
  "address": "301 Front St W, Toronto, ON M5V 2T6",
  "email": "johnsmith@customer.com",
  "phone": "+1(111) 111-1111",
  "dob": "2017-03-01T01:00:00.000Z",
  "created_at": "2018-07-12T04:53:35.951Z",
  "updated_at": "2018-07-12T04:53:35.951Z",
  "progress": "Closed",
  "status": "Complaint"
}
                      `}
                    </Highlight>
                  </CardBody>
                </Card>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(apiDocsStyle)(APIDocs);
