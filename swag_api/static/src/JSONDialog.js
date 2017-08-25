import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
import Typography from 'material-ui/Typography';

import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Slide from 'material-ui/transitions/Slide';


import ReactJson from 'react-json-view';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    container: {
        padding: '16px',
        fontWeight: '500',
        boxSizing: 'border-box',
        position: 'relative',
        whiteSpace: 'nowrap',
        overflow: 'auto'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        minHeight: '100vh'
    }
});


class JSONDialog extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
        };
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <IconButton onClick={this.handleOpen}>
                    <Search/>
                </IconButton>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    transition={<Slide direction="right"/>}
                >
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="contrast" onClick={this.handleClose} aria-label="Close">
                                <ArrowBack/>
                            </IconButton>
                            <Typography type="title" color="inherit" className={classes.flex}>
                                Raw JSON
                            </Typography></Toolbar>
                    </AppBar>
                    <div className={classes.container}>
                        <div className={classes.content}>
                            <ReactJson src={this.props.data}/>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

JSONDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JSONDialog);