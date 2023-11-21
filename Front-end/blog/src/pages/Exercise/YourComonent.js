import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const YourComponent = () => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);

  const startCapture = () => {
    setCapturing(true);
    // 서버로 시작 신호를 보냄
    axios.get('http://localhost:5000/start_capture')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error starting capture', error);
      });
  };

  const stopCapture = () => {
    setCapturing(false);
    // 서버로 중지 신호를 보냄
    axios.post('http://localhost:5000/stop_capture')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error stopping capture', error);
      });
  };

  return (
    <div>
      {/* react-webcam 컴포넌트 */}
      {capturing && <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />}

      {/* 시작 버튼 */}
      <button onClick={startCapture} disabled={capturing}>
        Start Capture
      </button>

      {/* 중지 버튼 */}
      <button onClick={stopCapture} disabled={!capturing}>
        Stop Capture
      </button>
    </div>
  );
};

export default YourComponent;