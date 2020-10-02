import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormGroup, Checkbox } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon } from '@material-ui/icons'

function AutocompleteCheckbox(props) {
    const classes = useStyles()
    const { option } = props
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
    const checkedIcon = <CheckBoxIcon fontSize="small" />
    const [value, Setvalue] = useState('')
    const [valueDistrict, SetvalueDistrict] = useState([])
    const [valueCommuns, SetvalueCommuns] = useState([])

    const handleProvinceChange = (e, value) => {
        Setvalue(value)
        if (value.length === 0) {
            props.clearProvince()
            SetvalueDistrict([])
            SetvalueCommuns([])
        }
        const id = value.map((item) => item.code)
        props.fetchDistrics(id)
    }
    const handleDistrictChange = (e, value) => {
        SetvalueDistrict(value)
        if (value.length === 0) {
            props.clearDistricts()
            SetvalueCommuns([])
        }
        const id = value.map((item) => item.code)
        props.fetchCommunes(id)
    }
    const handleCommunsChange = (e, value) => {
        SetvalueCommuns(value)
    }
    const provinces=props.option.filter((province)=>province.code.toString() ==="48") 
    return (
        <React.Fragment>
            <FormGroup className={classes.formGroup}>
                <Autocomplete
                    multiple
                    size="small"
                    options={ provinces|| []}
                    getOptionLabel={props.option.length > 0 ? (option) => option.name : []}
                    noOptionsText={'Không có lựa chọn'}
                    // disableCloseOnSelect
                    value={option.name}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox icon={icon} size="small" checkedIcon={checkedIcon} className={classes.checkBox} checked={selected} color="primary" />
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
                    onChange={(e, value) => handleProvinceChange(e, value)}
                />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
                <Autocomplete
                    multiple
                    size="small"
                    options={props.districts.length > 0 ? props.districts : []}
                    getOptionLabel={props.districts.length > 0 ? (option) => option.name : []}
                    noOptionsText={'Không có lựa chọn'}
                    // disableCloseOnSelect
                    value={value.length > 0 ? valueDistrict : ''}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox icon={icon} size="small" checkedIcon={checkedIcon} className={classes.checkBox} checked={selected} color="primary" />
                            {option.name}
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
                    onChange={(e, value) => handleDistrictChange(e, value)}
                />
            </FormGroup>
            <FormGroup className={classes.formGroup}>
                <Autocomplete
                    multiple
                    size="small"
                    options={props.communes.length > 0 ? props.communes : []}
                    getOptionLabel={props.communes.length > 0 ? (option) => option.name : []}
                    noOptionsText={'Không có lựa chọn'}
                    // disableCloseOnSelect
                    value={value.length > 0 || valueDistrict > 0 ? valueCommuns : []}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox icon={icon} size="small" checkedIcon={checkedIcon} className={classes.checkBox} checked={selected} color="primary" />
                            {option.name}
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
                    onChange={(e, value) => handleCommunsChange(e, value)}
                />
            </FormGroup>
            {/* <FormGroup className={classes.formGroup}>
                <Autocomplete
                    multiple
                    size="small"
                    options={option.groups.length > 0 ? option.groups : []}
                    getOptionLabel={(option) => option.label}
                    noOptionsText={'Không có lựa chọn'}
                    // disableCloseOnSelect
                    value={props.searchCam}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox icon={icon} size="small" checkedIcon={checkedIcon} className={classes.checkBox} checked={selected} color="primary" />
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
                    // onChange={(e, value) => onChange('groups', e, value)}
                />
            </FormGroup> */}
        </React.Fragment>
    )
}

export default AutocompleteCheckbox

const useStyles = makeStyles((theme) => ({
    formGroup: {
        marginBottom: 10,
    },
    labelRoot: {
        fontSize: 15,
    },
    checkBox: {
        marginRight: 8,
        padding: 4,
    },
}))
