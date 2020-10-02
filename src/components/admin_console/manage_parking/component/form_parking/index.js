import { connect } from 'react-redux'
import { cancleFormParking } from 'actions/manage_parking/index'
import FormAddPage from './form_parking'
import {fetchProvinces,fetchDistrics,fetchCommunes} from 'actions/political/index'
import {clearProvince,clearDistricts} from 'actions/political/action_political'
import {addManageParking,editManageParking} from 'actions/manage_parking/manage_parking'


const mapStateToProps = ({ manageparking,political }) => ({
    isAdding: manageparking.isAdding,
    editFormData: manageparking.editFormData,
    isEditingParking: manageparking.isEditingParking,
    isEditing: manageparking.isEditing,
    isAddingParking: manageparking.isAddingParking,
    option:political.provinces,
    districts:political.districts,
    communes:political.communes,
    idEditForm:manageparking.idEditForm
})

export default connect(mapStateToProps, {
    cancleFormParking,
    fetchProvinces,
    fetchDistrics,
    fetchCommunes,
    clearProvince,
    clearDistricts,
    addManageParking,
    editManageParking
})(FormAddPage)
