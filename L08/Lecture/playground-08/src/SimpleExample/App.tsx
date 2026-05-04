import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

function ResizeInformer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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