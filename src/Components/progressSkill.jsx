/* eslint-disable react/prop-types */
import CircleProgress from "../Components/circularProgressbar";

const ProgressSkill = ({ progress }) => {
  return (
    <div className="bg-white flex-row justify-items-start mt-5 p-4 rounded-3xl mr-5 mx-5">
      <h5 className="flex font-extrabold text-[20px] text-center justify-center">
        {progress.technology}
      </h5>
      <div className="w-30 h-30 mt-2">
        <CircleProgress percentage={progress.percentage} />
      </div>
      <div className="flex flex-row mt-5 justify-center">
        <div className="flex flex-col mr-5">
          <h1 className="font-extrabold text-center text-blue">
            {progress.last_week}%
          </h1>
          <p className="font-bold">Last Week</p>
        </div>
        <div className="h-12 w-1 bg-true-black flex flex-row"></div>
        <div className="flex flex-col ml-5">
          <h1 className="font-extrabold text-center text-blue">
            {progress.last_month}%
          </h1>
          <p className="font-bold">Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSkill;