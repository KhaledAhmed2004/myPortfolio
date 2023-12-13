const AboutMe = () => {
  return (
    <div id="about_me">
      <h2 className="my-8 text-3xl font-semibold text-center underline underline-offset-8">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-5">
          <h2 className="text-2xl font-semibold">I am,</h2>
          <h2 className="text-4xl font-bold">Khaled Ahmed Nayeem.</h2>
          <p className="text-lg">
            Front-End Developer with expertise in React.js, Next.js, Node.js,
            Express.js, and MongoDB. From turning design concepts into
            interactive interfaces to optimizing website performance, I thrive
            on bringing ideas to life in the digital realm.🚀
          </p>
        </div>
        <ul className="timeline timeline-vertical flex-1">
          <li>
            <div className="timeline-start font-semibold">2018</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[#048970] text-white font-semibold">
              JSC
            </div>
            <hr className="bg-[#048970]" />
          </li>
          <li>
            <hr className="bg-[#048970]" />
            <div className="timeline-start font-semibold">2021</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[#048970] text-white font-semibold">
              SSC
            </div>
            <hr className="bg-[#048970]" />
          </li>
          <li>
            <hr className="bg-[#048970]" />
            <div className="timeline-start font-semibold">2021</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-[#048970] text-white font-semibold">
              Diploma in CST running
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
