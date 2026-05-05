import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function ResizeInformer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /* 
  Wykonuje się co render, w fazie renderowania
  
  window.addEventListener("resize", () => {
        console.log("Window resized");
        setWindowWidth(window.innerWidth);
      });
  
  */

  /*   
  Wykonuje się co render ale po fazie renderowania
  
  useEffect(() => {
      window.addEventListener("resize", () => {
        console.log("Window resized");
        setWindowWidth(window.innerWidth);
      });
    }) */

  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Cleanup");
      window.removeEventListener("resize", handleResize);
    }
  }, []) // [] - efekt wykona się tylko raz, po pierwszym renderze

  return <Typography variant="h6">Current window width: {windowWidth}px</Typography>;
}


function SimpleApp() {
  const [showResizer, setShowResizer] = useState(true)

  return (
    <Container>
      {showResizer && <ResizeInformer />}
      <Button variant="contained" onClick={() => setShowResizer(prev => !prev)}>
        {showResizer ? "Hide" : "Show"} Resizer
      </Button>
    </Container>
  );
}

export default SimpleApp;