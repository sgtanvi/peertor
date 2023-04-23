import React from "react";

function MeetingsPage() {
    return(
        <div>
            <header className="big-board">
                <h1>Meetings</h1>
            </header>

            <div className="meeting-card">
                <div className="photo"></div>
                <div className="details">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Location</p>
                </div>
            </div>
            <div className="meeting-card">
                <div className="photo"></div>
                <div className="details">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Location</p>
                </div>
            </div>
        </div>
    );
}

export default MeetingsPage;