import React from "react";
import backgroundImage from "../Assets/about_bg2.jpg";
import introbg from "../Assets/BloodBond_noBg.png";
import yashanki from "../Assets/yashanki.png";
import hetvi from "../Assets/hetvi.jpeg";
import vatsal from "../Assets/vatsal.jpeg";
import jash from "../Assets/jash.jpeg";
import shrushti from "../Assets/Shrushti.jpeg"

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl p-8 text-center">
        <h1 className="text-4xl md:text-6xl ubuntu-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl mb-8 ubuntu-regular">
          At BloodBond, our mission is to connect donors with those in need,
          fostering a community that saves lives through voluntary blood
          donations.
        </p>

        {/* Our Mission Section */}
        <div className="glass h-56 md:h-44 p-5 flex flex-col justify-center items-center mb-10">
          <h2 className="text-2xl md:text-4xl ubuntu-medium text-red-950 mb-3">
            Our Mission
          </h2>
          <p className="text-md md:text-lg ubuntu-regular">
            We are dedicated to spreading awareness about blood donation and
            encouraging people to be heroes in someone else's story. Every drop
            counts!
          </p>
        </div>

        {/* Our Team Section */}
        <h2 className="text-2xl md:text-4xl ubuntu-medium text-white mt-10">
          Our Team
        </h2>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-8 w-full mt-7">
          {/* member 1 starts here */}
          <div
            id="member1"
            className="h-80 w-60 bg-red-700 rounded-lg flex flex-col"
          >
            <div className="h-[60%] w-full bg-white rounded-tr-lg rounded-tl-lg flex justify-center items-center">
              <img
                src={yashanki}
                alt="Yashanki Zala"
                className="h-full w-auto rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div
              className="flex flex-col bg-[url('/src/Assets/heartbeat1.png')] bg-cover bg-center gap-2 mt-3 w-full h-[40%]"
            >
              <h3 className="text-2xl mt-4 ml-0 text-white ubuntu-medium">
                Yashanki Zala
              </h3>
              <div className="flex flex-row gap-4 text-2xl w-full justify-center">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* member 1 ends here */}

          {/* member 2 starts here */}
          <div
            id="member2"
            className="h-80 w-60 bg-red-700 rounded-lg flex flex-col"
          >
            <div className="h-[60%] w-full bg-white rounded-tr-lg rounded-tl-lg flex justify-center items-center">
              <img
                src={hetvi}
                alt="Hetvi Modi"
                className="h-full w-auto"
              />
            </div>
            <div
              className="flex flex-col bg-[url('/src/Assets/heartbeat1.png')] bg-cover bg-center gap-2 mt-3 w-full h-[40%]"
            >
              <h3 className="text-2xl mt-4 ml-0 text-white ubuntu-medium">
                Hetvi Modi
              </h3>
              <div className="flex flex-row gap-4 text-2xl w-full justify-center">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* member 2 ends here */}

          {/* member 3 starts here */}
          <div
            id="member3"
            className="h-80 w-60 bg-red-700 rounded-lg flex flex-col"
          >
            <div className="h-[60%] w-full bg-white rounded-tr-lg rounded-tl-lg flex justify-center items-center">
              <img
                src={vatsal}
                alt="Vatsal Koisa"
                className="h-full w-auto md:rounded-tl-lg md:rounded-tr-lg"
              />
            </div>
            <div
              className="flex flex-col bg-[url('/src/Assets/heartbeat1.png')] bg-cover bg-center gap-2 mt-3 w-full h-[40%]"
            >
              <h3 className="text-2xl mt-4 ml-0 text-white ubuntu-medium">
                Vatsal Koisa
              </h3>
              <div className="flex flex-row gap-4 text-2xl w-full justify-center">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* member 3 ends here */}

          {/* member 4 starts here */}
          <div
            id="member4"
            className="h-80 w-60 bg-red-700 rounded-lg flex flex-col"
          >
            <div className="h-[60%] w-full bg-white rounded-tr-lg rounded-tl-lg flex justify-center items-center">
              <img
                src={jash}
                alt="Jash Patel"
                className="h-full w-auto"
              />
            </div>
            <div
              className="flex flex-col bg-[url('/src/Assets/heartbeat1.png')] bg-cover bg-center gap-2 mt-3 w-full h-[40%]"
            >
              <h3 className="text-2xl mt-4 ml-0 text-white ubuntu-medium">
                Jash Patel
              </h3>
              <div className="flex flex-row gap-4 text-2xl w-full justify-center">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* member 4 ends here */}

          {/* member 5 starts here */}
          <div
            id="member4"
            className="h-80 w-60 bg-red-700 rounded-lg flex flex-col"
          >
            <div className="h-[60%] w-full bg-white rounded-tr-lg rounded-tl-lg flex justify-center items-center">
              <img
                src={shrushti}
                alt="Srushti Khonde"
                className="h-full w-auto"
              />
            </div>
            <div
              className="flex flex-col bg-[url('/src/Assets/heartbeat1.png')] bg-cover bg-center gap-2 mt-3 w-full h-[40%]"
            >
              <h3 className="text-2xl mt-4 ml-0 text-white ubuntu-medium">
                Srushti Khonde
              </h3>
              <div className="flex flex-row gap-4 text-2xl w-full justify-center">
              <a href=""><i class="fa-brands fa-github"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          {/* member 5 ends here */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
