import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormGroup, Checkbox } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon } from '@material-ui/icons';

function AutocompleteCheckbox(props) {
  const classes = useStyles();
  console.log(props);
  
  const {option}=props;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <React.Fragment>
      <FormGroup className={classes.formGroup}>
        <Autocomplete
          multiple
          size="small"
          options={
            // options.province_list.length > 0 ? options.province_list : []
            option
          }
          getOptionLabel={(option) => option.name}
          noOptionsText={'Không có lựa chọn'}
          // disableCloseOnSelect
          value={props.searchCam}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                size="small"
                checkedIcon={checkedIcon}
                className={classes.checkBox}
                checked={selected}
                color="primary"
              />
              {option.name}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tỉnh/Thành phố"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          )}
          // onChange={(e, value) => onChange('province_list', e, value)}
        />
      </FormGroup>
      {/* <FormGroup className={classes.formGroup}>
        <Autocomplete
          multiple
          size="small"
          options={
            options.district_list.length > 0 ? options.district_list : []
          }
          getOptionLabel={(option) => option.label}
          noOptionsText={'Không có lựa chọn'}
          // disableCloseOnSelect
          value={props.searchCam}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                size="small"
                checkedIcon={checkedIcon}
                className={classes.checkBox}
                checked={selected}
                color="primary"
              />
              {option.label}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Quận/Huyện"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          )}
          onChange={(e, value) => onChange('district_list', e, value)}
        />
      </FormGroup> */}
      {/* <FormGroup className={classes.formGroup}>
        <Autocomplete
          multiple
          size="small"
          options={
            options.commune_list.length > 0 ? options.commune_list : []
          }
          getOptionLabel={(option) => option.label}
          noOptionsText={'Không có lựa chọn'}
          // disableCloseOnSelect
          value={props.searchCam}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                size="small"
                checkedIcon={checkedIcon}
                className={classes.checkBox}
                checked={selected}
                color="primary"
              />
              {option.label}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Phường/Xã"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          )}
          onChange={(e, value) => onChange('communes', e, value)}
        />
      </FormGroup> */}
      {/* <FormGroup className={classes.formGroup}>
        <Autocomplete
          multiple
          size="small"
          options={options.groups.length > 0 ? options.groups : []}
          getOptionLabel={(option) => option.label}
          noOptionsText={'Không có lựa chọn'}
          // disableCloseOnSelect
          value={props.searchCam}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                size="small"
                checkedIcon={checkedIcon}
                className={classes.checkBox}
                checked={selected}
                color="primary"
              />
              {option.label}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Nhóm"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          )}
          onChange={(e, value) => onChange('groups', e, value)}
        />
      </FormGroup> */}
  </React.Fragment>
  );
}

export default AutocompleteCheckbox;

const useStyles = makeStyles((theme) => ({
    formGroup: {
        marginBottom: 16,
      },
      labelRoot: {
        fontSize: 15,
      },
      checkBox: {
        marginRight: 8,
        padding: 4,
      },
}));
