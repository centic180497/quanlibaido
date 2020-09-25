import { connect } from 'react-redux'
import AutocompleteCheckbox from './autocomplete_parking'
import {fetchProvinces,fetchDistrics,fetchCommunes} from 'actions/political/index'
import {clearProvince,clearDistricts} from 'actions/political/action_political'
const mapStateToProps = ({ political }) => ({
    option:political.provinces,
    districts:political.districts,
    communes:political.communes
})

export default connect(mapStateToProps, {
    fetchProvinces,
    fetchDistrics,
    fetchCommunes,
    clearProvince,
    clearDistricts
})(AutocompleteCheckbox)
