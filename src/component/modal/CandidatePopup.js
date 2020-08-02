import React from 'react';
import './CandidatePopup.css';

const CandidatePopup=React.memo(props=>{

    const id=React.createRef(0);

    if(props.isOpen===false)
        return null;

    const voteUser=()=>{
        props.vote(id.current.value,props.data.userId);
        props.click();
    }
    

    return(
        <div className="modal">
            <div className="card">
                <table >
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>problems Solved</th>
                            <th>User Ratings</th>
                            <th>No of votes</th>
                        </tr>
                        <tr>
                            <td>{props.data.userName}</td>
                            <td>{props.data.problemSolved}</td>
                            <td>{props.data.expertistLevel}</td>
                            <td>{props.data.noOfVotes}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <div>
                        <input ref={id} type="number" placeholder="Your Id to vote"/>
                        <button onClick={()=>voteUser()}>Vote</button>
                    </div>
                    <button onClick={()=>props.click()}>close</button>
                </div>
            </div>
        </div>
    )
});

export default CandidatePopup;