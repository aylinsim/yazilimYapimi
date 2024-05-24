
import React from 'react';
import { Outlet } from "react-router-dom";
cd /path/to/your/react-project
git init
node_modules
build
.env
git add .


function Layout() {
    return (
        <>
            <header>
                <h1 className="header-title"> WORD MEMORIZATION GAME </h1>
                <div>
                    <div className="navbar">
                        <button onClick={() => {window.location.href="/quiz"}} className="navbar-button"> quiz </button>
                        <button onClick={() => {window.location.href="/stats"}} className="navbar-button"> stats </button>
                        <button onClick={() => {window.location.href="/create-question"}} className="navbar-button"> add question </button>
                    </div>
                </div>

            </header>
            
            <Outlet />
        </>
    );
}

export default Layout;
