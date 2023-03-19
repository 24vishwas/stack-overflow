const currentUserReducer = (stata = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            return action.payload;
        default:
            return stata;
    }
}
export default currentUserReducer;