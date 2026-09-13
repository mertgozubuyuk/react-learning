import { useState } from "react";

import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Courses from "./Courses";
import "./css/Courses.css";

function App() {
  return (
    <div>
      <Header />
      <div className="courses-container">
        {courses?.map((course) => (
          <Courses key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
