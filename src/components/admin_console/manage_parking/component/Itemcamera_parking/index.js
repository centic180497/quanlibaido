import { connect} from 'react-redux'
import {editFormData,showInfowindow} from 'actions/manage_parking/index'
import ItemParking from './Itemcamera_parking'
import {deleteManageParking} from 'actions/manage_parking/manage_parking'

const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd,
    infowindow:manageparking.infowindow,
    openAlert:manageparking.openAlert
})        

export default connect(mapStateToProps,{
    editFormData,
    showInfowindow,
    deleteManageParking
})(ItemParking)