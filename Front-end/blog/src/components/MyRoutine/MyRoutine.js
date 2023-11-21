import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from 'components/store/actions';
import Styles from "../../styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import MyRoutineBtn from "pages/MyRoutine/MyRoutineBtn";
import CorrectBtn from "../../pages/MyRoutine/CorrectBtn.js"
import { Link } from "react-router-dom";

const MyRoutine = () => {
  const dispatch = useDispatch();
  const myRoutine = useSelector((state) => state.myRoutine);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (

    <div className={Styles.Frame}>
      <LogoButton text="PostureFlow" />
      <section>
        <Subtitle
          Subtitle="My Routine"
          SubtitleDescription="내가 만든 루틴을 확인하세요."
        />
        <section>
          <div>
            <div className={Styles.MyRoutineContentFrame}>
              {myRoutine.map((item) => (
                <div className={Styles.MyRoutineContentBox} draggable="true">
                  
                  <div className={Styles.MyRoutineContentBoxHalf}>
                    <div className={Styles.MyRoutineInfo}>
                      <div className={Styles.ExerciseCategory}>
                        {item.cat}
                      </div>
                      <div className={Styles.ExerciseName}>
                        {item.name}
                      </div>
                    </div>
                  </div>

                  <div className={Styles.CntBoxGroup}>
                    <button onClick={() => handleDecrement(item.id)} className={Styles.MinusBox}>-</button>
                    <div className={Styles.NumBox}>{item.quantity}</div>
                    <button onClick={() => handleIncrement(item.id)} className={Styles.PlusBox}>+</button>
                  </div>
                  
                  <CorrectBtn />

                  <div>
                    <img className={Styles.DeleteIcon} src="https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2Ficons%2FDeleteIcon.png?alt=media&token=a1480d4a-f9e1-4afe-bdde-d86a68aab523" alt="" />
                  </div>
                  <div>
                    <img className={Styles.MoveIcon} src="https://firebasestorage.googleapis.com/v0/b/postureflow-hallym.appspot.com/o/images%2Ficons%2FMoveIcon.png?alt=media&token=c051e700-9df4-4b0a-97a3-c9a94f5cee7e" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
        <div className={Styles.MyRoutineBtnGroup}>
          <div>
            <MyRoutineBtn text="돌아가기" />
          </div>
          <div className={Styles.MyRoutineBtnBox}>
            <Link to="/Exercise" className={Styles.txtd}>
              <MyRoutineBtn text="시작하기" />
            </Link>

          </div>
        </div>
      </section>
    </div>

  );
};

export default MyRoutine;