import React, { useRef, useEffect } from "react";
import useCanvas from "../hooks/useCanvas";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      {...rest}
      style={{ margin: "100px" }}
      width="500px"
      height="500px"
    />
  );
};

export default Canvas;
