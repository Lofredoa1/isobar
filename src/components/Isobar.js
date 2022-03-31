import '../App.css'
import React, { useEffect } from "react";

const Isobar = (props) => {

    useEffect(() => {
        let canvas = document.getElementById("canvas")
        const { width, height } = canvas.getBoundingClientRect();
        let ctx = canvas.getContext("2d");
        var grd = ctx.createLinearGradient(0, 175, 0, 5);
        
        // Add colors to gradient
        for (let i = 0; i < props.colorTable.length; i++) {
            grd.addColorStop(props.colorTable[i][0]/100, 
                `rgb(${props.colorTable[i][1]}, ${props.colorTable[i][2]}, ${props.colorTable[i][3]})`)
        };
        
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 400, height);
    }, [props.colorTable])


    return (
        <div className="main">
            <canvas id="canvas" ></canvas>
            <div className="isobar">
                <p>{props.highLabel}</p>
                <p>{props.titleLabel}</p>
                <p>{props.lowLabel}</p>
            </div> 
        </div>
    )
};

export default Isobar 