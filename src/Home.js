import React from "react";
import { Outlet } from "react-router-dom";
function Home() {
    return (
        <>
        <Outlet/>
        <div>Home</div>
        </>

    );
}

export default Home;