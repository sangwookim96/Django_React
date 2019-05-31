// Class based component
// We don't rendering, just pop-up.
import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    // componentDidMount() {
    //     this.props.alert.show("it works");
    // }
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            // alert.error("There is an error")
            if (error.msg.name) alert.error("Name: " + error.msg.name.join());    // some error exists about msg.name.   error.msg.name is not a string, but array of characters, so have to join().
            if (error.msg.email) alert.error("Email: " + error.msg.email.join());
            if (error.msg.message) alert.error("Message: " + error.msg.message.join());
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
        }

        if (message !== prevProps.message) {
            if (message.deleteLead) alert.success(message.deleteLead);
            if (message.addLead) alert.success(message.addLead);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }
    render() {
        return <Fragment />;
    }
}

// Any errors in state are gonna in props.
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

// export default withAlert(Alerts)
// try below if above withAlert raise an issue...
export default connect(mapStateToProps)(withAlert()(Alerts));
