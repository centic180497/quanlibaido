import { connect } from 'react-redux'
import { showInfowindow,cancleInforwindow } from 'actions/manage_parking/index'
import MarkerParking from './marker_parking'

const mapStateToProps = ({ manageparking }) => ({
    idEditForm: manageparking.idEditForm,
    infowindow: manageparking.infowindow,
})

export default connect(mapStateToProps, {
    showInfowindow,
    cancleInforwindow,
    
})(MarkerParking)
