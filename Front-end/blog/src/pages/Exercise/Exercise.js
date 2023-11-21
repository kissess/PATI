import back from "../../styles/background.module.css";
// import ExerciseFrame from "./ExerciseFrame";
// import ExerciseFrame2 from "./ExerciseFrame2";

import YourComponent from "./YourComonent";

function Exercise() {
    return(
        <div className = {back.body}>
            <YourComponent />

        </div>
    
    );
}
  
export default Exercise;