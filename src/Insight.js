import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Insight() {
    return (
        <div>
            Welcome to Insight
            <Link className="link" to="/insight">Go to first insight</Link>
        </div>
    )
}

export default Insight;