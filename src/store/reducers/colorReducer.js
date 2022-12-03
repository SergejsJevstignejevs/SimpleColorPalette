const initialState = {
    redVelocity: 100,
    greenVelocity: 100,
    blueVelocity: 100,
    selectedColor: "#FFFFFF"
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
        case "CHANGE_SELECTED_COLOR" : {
            return {
                ...state,
                selectedColor: action.payload
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