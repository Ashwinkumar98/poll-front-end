import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import CandidatePopup from './modal/CandidatePopup'
import * as actionCreator from '../store/action/candidateAction';
import './CandidateList.css';

const CandidateList=React.memo(props=>{

    const {fetchUser}=props;
    const [toggle,setToggle] = useState(false);
    const [modalData,setModalData]=useState({});
    useEffect(()=>{
        fetchUser();
    },[fetchUser]);

    const openModal=(recipe)=>{
        setToggle(true);
        setModalData(recipe);
    }

    const closeModal=()=>{
        setToggle(false);
        setModalData({});
    }

    return(
        <div className="user_page">
            <div className="user_util">
            <div className="user_list">
                    <h3>Name</h3>
                    <h3>Votes</h3>
                   <h3>Rating</h3>
            </div>
            {
                props.user.map(user=>
                <div onClick={()=>openModal(user)} className="user_list" key={user.userId}>
                    <div>{user.userName}</div>
                    <div>{user.noOfVotes}</div>
                   <div>{user.expertistLevel}<span className="fa fa-star checked"></span></div>
                </div>)
            }</div>
            <CandidatePopup data={modalData} vote={props.voteUser} isOpen={toggle} click={closeModal}/>
        </div>
    );
});

const mapStateToProps=state=>{
    return{
        user:state.candidates
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchUser:()=>dispatch(actionCreator.fetchCandidate()),
        voteUser:(userid,voterId)=>dispatch(actionCreator.voteUser(userid,voterId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandidateList);