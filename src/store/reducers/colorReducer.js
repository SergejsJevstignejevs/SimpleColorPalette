const initialState = {
    redVelocity: 100,
    greenVelocity: 100,
    blueVelocity: 100
}

const colorReducer = (state = initialState, action) => {

    switch(action.type) {
        case "CHANGE_RED_VELOCITY" : {
            return {
                ...state,
                redVelocity: action.payload
            }
        }
        case "CHANGE_GREEN_VELOCITY" : {
            return {
                ...state,
                greenVelocity: action.payload
            }
        }
        case "CHANGE_BLUE_VELOCITY" : {
            return {
                ...state,
                blueVelocity: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
    
}

export default colorReducer;