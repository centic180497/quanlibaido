import React from 'react'

function ModalController(props) {
    const { modals } = props
    const { modalState } = modals

    if (!modals) {
        return <div />
    }

    const modalOutput = []

    for(const modalId in modalState){
        if(modalState.hasOwnProperty(modalId)){
            const modal = modalState[modalId]
            if(modal.open){
                const modalComponent = React.createElement(modal.dialogType, Object.assign({}, modal.dialogProps))

                modalOutput.push(modalComponent)
            }
        }
    }

    return <div>{modalOutput}</div>
}

export default ModalController
