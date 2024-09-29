// import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A well-structured workout session is the foundation of any fitness journey.
         In our top workout sessions, we focus on maximizing both strength and endurance while ensuring proper form and safety.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our featured bootcamps are designed to deliver high-intensity,
         full-body workouts that challenge your limits and transform your fitness level.
        </p>
        <div className="bootcamps">
          <div>
            <h4>These programs focus on progressive overload.</h4>
            <p>
            Our strength training programs are carefully curated to help you build muscle,
             enhance power, and improve overall body strength.
            </p>
          </div>
          <div>
            <h4>For those looking for a personalized approach.</h4>
            <p>
            For those looking for a personalized approach, 
            our one-on-one personal training sessions are tailored to your specific fitness goals. 
            </p>
          </div>
          <div>
            <h4>HIIT Classes.</h4>
            <p>
            High-Intensity Interval Training (HIIT) is a time-efficient and powerful workout designed to torch calories and boost cardiovascular health!
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Classes.</h4>
            <p>
            Our yoga and flexibility classes are designed to improve your mobility, reduce stress, and enhance overall body awareness.
            </p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
