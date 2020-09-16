import { connect} from 'react-redux'
import {editFormData} from 'actions/manage_parking/index'

import ItemParking from './Itemcamera_parking'

const mapStateToProps = ({ manageparking }) => ({
    showformadd:manageparking.showformadd
})        

export default connect(mapStateToProps,{
    editFormData
})(ItemParking)