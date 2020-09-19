import { connect } from 'react-redux'
import { cancleFormParking } from 'actions/manage_parking/index'
import FormAddPage from './form_parking'

const mapStateToProps = ({ manageparking }) => ({
    isAdding: manageparking.isAdding,
    editFormData: manageparking.editFormData,
    isEditingParking: manageparking.isEditingParking,
    isEditing: manageparking.isEditing,
    isAddingParking: manageparking.isAddingParking,
})

export default connect(mapStateToProps, {
    cancleFormParking,
})(FormAddPage)
