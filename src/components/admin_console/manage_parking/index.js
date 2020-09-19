import { connect} from 'react-redux'
import {showFormParking,addingParking,editingParking} from 'actions/manage_parking/index'

import ManageParking from './manage_parking'

const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd,
    isAddingParking:manageparking.isAddingParking,
    isEditingParking:manageparking.isEditingParking,
    isAdding:manageparking.isAdding,
    isEditing:manageparking.isEditing,
    editFormData:manageparking.editFormData
})        

export default connect(mapStateToProps,{
    showFormParking,
    addingParking,
    editingParking
})(ManageParking)