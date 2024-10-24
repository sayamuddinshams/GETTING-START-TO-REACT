import React from "react";
import { Link } from "react-router-dom";
import worker1 from "../Assets/Workers/worker1.jpg";
import worker2 from "../Assets/Workers/worker2.jpg";
import worker3 from "../Assets/Workers/worker3.jpg";
import work from "../Assets/Work/work1.jpg";
import work2 from "../Assets/Work/work2.jpg";
import work3 from "../Assets/Work/work3.jpg";

const OurWorkAndWorkers = () => {
  return (
    <div id="work&workers" className="bg-gray-800 text-white p-8">
      {/* Our Workers Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Workers</h2>
        <p className="max-w-xl mx-auto text-xl mb-8">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: worker1, alt: "Worker 1" },
            { src: worker2, alt: "Worker 2" },
            { src: worker3, alt: "Worker 3" },
          ].map((worker, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 group"
            >
              <img
                src={worker.src}
                alt={worker.alt}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  to="/Blog section" // Link to the /workandworker route
                  className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Works Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Our Works</h2>
        <p className="max-w-xl mx-auto text-xl mb-8">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: work, alt: "Work 1" },
            { src: work2, alt: "Work 2" },
            { src: work3, alt: "Work 3" },
          ].map((workItem, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 group"
            >
              <img
                src={workItem.src}
                alt={workItem.alt}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                  to="/Blog section" // Link to the /workandworker route
                  className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurWorkAndWorkers;
