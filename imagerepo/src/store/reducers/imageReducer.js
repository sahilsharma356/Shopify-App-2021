
const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            console.log("created image", action.image)
            return state;

        case 'ADD_IMAGE_ERR':
            console.log("Error while adding image: ", action.err)
            return state;
            
        default:
            return state;
    }

}

export default imageReducer