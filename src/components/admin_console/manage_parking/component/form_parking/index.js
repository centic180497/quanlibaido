import { connect} from 'react-redux'
import {cancleFormParking} from 'actions/manage_parking/index'

import FormAddPage from './form_parking'

const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd,
    editFormData:manageparking.editFormData

})        

export default connect(mapStateToProps,{
    cancleFormParking
})(FormAddPage)