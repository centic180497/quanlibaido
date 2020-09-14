import { connect } from 'react-redux'
import { ModalIdentifiers } from 'utils/constants'
import {isModalOpen} from 'selectors/modals'

import LogoutModal from './logout_modal'

function mapStateToProps(state) {
    const modalId = ModalIdentifiers.LOGOUT

    return {
        show: isModalOpen(state, modalId)
    }
}

export default connect(mapStateToProps)(LogoutModal)
