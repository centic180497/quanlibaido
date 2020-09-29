import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    TextField,
    FormGroup,
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore as ExpandMoreIcon} from '@material-ui/icons';
import AutocompleteCheckbox from '../autocomplete_parking';

function Seach(props) {
  
  const classes = useStyles();
  return (
    <div className={classes.formSearch}>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography className={classes.heading}>TÌM KIẾM NÂNG CAO</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form className={classes.form} noValidate autoComplete="off">
          <FormGroup className={classes.formGroup}>
            <TextField
              label="Nhập từ khóa tìm kiếm"
              type="search"
              variant="outlined"
              size="small"
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          </FormGroup>
          <AutocompleteCheckbox />
          {/* <AutocompleteCheckbox option={districts} label="Quận/Huyện" />
          <AutocompleteCheckbox option={communes} label="Phường/Xã" />
          <AutocompleteCheckbox option={streets} label="Nhóm" />  */}
          
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
  );
}

export default Seach;

const useStyles = makeStyles((theme) => ({
    formSearch: {
        padding: 10,
      },
      heading: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      form: {
        width: '100%',
      },
      input: {
        fontSize: 16,
      },
      formGroup: {
        marginBottom: 16,
      },
      labelRoot: {
        fontSize: 15,
      }
}));
