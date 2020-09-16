import { connect} from 'react-redux'
import {showFormParking} from 'actions/manage_parking/index'

import ManageParking from './manage_parking'

const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd
})        

export default connect(mapStateToProps,{
    showFormParking
})(ManageParking)