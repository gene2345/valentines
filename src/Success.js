import React from "react";
import './App.css';

function SuccessOne() {
    const runSuccess = () => {
        return;
    }

    const runFailure = () => {
        return;
    }

    return (
        <div className="background">
            <h1 className="header-question">Will you be my valentine :DDD</h1>
            <a href = "/yay">
            <button className="yes" onclick = {runSuccess} >Yes</button>
            </a>
            <a href = "/failure">
            <button className="no" onclick = {runFailure} >No</button>
            </a>
        </div>
    )
}

export default SuccessOne;