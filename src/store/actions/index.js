export const changeRedVelocity = (redVelocity) => {
    return {
        type: "CHANGE_RED_VELOCITY",
        payload: redVelocity
    }
}

export const changeGreenVelocity = (greenVelocity) => {
    return {
        type: "CHANGE_GREEN_VELOCITY",
        payload: greenVelocity
    }
}

export const changeBlueVelocity = (blueVelocity) => {
    return {
        type: "CHANGE_BLUE_VELOCITY",
        payload: blueVelocity
    }
}