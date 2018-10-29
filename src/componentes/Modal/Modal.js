import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Grid} from '@material-ui/core';
import './Style.css'


class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log(this.props.datos)
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.abrir}
          onClose={() => this.props.cerrar()}
        >
        
          <Grid container direction="row" justify="center" style={{ border: "none important",padding: "10em",background: "white"}}>

<Grid item md={6} sm={6}>

<img src={this.props.datos.Poster} alt="img"/>
y
</Grid>
<Grid item md={6} sm={6}>

  <Typography variant="h6" id="modal-title">
    Text in a modal
</Typography>
  <Typography variant="subtitle1" id="simple-modal-description">
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
</Typography>

</Grid>

</Grid>
    
          

        </Modal>
      </div>
    );
  }
}


// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModal;
