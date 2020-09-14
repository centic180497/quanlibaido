import { connect} from 'react-redux'

import ModalController from './modal_controller'

function mapStateToProps(state){
    return {
        modals: state.modals
    }
}

function mapDispatchToProps(){
    
}

export default connect(mapStateToProps)(ModalController)