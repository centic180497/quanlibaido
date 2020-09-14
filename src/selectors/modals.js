export function isModalOpen(state, modalId) {
    return state.modals.modalState[modalId] && state.modals.modalState[modalId].open
}
