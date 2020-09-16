import React from 'react'
import { Tooltip,Paper, Tabs, Tab, Fab } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import {  Add as AddIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Seach from './component/seach_parking/seach_parking'
import Listitem from './component/listitem_paking/listitem_parking'
import FormAddPage from './component/form_parking'

function ManageParking(props) {
    const classes = useStyles()
    const showModal = (e) => {
       props.showFormParking()
    }
    
    // useEffect(() => {
    //   props.isSeachcam(props.political);
    //   props.Province();
    // }, []);

    return (
        <div className={classes.wrapGrid}>
            <div className={classes.listCamera}>
                {!props.showformadd ? (
                    <>
                        <Paper className={classes.listmenu}>
                            <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="simple tabs example" className={classes.tablist} variant="fullWidth">
                                <Tab className={classes.customTab} label="Danh Sách" />
                            </Tabs>
                        </Paper>

                        <div className={classes.listseach}>
                            <Seach />

                            <Scrollbars>
                                <Listitem />
                            </Scrollbars>
                        </div>

                        <div className={classes.listCard}>
                            <Tooltip title="Add" aria-label="add">
                                <Fab color="primary" className={classes.fab} onClick={(e) => showModal(e)}>
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </>
                ) : null}
                {props.showformadd ? (
                    <div className={classes.showform}>
                        <FormAddPage showModal={showModal} />{' '}
                    </div>
                ) : null}
            </div>
            <div>doyyh</div>
        </div>
    )
}

export default ManageParking

const useStyles = makeStyles((theme) => ({
    customTab: {
        width: '400px',
        background: '#ffffff',
    },
    tablist: {
        width: 400,
    },
    listCamera: {
       
        position:'relative',
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
    },
    listseach:{
        height:'calc(100vh - 167px)'
    },
    root: {
        width: '400px',
        zIndex: 3,
        boxShadow: '5px 0 5px -5px #333',
        height: '100%',
        position: 'relative',
    },
    showform: {
        display: 'flex',
        height:'100%'
    },
    paper: {
        color: theme.palette.text.secondary,
        height: '100%',
    },
    listCard: {
        right:'60px',
        position:'absolute',
        bottom:'25px'
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
    sizeitem: {
        fontSize: '14px',
    },
    map: {
        height: '100%',
        position: 'relative',
    },
    wrapGrid: {
        display: 'flex',
        flex: '1 1 auto',
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
    },
    iconeditbuton: {
        padding: '0',
    },
    icondeletebuton: {
        padding: '0',
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
    setitem: {
        // marginLeft: '16px',
    },
    iconedit: {
        fontSize: '15px',
        padding: 0,
    },
    icondelete: {
        fontSize: '15px',
        padding: 0,
        // marginLeft: '8px',
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
    map: {
        width: '100%',
        height: '100%',
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
