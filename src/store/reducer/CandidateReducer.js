import * as actionCreator from '../action/actionType';
import produce from 'immer';

const initialState={
    candidates:[]
}

const updateData=(state,action)=>{
    const index  = state.candidates.findIndex(function(item,i){
        return item.userId===action.id
    });

    const updateArray = produce(state.candidates,draftState=>{
        draftState[index].noOfVotes=draftState[index].noOfVotes+1;
    });
    console.log(updateArray);
    return {...state,candidates:updateArray};
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionCreator.FETCH_USER : return {...state,candidates:action.data};
        case actionCreator.VOTE_USER : return updateData(state,action);
        default : return state;
    }
}

export default reducer;