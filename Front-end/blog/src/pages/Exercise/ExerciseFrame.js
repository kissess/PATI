import Styles from "./../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ExerciseInfo from "../../components/ExerciseInfo/ExerciseInfo.js"
import axios from "axios";


import { getFirestore, serverTimestamp, ref, uploadString, getDownloadURL } from 'firebase/storage';


import { getAuth, signInWithPopup } from 'firebase/auth';

// import ExerciseContentFrame from "./ExerciseContentFrame";
// import ExerciseStartBtn from "./ExerciseStartBtn";
import { Link } from "react-router-dom";


import Webcam from "react-webcam";
import React, { useRef, useState } from 'react';
// import axios from 'axios';

/// test
import { firebaseInstance } from 'firebase-config';

// var user = authService.currentUser;
// var provider = new firebaseInstance.auth.GoogleAuthProvider();
// var db = firebaseInstance.storage();


/// test



function ExerciseFrame() {
    const webcamRef = useRef(null);
    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        try {
            // 서버 업로드 엔드포인트에 이미지 전송
            await axios.post('/upload', { image: imageSrc });
            console.log('Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    return (
        <div className={Styles.Frame}>
            <LogoButton text="PostureFlow" />
            <section>
                <Subtitle
                    Subtitle="START!"
                    SubtitleDescription="운동을 시작하세요!"
                />
                <section>
                    <div>
                        <div className={Styles.ExerciseContentFrame}>
                            <div className={Styles.RealcamFrame}>
                                <div className={Styles.RealcamSpace}>
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                    />
                                </div>
                            </div>
                            <div className={Styles.ExerciseRoutineFrame}>
                                <div className={Styles.ExerciseRoutine}>
                                    <ExerciseInfo
                                        ExerciseCategory="카테고리"
                                        ExerciseName="운동명"
                                    />
                                </div>
                                <div className={Styles.ExerciseRoutine}>
                                    <ExerciseInfo
                                        ExerciseCategory="카테고리"
                                        ExerciseName="운동명"
                                    />
                                </div>
                                <div className={Styles.ExerciseRoutine}>
                                    <ExerciseInfo
                                        ExerciseCategory="카테고리"
                                        ExerciseName="운동명"
                                    />
                                </div>
                                <div className={Styles.ExerciseRoutine}>
                                    <ExerciseInfo
                                        ExerciseCategory="카테고리"
                                        ExerciseName="운동명"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={Styles.ExerciseStartBtnBox}>
                    <Link to="/Exercise/Result" className={Styles.txtd}>
                        <button onClick={capture} className={Styles.ExerciseStartBtn}>운동 시작</button>
                    </Link>

                </div>

            </section>
        </div>
    )
}

export default ExerciseFrame;