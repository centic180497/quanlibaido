import { connect } from 'react-redux'
import AdminSidebar from './admin_sidebar'
import { cancleFormParking } from 'actions/manage_parking/index'
export default connect(null,{
    cancleFormParking,
})(AdminSidebar)