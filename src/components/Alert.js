import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Alert from "@mui/material/Alert";
import "./Alert.css"; // Assume this file contains the CSS for the animation

const Alerts = forwardRef((props, ref) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(null);

  useImperativeHandle(ref, () => ({
    show(mess) {
      setMessage(mess);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    },
  }));
  const show = () => {};
  if (showAlert) {
    return (
      <div
        className={`alert-container ${
          showAlert ? "fade-in-up" : "fade-out-up"
        }`}
      >
        <Alert severity="warning" onClose={() => setShowAlert(false)}>
          {message}
        </Alert>
      </div>
    );
  }
});

export default Alerts;
