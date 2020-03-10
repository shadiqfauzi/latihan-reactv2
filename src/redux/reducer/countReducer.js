const INITAL_STATE = {
    count: 0
}

export const countReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        case 'INCREMENT' : 
            return{
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}



