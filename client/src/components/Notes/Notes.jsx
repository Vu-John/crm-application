import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Send from "@material-ui/icons/Send";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
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
  },
  noteDate: {
    color: "#9A30AE",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    textDecoration: "none"
  },
  submitButton: {
    marginTop: "30px"
  }
};

class Notes extends React.Component {
  state = {
    // notes: this.props.id || [],
    notes: [],
    message: '',
  };

  componentDidMount() {
    this.loadCustomerNotesFromServer();

  };

  loadCustomerNotesFromServer = () => {
      Client.getCustomerNotes(this.props.customerID, serverNotes => {
        this.setState({
          notes: serverNotes,
        })
      });
  };

  handleCreateNote = () => {
    if (this.state.message !== '') {
      const data = {
        customer_id: this.props.customerID,
        message: this.state.message,
      }
      Client.createNote(data, n => {
          this.setState({
              notes: this.state.notes.concat(n),
              message: ''
          });
      });
    }
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  renderNotes = (classes) => {
    var notes = this.state.notes.map((note, key) => {
      return(
        <div key={key}>
          <p>
            <span className={classes.noteDate}>{note.created_at + "- "}</span>
            <span>{note.message}</span>
          </p>
        </div>
      );
    });
    return notes;
  }

  render() {
    const { classes } = this.props;
    return(
      <div>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Notes</h4>
          <p className={classes.cardCategoryWhite}>Notes about this customer</p>
        </CardHeader>
        <CardBody>
          <Grid container>
            <GridItem xs={12} sm={12} md={12}>
                {this.renderNotes(classes)}
            </GridItem>
          </Grid>
          <Grid container>
            <GridItem xs={12} sm={12} md={11}>
              <CustomInput
                labelText="Add a note"
                id="message"
                value={this.state.message}
                onChange={this.handleChange}
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 1
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={1}>
              <IconButton
                aria-label="Send"
                className={classes.submitButton}
                onClick={this.handleCreateNote}
              >
                <Send />
              </IconButton>
            </GridItem>
          </Grid>
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(Notes);
