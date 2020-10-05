import { connect} from 'react-redux'
import {editFormData,showInfowindow} from 'actions/manage_parking/index'
import ItemParking from './Itemcamera_parking'
import {deleteManageParking,getEditManageParking} from 'actions/manage_parking/manage_parking'
import {fetchDistrics,fetchCommunes} from 'actions/political/index'
const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd,
    infowindow:manageparking.infowindow,
    openAlert:manageparking.openAlert
})        

export default connect(mapStateToProps,{
    editFormData,
    showInfowindow,
    deleteManageParking,
    getEditManageParking,
    fetchDistrics,
    fetchCommunes,
})(ItemParking)