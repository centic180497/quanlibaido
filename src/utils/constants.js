export const ActionTypes = {
    BROWSER_CHANGE_FOCUS: 'BROWSER_CHANGE_FOCUS',

    MODAL_OPEN: 'MODAL_OPEN',
    MODAL_CLOSE: 'MODAL_CLOSE',
}

export const RequestStatus = {
    NOT_STARTED: 'NOT_STARTED',
    STARTED: 'STARTED',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}

export const ModalIdentifiers = {
    LOGOUT: 'logout',
    DELETE_CAMERA: 'delete_camera',
}

export const CameraStatus = {}

export const SocketEvents = {}

export const UploadStatus = {
    LOADING: 'LOADING',
    COMPLETE: 'COMPLETE',
    DEFAULT: '',
}

export const FileTypes = {
    TEXT: 'text',
    IMAGE: 'image',
    AUDIO: 'audio',
    VIDEO: 'video',
    SPREADSHEET: 'spreadsheet',
    CODE: 'code',
    WORD: 'word',
    PRESENTATION: 'presentation',
    PDF: 'pdf',
    PATCH: 'patch',
    SVG: 'svg',
    OTHER: 'other',
}

export const NoParkingOptions = [{ id: 1, name: 'Giờ cao điểm', color: '#fff' }]

export const ParkingTypeOptions = [
    { id: 1, name: 'Tập trung' },
    { id: 2, name: 'Dưới lòng đường' },
]
