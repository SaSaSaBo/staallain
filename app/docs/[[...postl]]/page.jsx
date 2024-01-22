import React from "react";

export default function Postl({params}) {
    return (
        <section id="menu" style={{backgroundColor: "black", width: "98vw", height: "6vh", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "1vh" }}>
        <div id="logo" style={{color: "white", fontFamily: "monospace", fontSize: "3vh", letterSpacing : "1vh"}}>YOU CHOOSE: {params.postl}</div>
      </section>
    );
}