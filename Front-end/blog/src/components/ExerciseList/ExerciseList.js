import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToMyRoutine } from 'components/store/actions';
import Styles from "styles/ExerciseSelect.module.css";
import LogoButton from "../../components/LogoButton/LogoButton";
import Subtitle from "../../components/Subtitle/Subtitle";

import { Link } from "react-router-dom";

const ExerciseList = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  const handleAddToMyRoutine = (exercise) => {
    dispatch(addToMyRoutine(exercise));
  };

  return (

    <div className={Styles.Frame}>
      <LogoButton text="PostureFlow" />
      <Subtitle
        Subtitle="Make your own Routine"
        SubtitleDescription="자신만의 운동루틴을 만들어보세요."
      />
      <Link to="/MyRoutine" className={Styles.txtd}>
        <button className={Styles.GoToMyRoutineBtn}>{"내 루틴"}</button>
      </Link>

      <div className={Styles.SelectContentFrame}>
        <div className={Styles.SelectContentRowFrame}>
          {exercises.slice(0,3).map((exercise) => (
            <div className={Styles.SelectContentBox}>
              <img className={Styles.SelectContentIMG} src={exercise.url} alt="" />
              <button className={Styles.ExerciseSelectName}>
                {exercise.name}
              </button>
              <button className={Styles.ExerciseSelectAdd}
                onClick={() => handleAddToMyRoutine(exercise)}>+ 담기</button>
            </div>
          ))}
        </div>
        <div className={Styles.SelectContentRowFrame}>
          {exercises.slice(3).map((exercise) => (
            <div className={Styles.SelectContentBox}>
              <img className={Styles.SelectContentIMG} src={exercise.url} alt="" />
              <button className={Styles.ExerciseSelectName}>
                {exercise.name}
              </button>
              <button className={Styles.ExerciseSelectAdd}
                onClick={() => handleAddToMyRoutine(exercise)}>+ 담기</button>
            </div>
          ))}
        </div>
      </div>
      </div>


      );
  };

      export default ExerciseList;