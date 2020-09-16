import React, { useState, useEffect } from 'react'
import { Button, Paper, Tabs, Tab, IconButton, TextField } from '@material-ui/core'
import { useForm, useFieldArray } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Radio from '@material-ui/core/Radio'
import { RadioGroup, Tooltip } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
function FormAddPage(props) {
    const { register, handleSubmit, errors, control, setValue, watch } = useForm()
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    })

    const isNameError = errors.name && errors.name.type === 'required'
    const nameErrorText = isNameError ? 'Tên bãi đỗ không được để trống' : ''

    const isDescriptionError = errors.total && errors.total.type === 'required'
    const descriptionErrorText = isDescriptionError ? 'Tổng số không đươc để trống' : ''

    const typedueError = errors.typedue && errors.typedue.type === 'required'
    const typedueErrorText = typedueError ? 'Loại bãi đỗ không được để trống' : ''

    const provinceError = errors.province && errors.province.type === 'required'
    const typeprovinceErrorText = provinceError ? 'Thành phố không được để trống' : ''

    const districError = errors.distric && errors.distric.type === 'required'
    const typedistricErrorText = districError ? 'Thành phố không được để trống' : ''

    const communsError = errors.communs && errors.communs.type === 'required'
    const typecommunsErrorText = provinceError ? 'Phường không được để trống' : ''

    const onSubmit = handleSubmit((updatedData) => console.log(updatedData))
    const classes = useStyles()

    const [districts] = useState([
        { id: 1, name: 'Quan Hai Chau' },
        { id: 2, name: 'Quan Cam Le' },
        { id: 3, name: 'Quan Ngu Hanh Son' },
    ])


    const type = watch('type')
    useEffect(() => {
        console.log(type)
        setValue('type', type)
    }, [type, setValue])

    const cancleModal = (e) => {
        props.cancleFormParking()
    }
    // console.log('control',props.editFormData.type)
    return (
        <div className={classes.wrapGrid}>
            <Paper className={classes.listmenu}>
                <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example" variant="fullWidth">
                    <Tab className={classes.customTab} label={props.editFormData ? 'CẤU HÌNH BÃI ĐỖ' : 'THÊM MỚI BÃI ĐỖ'} />
                </Tabs>
            </Paper>

            <div className={classes.formControl}>
                <form onSubmit={onSubmit} autoComplete="off">
                    <div>
                        <TextField
                            size="small"
                            autoFocus
                            fullWidth
                            type="text"
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
                                type="lat"
                                name="lat"
                                id="outlined-disabled"
                                label="Kinh Độ"
                                defaultValue="lat"
                                variant="outlined"
                                // helperText={latErrorText}
                                // error={isLatError}
                                inputRef={register({ required: true })}
                                ref={register}
                                className={classes.formInput}
                            />
                            {errors.lat && <p>{errors.lat.message}</p>}
                            <TextField
                                size="small"
                                disabled
                                name="lng"
                                id="outlined-disabled"
                                label="Vĩ độ"
                                defaultValue="lat"
                                variant="outlined"
                                // helperText={isDescriptionError}
                                // error={descriptionErrorText}
                                inputRef={register({ required: true })}
                                className={classes.formInput}
                            />
                        </div>

                        <div>
                            <Autocomplete
                                // multiple
                                id="tags-outlined"
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                noOptionsText={'Không có lựa chọn'}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        helperText={typeprovinceErrorText}
                                        error={provinceError}
                                        name="province"
                                        label="Thành phố"
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        inputRef={register({ required: true })}
                                    />
                                )}
                                className={classes.formInput}
                            />
                        </div>
                        <div>
                            <Autocomplete
                                // multiple
                                id="tags-outlined"
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                noOptionsText={'Không có lựa chọn'}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        error={districError}
                                        helperText={typedistricErrorText}
                                        size="small"
                                        name="distric"
                                        label="Quận/Huyện"
                                        variant="outlined"
                                        fullWidth
                                        inputRef={register({ required: true })}
                                    />
                                )}
                                className={classes.formInput}
                            />
                        </div>
                        <div>
                            <Autocomplete
                                // multiple
                                id="tags-outlined"
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                noOptionsText={'Không có lựa chọn'}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField
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
                                className={classes.formInput}
                            />
                        </div>
                        <div>
                            <Autocomplete
                                // multiple
                                id="tags-outlined"
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                noOptionsText={'Không có lựa chọn'}
                                disableCloseOnSelect
                                renderInput={(params) => (
                                    <TextField
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
                    </div>
                    <TextField
                        size="small"
                        autoFocus
                        fullWidth
                        type="text"
                        label="Tổng số chỗ"
                        name="total"
                        variant="outlined"
                        helperText={descriptionErrorText}
                        error={isDescriptionError}
                        inputRef={register({ required: true })}
                        className={classes.formInput}
                        defaultValue={props.editFormData?.totalSlot || ''}
                    />

                    <div className={classes.radio}>
                        <RadioGroup aria-label="quiz" name="type" className={classes.radiogroup}  defaultValue={1} >
                            <FormControlLabel value='1' control={<Radio color="primary" />} inputRef={register({ required: true })} label="Không thu phí" />
                            <FormControlLabel
                                value='2'
                                control={<Radio color="primary" />}
                                inputRef={register({ required: true })}
                                label="Thu phí"
                                onClick={fields.length === 0 ? () => append({}) : null}
                            />
                        </RadioGroup>
                    </div>
                    {type == 2 
                        ? fields.map(({ id, name, type, amount }, index) => {
                              return (
                                  <div className={classes.due} key={id}>
                                      <div className={classes.fee}>
                                          <TextField
                                              size="small"
                                              autoFocus
                                              fullWidth
                                              type="text"
                                              label="Phương tiện"
                                              name={`items[${index}].name`}
                                              variant="outlined"
                                              //   helperText={nameErrorText}
                                              //   error={isNameError}
                                              defaultValue={name}
                                              //   inputRef={register({ required: true })}
                                              inputRef={register({})}
                                              className={classes.formInput}
                                          />
                                          <TextField
                                              size="small"
                                              autoFocus
                                              fullWidth
                                              type="text"
                                              label="Đơn vị tính"
                                              name={`items[${index}].type`}
                                              defaultValue={type}
                                              variant="outlined"
                                              //   helperText={nameErrorText}
                                              //   error={isNameError}
                                              //   inputRef={register({ required: true })}
                                              inputRef={register({})}
                                              className={classes.formInput}
                                          />
                                          <TextField
                                              size="small"
                                              defaultValue={amount}
                                              autoFocus
                                              fullWidth
                                              type="text"
                                              label="Giá tiền"
                                              name={`items[${index}].amount`}
                                              variant="outlined"
                                              //   helperText={nameErrorText}
                                              //   error={isNameError}
                                              inputRef={register({})}
                                              className={classes.formInput}
                                          />
                                          <Tooltip title="xóa" arrow className={classes.tooltip}>
                                              <IconButton size="small">
                                                  <DeleteOutlinedIcon className={classes.icon} onClick={() => remove(index)} />
                                              </IconButton>
                                          </Tooltip>
                                      </div>

                                      <div className={classes.buttonappen}>
                                          <Button type="button" variant="contained" color="primary" onClick={() => append({})}>
                                              Thêm
                                          </Button>
                                      </div>
                                  </div>
                              )
                          })
                        : null}
                    <div className={classes.saveadd}>
                        <Button type="submit" variant="contained" color="primary" className={classes.saveaddparking} onClick={cancleModal}>
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
    },
    paper: {
        color: theme.palette.text.secondary,
        height: '100%',
    },
    latlng: {
        display: 'flex',
    },
    formInput: {
        marginTop: '10px',
        width: '100%',
        fontSize: '15px',
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
        // display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'start',
        // height: '100%',
        flexDirection: 'column',
        display: 'flex',
        position: 'relative',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        width: 400,
    },
    bground: {
        backgroundColor: '#e0e0e0',
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
    listCard: {
        display: 'flex',
        flexDirection: 'column',
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
        marginRight: 5,
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
