import React from 'react';
import './DussehraFestival.css';

const DussehraFestival = () => {
  return (
    <div className="dussehra-festival">
      <header className="dussehra-header">
        <h1 className="fade-in">Happy Dussehra!</h1>
        <p className="fade-in">Celebrate the victory of good over evil.</p>
      </header>

      <section className="dussehra-content">
        <h2 className="slide-up">About Dussehra</h2>
        <p className="fade-in-up">
          Dussehra marks the triumph of Lord Rama over Ravana and symbolizes the victory of righteousness. The festival is celebrated with the burning of effigies, prayers, and grand processions.
        </p>
        <div className="image-gallery">
          <img src="https://images.unsplash.com/photo-1728754178092-43f15566fdb6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1727807794796-8e3660bde22a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1617875217021-2eff9ee9eef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8" />
        </div>
      </section>

      <footer className="dussehra-footer">
        <p className="fade-in">May the blessings of Dussehra bring peace and prosperity to your life!</p>
      </footer>
    </div>
  );
};

export default DussehraFestival;
