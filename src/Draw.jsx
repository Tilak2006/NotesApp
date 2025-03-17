import "./Draw.css"
import React, { useRef, useState, useEffect } from "react";

const Draw = () => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth * 0.8; 
        canvas.height = 400;

        ctx.lineWidth = 3; 
        ctx.lineCap = "round"; 
        ctx.strokeStyle = "#ffffff";
    }, []);

    const startDrawing = (e) => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.beginPath(); 
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); 
        setDrawing(true);
      };

      const draw = (e) => {
        if (!drawing) return; 
        const ctx = canvasRef.current.getContext("2d");
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke(); 
      };

      const stopDrawing = () => {
        setDrawing(false); 
      };

      const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };

      const saveCanvas = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a"); 
        link.href = image;
        link.download = "drawing.png";
        link.click(); 
      };

      return (
        <div className="draw-container">
          <canvas
            ref={canvasRef}
            className="draw-canvas"
            onMouseDown={startDrawing} 
            onMouseMove={draw} 
            onMouseUp={stopDrawing} 
            onMouseLeave={stopDrawing} 
          />
          <div className="draw-buttons">
          <button onClick={clearCanvas} className="draw-btn">CLEAR</button>
            <button onClick={saveCanvas} className="draw-btn">SAVE</button>
          </div>
        </div>
      );
    };


export default Draw