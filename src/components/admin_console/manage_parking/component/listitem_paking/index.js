import { connect } from 'react-redux'
import Listitem from './listitem_parking'

const mapStateToProps = ({ manageparking }) => ({
    parking:manageparking.manageParking,
    loading:manageparking.loading
})

export default connect(mapStateToProps,null)(Listitem)
