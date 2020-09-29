import { connect } from 'react-redux'
import Listitem from './listitem_parking'

const mapStateToProps = ({ manageparking }) => ({
    parking:manageparking.manageParking
})

export default connect(mapStateToProps,null)(Listitem)
