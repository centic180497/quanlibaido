import React, { useState, useEffect } from 'react'
import { Button, Paper, Tabs, Tab, IconButton, TextField } from '@material-ui/core'
import { useForm, useFieldArray } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Radio from '@material-ui/core/Radio'
import { RadioGroup, Tooltip } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { Scrollbars } from 'react-custom-scrollbars'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
function FormAddPage(props) {
    const defaultValues = props.editFormData ? props.editFormData : { type: '1' }
    const { register, handleSubmit, errors, control, setValue, watch, getValues } = useForm({
        defaultValues,
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fee',
    })

    const isNameError = errors.name && errors.name.type === 'required'
    const nameErrorText = isNameError ? 'Tên bãi đỗ không được để trống' : ''

    const isLatError = errors.lat && errors.lat.type === 'required'
    const latErrorText = isLatError ? 'kinh độ không được để trống' : ''

    const isLngError = errors.lng && errors.lng.type === 'required'
    const lngErrorText = isLngError ? 'Vĩ độ không được để trống' : ''

    const isDescriptionError = errors.total && errors.total.type === 'required'
    const descriptionErrorText = isDescriptionError ? 'Tổng số chỗ không được để trống' : ''

    const typedueError = errors.typedue && errors.typedue.type === 'required'
    const typedueErrorText = typedueError ? 'Loại bãi đỗ không được để trống' : ''

    const provinceError = errors.province && errors.province.type === 'required'
    const typeprovinceErrorText = provinceError ? 'Thành phố không được để trống' : ''

    const districError = errors.distric && errors.distric.type === 'required'
    const typedistricErrorText = districError ? 'Quận không được để trống' : ''

    const communsError = errors.communs && errors.communs.type === 'required'
    const typecommunsErrorText = provinceError ? 'Phường không được để trống' : ''
    console.log(props.editFormData)
    const onSubmit = handleSubmit((updatedData, e) => {
        e.isPropagationStopped()
        const param = { ...updatedData }
        console.log("param",param);
        
        param['lat'] = getValues('lat')
        param['lng'] = getValues('lng')
        if (props.editFormData) {
            const id = props.idEditForm

            props.editManageParking(param, id)
            props.clearProvince()
            props.clearDistricts()
            props.cancleFormParking()
        } else {
            props.addManageParking(param)
            props.clearProvince()
            props.clearDistricts()
            props.cancleFormParking()
        }
    })
    const classes = useStyles()

    const [districts] = useState([
        { id: 1, name: 'Ngoài Lòng Đường' },
        { id: 2, name: 'Mất Phí' },
    ])
    const [valueprovince, Setvalueprovince] = useState('')
    const [valueDistrict, SetvalueDistrict] = useState([])
    const [valueCommuns, SetvalueCommuns] = useState([])
    const [number,Setnumber]=useState("")
    const [open, setOpen] = React.useState(false)
    const { option } = props
    const handleClose = (e) => {
        setOpen(false)
    }
    useEffect(() => {
        if (fields.length === 0) {
            setValue('type', '1')
        }
    }, [fields])

    const type = watch('type')
    const typedue = watch('typedue')
    const lat = watch('lat')
    const lng = watch('lng')

    useEffect(() => {
        // setValue('lat',lat)
        // setValue('lng',lng)
        setValue('type', type)
        setValue('typedue', typedue)
    }, [type, typedue, lat, lng])
    const cancleModal = (e) => {
        e.isPropagationStopped()
        const { lat, lng, name, totalSlot, type, communs, typedue } = control.defaultValuesRef.current


        if (props.editFormData) {
            if (
                getValues('lat') !== lat.toString() ||
                getValues('lng') !== lng.toString()
                // getValues('totalSlots').toString()!== totalSlot
                // getValues('name') !== name
            ) {
                console.log('vô edit')

                setOpen(true)
            } else {
                props.cancleFormParking()
            }
        } else {
            if (
                getValues('lat') !== 'Kinh độ' ||
                getValues('lng') !== 'Vĩ độ' ||
                getValues('name') !== '' ||
                getValues('province') !== '' ||
                getValues('district') !== '' ||
                getValues('communs') !== '' ||
                getValues('typedue') !== '' ||
                getValues('totalSlots') !== ''
            ) {
                console.log('vô add')

                setOpen(true)
            } else {
                props.clearProvince()
                props.clearDistricts()
                props.cancleFormParking()
            }
        }
    }
    const handleButton = (e) => {
        props.cancleFormParking()
        props.clearProvince()
        props.clearDistricts()
    }
    const handleChange = (event) => {
        setValue('type', event.target.value)
    }
    const handleProvinceChange = (e, value) => {
        Setvalueprovince(value)
        if (value === null) {
            props.clearProvince()
            SetvalueDistrict('')
            SetvalueCommuns('')
        } else {
            const id = value.code

            props.fetchDistrics(id)
        }
    }
    const handleDistrictChange = (e, value) => {
        SetvalueDistrict(value)

        if (value === null) {
            props.clearDistricts()

            SetvalueCommuns('')
        } else {
            const id = value.code

            props.fetchCommunes(id)
        }
    }
    const handleCommunsChange = (e, value) => {
        SetvalueCommuns(value)
    }
    const handleChangeNumber=(event) => {
        Setnumber(Number(event.target.value))
      }

    const provinces = props.option.filter((province) => province.code.toString() === '48')

    return (
        <div className={classes.wrapGrid}>
            <Paper className={classes.listmenu}>
                <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example" variant="fullWidth">
                    <Tab className={classes.customTab} label={props.editFormData ? 'CẤU HÌNH BÃI ĐỖ' : 'THÊM MỚI BÃI ĐỖ'} />
                </Tabs>
            </Paper>
            <div className={classes.formControl}>
                <form onSubmit={onSubmit} className={classes.formdata}>
                    <Scrollbars>
                        <div>
                            <TextField
                                size="small"
                                autoFocus
                                fullWidth
                                type="name"
                                label="Tên bãi đỗ "
                                name="name"
                                variant="outlined"
                                helperText={nameErrorText}
                                error={isNameError}
                                inputRef={register({ required: true })}
                                className={classes.formInput}
                                defaultValue={props.editFormData?.nameCamera || ''}
                            />
                            <div className={classes.latlng}>
                                <TextField
                                    size="small"
                                    disabled
                                    autoFocus
                                    fullWidth
                                    type="lat"
                                    name="lat"
                                    id="outlined-disabled"
                                    helperText={latErrorText}
                                    error={isLatError}
                                    label="Kinh Độ"
                                    defaultValue={props.editFormData?.lat || 'Kinh độ'}
                                    variant="outlined"
                                    value={props.editFormData ? props.editFormData.lat : props.isAdding.lat}
                                    inputRef={register({ required: true })}
                                    className={classes.formInput}
                                />
                                <p className={classes.lat}></p>
                                <TextField
                                    size="small"
                                    disabled
                                    name="lng"
                                    type="lng"
                                    helperText={lngErrorText}
                                    error={isLngError}
                                    id="outlined-disabled"
                                    label="Vĩ Độ"
                                    defaultValue={props.editFormData?.lng || 'Vĩ độ'}
                                    value={props.editFormData ? props.editFormData.lng : props.isAdding.lng}
                                    variant="outlined"
                                    inputRef={register({ required: true })}
                                    className={classes.formInput}
                                />
                            </div>

                            <div>
                                <Autocomplete
                                    // multiple
                                    id="tags-outlined"
                                    disableCloseOnSelect={false}
                                    options={provinces || []}
                                    getOptionLabel={(option) => (option.name ? option.name : '')}
                                    noOptionsText={'Không có lựa chọn'}
                                    value={option.length > 0 || valueprovince ? option.name : ''}
                                    renderInput={(params) => (
                                        <TextField
                                            disableCloseOnSelect={false}
                                            {...params}
                                            helperText={typeprovinceErrorText}
                                            error={provinceError}
                                            name="province"
                                            label="Tỉnh/Thành phố"
                                            size="small"
                                            variant="outlined"
                                            fullWidth
                                            inputRef={register({ required: true })}
                                        />
                                    )}
                                    onChange={(e, value) => handleProvinceChange(e, value)}
                                    className={classes.formInput}
                                />
                            </div>
                            <div>
                                <Autocomplete
                                    // multiple
                                    disableCloseOnSelect={false}
                                    id="tags-outlined"
                                    options={props.districts.length > 0 ? props.districts : []}
                                    getOptionLabel={(option) => (option.name ? option.name : '')}
                                    noOptionsText={'Không có lựa chọn'}
                                    value={props.districts.length > 0 || valueprovince ? valueDistrict : ''}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            disableCloseOnSelect={false}
                                            error={districError}
                                            helperText={typedistricErrorText}
                                            size="small"
                                            name="district"
                                            label="Quận/Huyện"
                                            variant="outlined"
                                            fullWidth
                                            inputRef={register({ required: true })}
                                        />
                                    )}
                                    onChange={(e, value) => handleDistrictChange(e, value)}
                                    className={classes.formInput}
                                />
                            </div>
                            <div>
                                <Autocomplete
                                    // multiple
                                    // open
                                    disableCloseOnSelect={false}
                                    id="tags-outlined"
                                    options={props.communes.length > 0 ? props.communes : []}
                                    getOptionLabel={(option) => (option.name ? option.name : '')}
                                    noOptionsText={'Không có lựa chọn'}
                                    value={props.communes.length > 0 || valueprovince ? valueCommuns : ''}
                                    renderInput={(params) => (
                                        <TextField
                                            disableCloseOnSelect={false}
                                            error={communsError}
                                            helperText={typecommunsErrorText}
                                            {...params}
                                            name="communs"
                                            label="Xã/Phường"
                                            variant="outlined"
                                            fullWidth
                                            inputRef={register({ required: true })}
                                            size="small"
                                        />
                                    )}
                                    onChange={(e, value) => handleCommunsChange(e, value)}
                                    className={classes.formInput}
                                />
                            </div>
                            <div>
                                <Autocomplete
                                    // multiple
                                    id="tags-outlined"
                                    options={districts}
                                    disableCloseOnSelect={false}
                                    getOptionLabel={(option) => (option.name ? option.name : '')}
                                    noOptionsText={'Không có lựa chọn'}
                                    renderInput={(params) => (
                                        <TextField
                                            disableCloseOnSelect={false}
                                            {...params}
                                            name="typedue"
                                            label="Loại bãi đỗ"
                                            variant="outlined"
                                            error={typedueError}
                                            helperText={typedueErrorText}
                                            fullWidth
                                            inputRef={register({ required: true })}
                                            size="small"
                                        />
                                    )}
                                    className={classes.formInput}
                                />
                            </div>
                            <TextField
                                size="small"
                                autoFocus
                                fullWidth
                                type="tel"
                                onChange={(event) =>handleChangeNumber(event)}
                                label="Tổng số chỗ"
                                name="totalSlots"
                                variant="outlined"
                                helperText={descriptionErrorText}
                                error={isDescriptionError}
                                inputRef={register({ required: true, pattern: /[-+]?[0-9]*[.,]?[0-9]+$/i })}
                                className={classes.formInput}
                                defaultValue={props.editFormData?.totalSlot || ''}
                                // value={number}
                                
                            />
                            {/* {errors.total && errors.total.type==="pattern"? <p>{errors.total.message}</p>:null} */}
                            {errors.total && errors.total.type === 'pattern' ? <p style={{ color: 'red' }}>Vui lòng nhập số</p> : null}

                            <div className={classes.radio}>
                                <RadioGroup
                                    aria-label="quiz"
                                    name="type"
                                    className={classes.radiogroup}
                                    value={type || defaultValues.type.toString()}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" />}
                                        inputRef={register({ required: true })}
                                        label="Không thu phí"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" />}
                                        inputRef={register({ required: true })}
                                        label="Thu phí"
                                        onClick={fields.length === 0 ? () => append({}) : null}
                                    />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className={classes.feeform}>
                            {(type || defaultValues.type.toString()) === '2'
                                ? fields.map((field, index) => {
                                      return (
                                          <div className={classes.due} key={field.id}>
                                              <div className={classes.fee}>
                                                  <TextField
                                                      size="small"
                                                      autoFocus
                                                      fullWidth
                                                      type="text"
                                                      label="Phương tiện"
                                                      name={`fee[${index}].vehicle`}
                                                      variant="outlined"
                                                      defaultValue={field.vehicle}
                                                      helperText={nameErrorText}
                                                      error={isNameError}
                                                      inputRef={register({ required: true })}
                                                      className={classes.formInputfee}
                                                  />
                                                  <TextField
                                                      size="small"
                                                      autoFocus
                                                      fullWidth
                                                      type="text"
                                                      label="Đơn vị tính"
                                                      name={`fee[${index}].field`}
                                                      defaultValue={field.unit}
                                                      variant="outlined"
                                                      helperText={nameErrorText}
                                                      error={isNameError}
                                                      inputRef={register({ required: true })}
                                                      className={classes.formInputfee}
                                                  />
                                                  <TextField
                                                      size="small"
                                                      defaultValue={field.price}
                                                      autoFocus
                                                      fullWidth
                                                      type="number"
                                                    //   onChange={(event) =>handleChangeNumber(event)}
                                                      label="Giá tiền"
                                                      name={`fee[${index}].price`}
                                                      variant="outlined"
                                                      helperText={nameErrorText}
                                                      error={isNameError}
                                                      inputRef={register({ required: true })}
                                                      className={classes.formInputfee}
                                                  />
                                                  <Tooltip title="xóa" arrow className={classes.tooltip}>
                                                      <IconButton size="small">
                                                          <DeleteRoundedIcon className={classes.icon} onClick={() => remove(index)} />
                                                      </IconButton>
                                                  </Tooltip>
                                              </div>
                                          </div>
                                      )
                                  })
                                : null}
                            {(type || defaultValues.type.toString()) === '2' ? (
                                <div className={classes.buttonappen}>
                                    <Button type="button" variant="contained" color="primary" onClick={() => append({})}>
                                        Thêm
                                    </Button>
                                </div>
                            ) : null}
                        </div>
                    </Scrollbars>

                    {open ? (
                        <div className={classes.dialog}>
                            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                                {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">Bạn có chắc chắn muốn hủy không</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button color="primary" onClick={(e) => handleClose(e)}>
                                        Quay Lại
                                    </Button>
                                    <Button color="primary" autoFocus onClick={(e) => handleButton(e)}>
                                        Đồng Ý
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    ) : null}

                    <div className={classes.saveadd}>
                        <Button type="submit" variant="contained" color="default" className={classes.saveaddparking} onClick={cancleModal}>
                            Hủy
                        </Button>

                        <Button type="submit" variant="contained" color="primary" className={classes.saveaddparking}>
                            Lưu
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAddPage

const useStyles = makeStyles((theme) => ({
    root: {
        width: '400px',
        zIndex: 3,
        boxShadow: '5px 0 5px -5px #333',
        height: '100%',
        position: 'relative',
        background: '#ffffff',
    },
    listmenu: {
        width: '100%',
    },
    formControl: {
        width: '100%',
        padding: '10px',
        flex: '1 1 auto',
    },
    feeform: {},
    paper: {
        color: theme.palette.text.secondary,
        height: '100%',
    },
    latlng: {
        display: 'flex',
        alignItems: 'center',
    },
    formInput: {
        marginTop: '10px',
        width: '100%',
        fontSize: '14px',
    },
    lat: {
        // height:"50px"
        width: 5,
        margin: '9px 5px 0 5px',
        background: '#c1bcbc',
        height: 30,
    },
    formInputfee: {
        marginTop: '10px',
        fontSize: '14px',
        marginRight: '4px',
    },
    due: {
        // display: 'flex',
    },
    saveaddparking: {
        marginRight: '8px',
    },
    fee: {
        display: 'flex',
    },
    deletefab: {},
    listCard: {
        display: 'flex',
        flexDirection: 'column',
    },
    radio: {
        display: 'flex',
    },
    radiogroup: {
        display: 'block',
    },
    bground: {
        backgroundColor: '#e0e0e0',
    },
    customCard: {
        padding: 0,
        margin: '0 15px',
        '&:last-child': {
            padding: 0,
        },
    },
    formdata: {
        height: '100%',
    },
    size: {
        fontSize: 16,
    },
    saveadd: {
        right: 8,
        bottom: 3,
        position: 'absolute',
    },
    sizeitem: {
        fontSize: '14px',
    },
    map: {
        height: '100%',
        position: 'relative',
    },
    wrapGrid: {
        flexDirection: 'column',
        display: 'flex',
        position: 'relative',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        width: 400,
    },
    blacklist: {
        marginTop: '3px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    fab: {
        position: 'absolute',
        bottom: 3,
        right: 8,
    },
    buttonappen: {
        marginTop: '10px',
    },
    iconeditbuton: {
        padding: '0',
    },
    icondeletebuton: {
        padding: '0',
    },
    icon: {
        padding: '5px',
    },
    listblck: {
        flexGrow: 1,
        zIndex: '9999',
        left: '101%',
        boxShadow: '5px 0 5px -5px #333',
        height: '100%',
        position: 'absolute',
        background: '#ffffff',
        top: '0',
    },
    link: {
        textDecoration: 'none',
    },
    iconedit: {
        fontSize: '15px',
        padding: 0,
    },
    icondelete: {
        fontSize: '15px',
        padding: 0,
    },
    color: {
        color: 'red',
    },
    formadd: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    setheight: {
        height: '100%',
    },
    scroll: {},
    closeButton: {
        position: 'absolute',
        right: theme.spacing(0),
        top: theme.spacing(0),
        color: theme.palette.grey[500],
    },
    siteMap: {
        display: 'flex',
        height: '100vh',
        width: '100%',
    },
    infoCamera: {
        width: 320,
        padding: 10,
    },
    title: {
        fontSize: 14,
        paddingLeft: '6px',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        justifyContent: 'flex-start',
    },
    media: {
        height: 70,
        width: 70,
    },
    textInfo: {
        marginLeft: 10,
    },
    tooltip: {
        padding: 5,
        marginTop: 8,
    },
    logtitle: {
        margin: '0',
        padding: '8px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
    },
    logblack: {
        fontSize: '1.25rem',
        fontFamily: 'Roboto, Helvetica, Arial, sanSerif',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        margin: '6px',
    },
    Form: {
        width: '500px',
        marginLeft: '500px',
        marginTop: '50px',
    },
}))
