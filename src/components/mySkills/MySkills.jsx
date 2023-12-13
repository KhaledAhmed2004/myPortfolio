const MySkills = () => {
  return (
    <div id="skills" className="my-8 text-center space-y-8">
      <h2 className="my-8 text-3xl font-semibold text-center underline underline-offset-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mx-auto">
        <div
          className="radial-progress text-[#048970]"
          style={{ "--value": 50 }}
          role="progressbar"
        >
          <span>HTML</span>50%
        </div>
        <div
          className="radial-progress text-[#048970]"
          style={{ "--value": 50 }}
          role="progressbar"
        >
          <span>CSS</span>50%
        </div>
        <div
          className="radial-progress text-[#048970]"
          style={{ "--value": 45 }}
          role="progressbar"
        >
          <span className="text-center">Js</span>45%
        </div>
        <div
          className="radial-progress text-[#048970]"
          style={{ "--value": 70 }}
          role="progressbar"
        >
          <span>React</span>70%
        </div>
        <div
          className="radial-progress text-[#048970] text-center"
          style={{ "--value": 55 }}
          role="progressbar"
        >
          <span className="pr-4">MongoDb</span>55%
        </div>
        <div
          className="radial-progress text-[#048970] text-center"
          style={{ "--value": 40 }}
          role="progressbar"
        >
          <span>nodeJs</span>40%
        </div>
        <div
          className="radial-progress text-[#048970] text-center"
          style={{ "--value": 60 }}
          role="progressbar"
        >
          <span className="pr-4">Express.js</span>60%
        </div>
        <div
          className="radial-progress text-[#048970] text-center"
          style={{ "--value": 75 }}
          role="progressbar"
        >
          <span className="pr-4">Tailwind</span>75%
        </div>
      </div>
    </div>
  );
};

export default MySkills;
