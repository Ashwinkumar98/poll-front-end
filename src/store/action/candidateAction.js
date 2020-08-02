import * as actionCreator from './actionType';
import axios from 'axios';

const uri='http://localhost:8081/user';

const setCandidate=(data,action)=>{
    return{
        type:action,
        data:data
    }
}

export const fetchCandidate=()=>{
    return(dispatch)=>{
        axios.get(uri).then(Response=>{
            if(Response.status===200){
                dispatch(setCandidate(Response.data,actionCreator.FETCH_USER));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

const updateUser=(userId,action)=>{
    return{
        type:action,
        id:userId
    }
}

export const voteUser=(userId,voterId)=>{
    return(dispatch)=>{
        axios.post(uri+'/'+userId+'/vote/'+voterId).then(Response=>{
            if(Response.status===200){
                dispatch(updateUser(voterId,actionCreator.VOTE_USER));
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}

