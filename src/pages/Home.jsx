import React, { useEffect, useState } from "react";
import logo from "../../public/img/big-logo.png";
import Bg from "../../public/img/bg.png";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { CSSTransition } from 'react-transition-group';

const Home = (prob) => {
  const [hire, setHire] = useState(false)
  const [seekeremail, setseekerEmail] = useState("")
  const [seekerskill, setseekerSkill] = useState("")  

  const [hiringemail, sethiringEmail] = useState("")
  const [hiringskill, sethiringSkill] = useState("")

  const [contactemail, setcontactEmail] = useState("")

  // const baseUrl = "https://engineer-nest-api.up.railway.app/api";
  const baseUrl = "http://localhost:8000/api"
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

  }, []);
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#startup') {
        // Trigger your event here
        setHire(true)
      }else{
        setHire(false)
      }
    };

    // Add event listener for hashchange
    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSeeking = async (seekeremail, seekerskill) => {
    let dataSend = {
      email: seekeremail,
      skill: seekerskill,
    };

    console.log(dataSend);

    const res = await fetch(`${baseUrl}/mailSeeker`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert(`Successfully sent to Engineernest!`);
        }
        setseekerEmail("");
        setseekerSkill("");
      });
  };

  const handleHiring = async (hiringemail, hiringskill) => {
    let dataSend = {
      email: hiringemail,
      skill: hiringskill,
    };

    console.log(dataSend);

    const res = await fetch(`${baseUrl}/mailHiring`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert(`Successfully sent to Engineernest!`);
        }
        sethiringEmail("");
        sethiringSkill("");
      });
  };

  const handleContact = async (contactemail) => {
    let dataSend = {
      email: contactemail,
    };

    console.log(dataSend);

    const res = await fetch(`${baseUrl}/mailContact`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert(`Successfully sent to Engineernest!`);
        }
        setcontactEmail("");
      });
  };

  return (
    
    <div>

      <section
        id="home"
        className="p-2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex md:flex-row flex-col justify-center items-center gap-14 h-screen ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            className="w-full text-start xl:px-28 px-10"
          >
            <h1 className="text-white md:text-5xl text-4xl font-Mont1 font-semibold">
              <span>Connect. Collaborate.</span>
              <Typewriter
                
                options={{
                  strings: ["Diversify Your Portfolio"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="font-normal md:text-lg text-sm text-white my-7 tracking-wider">
              Empowering Engineers with Dynamic Opportunities. <br></br>Bridging
              Startups with Expertise.
            </p>
            <div className="flex gap-6 mt-3">
              <a href="#jobseeker">
                <button className="md:text-lg text-sm border border-gray-100 text-gray-100 px-7 py-2">
                  I’m a Jobseeker
                </button>
              </a>
              <a href="#jobseeker">
                <button className="md:text-lg text-sm border border-gray-100 text-gray-100 md:px-14 px-9 py-2">
                  I’m Hiring
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="section5" className="mt-12 text-center bg-white">
        <hr />
        <Marquee direction="right" speed={200}>
          <div className="flex content-center space-x-16 my-6">
            {/* <div className="image_wrapper">
              <img
                className="md:w-full md:h-18 h-20"
                src="../img/Postmates.png"
                alt=""
              />
            </div> */}
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-16 h-12"
                src="../img/aritable.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-14 h-10"
                src="../img/doordash.png"
                alt=""
              />
            </div>
            <div className="image_wrapper">
              <img
                className="md:w-full md:h-14 h-10"
                src="../img/nerdwallet.png"
                alt=""
              />
            </div>
          </div>
        </Marquee>
        <hr />
      </section>
      <section id="engineer" className="px-20 py-6 text-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="flex md:flex-row flex-col items-center">
            <img className="md:w-64 md:h-full" src={logo} />
            <div className="md:ml-20 ml-0 text-start">
              <h3 className="font-Mont1 font-bold tracking-wide text-4xl pt-10">
                ENGINEERNEST
              </h3>
              <div className="mt-6">
                <span className="text-blue-600 font-black">Mission</span>
                <p className="text-lg font-normal text-gray-600">
                  Empowering engineers to diversify their skillset and grow
                  their income, while providing startups the flexibility of
                  accessing top-tier talent on demand.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-blue-600 font-black">Vision</span>
                <p className="text-lg font-normal text-gray-600">
                  To be the world's leading platform where engineering prowess
                  meets startup innovation, fostering collaborative success and
                  personal growth.
                </p>
              </div>
            </div>
          </div>
          {/* <h1 className="text-4xl font-Mont1 font-bold mt-10 md:text-start text-center">Service</h1> */}
          <div className="flex md:justify-center py-8">
            <div className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M23.1688 24.0813C23.0235 23.936 22.851 23.8208 22.6612 23.7421C22.4714 23.6635 22.268 23.623 22.0625 23.623C21.857 23.623 21.6536 23.6635 21.4638 23.7421C21.274 23.8208 21.1015 23.936 20.9562 24.0813C20.811 24.2265 20.6957 24.399 20.6171 24.5888C20.5385 24.7786 20.498 24.9821 20.498 25.1875C20.498 25.393 20.5385 25.5964 20.6171 25.7862C20.6957 25.976 20.811 26.1485 20.9562 26.2938L24.5406 29.875H12.6875C12.2731 29.875 11.8757 30.0396 11.5826 30.3327C11.2896 30.6257 11.125 31.0231 11.125 31.4375C11.125 31.8519 11.2896 32.2493 11.5826 32.5424C11.8757 32.8354 12.2731 33 12.6875 33H24.5406L20.9562 36.5813C20.811 36.7265 20.6957 36.899 20.6171 37.0888C20.5385 37.2786 20.498 37.4821 20.498 37.6875C20.498 37.893 20.5385 38.0964 20.6171 38.2862C20.6957 38.476 20.811 38.6485 20.9562 38.7938C21.1015 38.939 21.274 39.0543 21.4638 39.1329C21.6536 39.2115 21.857 39.252 22.0625 39.252C22.268 39.252 22.4714 39.2115 22.6612 39.1329C22.851 39.0543 23.0235 38.939 23.1688 38.7938L29.4188 32.5438C29.5643 32.3986 29.6797 32.2262 29.7585 32.0364C29.8372 31.8465 29.8778 31.643 29.8778 31.4375C29.8778 31.232 29.8372 31.0285 29.7585 30.8387C29.6797 30.6488 29.5643 30.4764 29.4188 30.3313L23.1688 24.0813ZM45.0438 26.2938C45.3371 26.0004 45.502 25.6024 45.502 25.1875C45.502 24.7726 45.3371 24.3747 45.0438 24.0813C44.7504 23.7879 44.3524 23.623 43.9375 23.623C43.5226 23.623 43.1246 23.7879 42.8312 24.0813L36.5812 30.3313C36.4357 30.4764 36.3203 30.6488 36.2415 30.8387C36.1628 31.0285 36.1222 31.232 36.1222 31.4375C36.1222 31.643 36.1628 31.8465 36.2415 32.0364C36.3203 32.2262 36.4357 32.3986 36.5812 32.5438L42.8312 38.7938C43.1246 39.0872 43.5226 39.252 43.9375 39.252C44.3524 39.252 44.7504 39.0872 45.0438 38.7938C45.3371 38.5004 45.502 38.1024 45.502 37.6875C45.502 37.2726 45.3371 36.8747 45.0438 36.5813L41.4594 33H53.3125C53.7269 33 54.1243 32.8354 54.4174 32.5424C54.7104 32.2493 54.875 31.8519 54.875 31.4375C54.875 31.0231 54.7104 30.6257 54.4174 30.3327C54.1243 30.0396 53.7269 29.875 53.3125 29.875H41.4594L45.0438 26.2938Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal md:text-lg text-sm text-gray-900">
                    Side-job matchmaking <br></br>for engineers
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M12.6875 17.375V29.875H21.4922L26.75 39.1063V50.1875H39.25V37.6875H29.5359L25.0906 29.875H25.1875V25.1875H40.8125V29.875H53.3125V17.375H40.8125V22.0625H25.1875V17.375H12.6875ZM15.8125 20.5H22.0625V26.75H15.8125V20.5ZM43.9375 20.5H50.1875V26.75H43.9375V20.5ZM30.5281 40.8125H36.125V47.0625H29.875V41.1844L30.5281 40.8125Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal md:text-lg text-sm text-gray-900">
                    Startups' project-based <br></br>hiring portal
                  </h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="65" height="65" rx="10" fill="#0055B0" />
                  <path
                    d="M37.792 53.2083C36.3337 53.625 34.667 53.8333 33.0003 53.8333C21.542 53.8333 12.167 44.4583 12.167 33C12.167 21.5416 21.542 12.1666 33.0003 12.1666C35.7087 12.1666 38.417 12.7916 40.917 13.625L37.5837 16.9583C36.1253 16.5416 34.667 16.3333 33.0003 16.3333C23.8337 16.3333 16.3337 23.8333 16.3337 33C16.3337 42.1666 23.8337 49.6666 33.0003 49.6666C33.8337 49.6666 34.8753 49.6666 35.7087 49.4583C36.1253 50.9166 36.9587 52.1666 37.792 53.2083ZM24.4587 29.0416L21.542 31.9583L30.917 41.3333L51.7503 20.5L48.8337 17.5833L30.917 35.5L24.4587 29.0416ZM45.5003 37.1666V43.4166H39.2503V47.5833H45.5003V53.8333H49.667V47.5833H55.917V43.4166H49.667V37.1666H45.5003Z"
                    fill="white"
                  />
                </svg>

                <div className="text-start">
                  <h1 className="font-normal md:text-lg text-sm text-gray-900">
                    Skill-to-project <br></br>alignment tools
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        data-aos="flip-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className="p-12 h-56"
        style={{
          backgroundImage: "url('../img/smallbg.png')",
          backgroundSize: "cover",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center md:text-4xl text-xl font-Mont1 font-semibold text-gray-100 md:mt-6 mx-12">
          “Bridging Engineers and Startups in a Symphony of Innovation.”
        </h1>
      </div>
    
      <hr className="mt-12" />
      {/* Im Jobseeker & Hiring form */}
      <CSSTransition
        in={hire}
        timeout={1000}
        classNames="slide"
        unmountOnExit
      >
        <section id="startup" className="mt-16">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex md:flex-row justify-between flex-col items-center ">
              

              <div className="w-full md:flex-row flex-col round-lg shadow-xl gap-5 shadow-gray-500 m-3 p-12">
                <div className=" ">
                  <h1 className="text-4xl font-bold font-Mont1 text-gray-900">
                    I'm a <span className="text-fontcol">Hiring</span>
                  </h1>
                  <h1 className="font-semibold font-Mont1 text-3xl text-gray-900 mt-6">
                    Engineer Your Startup's Success.
                  </h1>
                  <p className="font-normal text-gray-900 mt-3">
                    Connect with passionate engineers seeking transformative
                    projects. No long-term strings, just results
                  </p>
                  <div className="md:flex md:space-x-10 w-full mt-10 ">
                    <input
                      type="text"
                      className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm  block w-full p-2.5"
                      placeholder="Enter your email"
                      value={hiringemail}
                      onChange={(e) => sethiringEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm  block w-full p-2.5"
                      placeholder="Enter your Skill"
                      value={hiringskill}
                      onChange={(e) => sethiringSkill(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => handleHiring(hiringemail, hiringskill)}
                    disabled={!hiringemail || !hiringskill ? true : false}
                    // type="submit"
                    className="text-white font-Mont1 right-2.5 bottom-2 bg-fontcol text-lg px-4 py-2 mt-3"
                  >
                    Send Now
                  </button>
                </div>
                {/* <div className="">
                  <img src="../img/hirring.png" />
                </div> */}
              </div>
              <a

                className="p-6 hover:shadow-md m-6 flex flex-col justify-center"
                onClick={
                  () => {
                    setHire(false);
                  }
                }
              >
                <svg
                  width="39"
                  height="36"
                  viewBox="0 0 39 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.35494 1.35469C1.90189 0.807903 2.64362 0.500732 3.41702 0.500732C4.19042 0.500732 4.93215 0.807903 5.4791 1.35469L20.0624 15.938C20.6092 16.485 20.9164 17.2267 20.9164 18.0001C20.9164 18.7735 20.6092 19.5152 20.0624 20.0622L5.4791 34.6455C4.92901 35.1768 4.19226 35.4708 3.42752 35.4642C2.66278 35.4575 1.93124 35.1508 1.39047 34.61C0.849693 34.0692 0.542949 33.3377 0.536304 32.5729C0.529658 31.8082 0.823643 31.0714 1.35494 30.5214L13.8762 18.0001L1.35494 5.47886C0.808147 4.9319 0.500977 4.19017 0.500977 3.41678C0.500977 2.64338 0.808147 1.90165 1.35494 1.35469ZM18.8549 1.35469C19.4019 0.807903 20.1436 0.500732 20.917 0.500732C21.6904 0.500732 22.4321 0.807903 22.9791 1.35469L37.5624 15.938C38.1092 16.485 38.4164 17.2267 38.4164 18.0001C38.4164 18.7735 38.1092 19.5152 37.5624 20.0622L22.9791 34.6455C22.429 35.1768 21.6923 35.4708 20.9275 35.4642C20.1628 35.4575 19.4312 35.1508 18.8905 34.61C18.3497 34.0692 18.043 33.3377 18.0363 32.5729C18.0297 31.8082 18.3236 31.0714 18.8549 30.5214L31.3762 18.0001L18.8549 5.47886C18.3081 4.9319 18.001 4.19017 18.001 3.41678C18.001 2.64338 18.3081 1.90165 18.8549 1.35469Z"
                    fill="#0055B0"
                  />
                </svg>

                <p className="font-normal text-gray-900 mt-3">I’m a Jobseeker</p>
              </a>
            </div>
          </div>
        </section>
      </CSSTransition>
      :
      <CSSTransition
      
        in={!hire}
        timeout={100}
        classNames="slide"
        unmountOnExit
        
      >
        < section id="jobseeker" className="mt-12">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <div className="flex md:flex-row flex-col  items-center ">

              <a onClick={
                () => {
                  setHire(true);
                }
              } className="p-6 hover:shadow-md m-6">
                <svg
                  width="39"
                  height="36"
                  viewBox="0 0 39 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.6451 34.6453C37.0981 35.1921 36.3564 35.4993 35.583 35.4993C34.8096 35.4993 34.0679 35.1921 33.5209 34.6453L18.9376 20.062C18.3908 19.515 18.0836 18.7733 18.0836 17.9999C18.0836 17.2265 18.3908 16.4848 18.9376 15.9378L33.5209 1.35447C34.071 0.823177 34.8077 0.529194 35.5725 0.535839C36.3372 0.542484 37.0688 0.849228 37.6095 1.39C38.1503 1.93077 38.4571 2.66231 38.4637 3.42706C38.4703 4.1918 38.1764 4.92855 37.6451 5.47864L25.1238 17.9999L37.6451 30.5211C38.1919 31.0681 38.499 31.8098 38.499 32.5832C38.499 33.3566 38.1919 34.0984 37.6451 34.6453ZM20.1451 34.6453C19.5981 35.1921 18.8564 35.4993 18.083 35.4993C17.3096 35.4993 16.5679 35.1921 16.0209 34.6453L1.43756 20.062C0.89077 19.515 0.583603 18.7733 0.583603 17.9999C0.583603 17.2265 0.89077 16.4848 1.43756 15.9378L16.0209 1.35447C16.571 0.823177 17.3077 0.529194 18.0725 0.535839C18.8372 0.542484 19.5688 0.849228 20.1095 1.39C20.6503 1.93077 20.957 2.66231 20.9637 3.42706C20.9703 4.1918 20.6764 4.92855 20.1451 5.47864L7.62381 17.9999L20.1451 30.5211C20.6919 31.0681 20.999 31.8098 20.999 32.5832C20.999 33.3566 20.6919 34.0984 20.1451 34.6453Z"
                    fill="#0055B0"
                  />
                </svg>
                <p className="font-normal text-gray-900 mt-3">I'm Hiring</p>
              </a>
              <div className="w-full md:flex-row flex-col shadow-xl gap-5 shadow-gray-500 m-3 p-12">
                <div className=" ">
                  <h1 className="text-4xl font-bold font-Mont1 text-gray-900">
                    I'm a <span className="text-fontcol">Jobseeker</span>
                  </h1>
                  <h1 className="font-Mont1 font-semibold text-3xl text-gray-900 mt-6">
                    Unlock Diverse Engineering Opportunities
                  </h1>
                  <p className="font-normal text-gray-900 mt-3">
                    Expand your skillset. Collaborate with innovative startups. Elevate your engineering journey
                  </p>
                  <div className="md:flex md:space-x-10 w-full mt-10">
                    <input
                      type="text"
                      className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm block w-full p-2.5 "
                      placeholder="Enter your email"
                      value={seekeremail}
                      onChange={(e) => setseekerEmail(e.target.value)}
                    />
                    <input
                      type="text"
                      className="mb-6  outline outline-blue-600  bg-transparent text-gray-900 text-sm block w-full p-2.5  "
                      placeholder="Enter your Skill"
                      value={seekerskill}
                      onChange={(e) => setseekerSkill(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => handleSeeking(seekeremail, seekerskill)}
                    disabled={!seekeremail || !seekerskill ? true : false}
                    // type="submit"
                    className="text-white font-Mont1 right-2.5 bottom-2 bg-fontcol text-lg px-4 py-2 mt-3"
                  >
                    Send Now
                  </button>
                </div>
                {/* <div className="">
                  <img src="../img/jobseeker.png" />
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </CSSTransition>
      {/* End Im Hiring form */}
      {/* contact use Section */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        id="contactus"
        className="mb-10 text-center sm:px-12 pt-20 drop-shadow-2xl"
      >
        
        <div className="flex md:flex-row flex-col mt-8">
          <div className="bg-white md:w-8/12 w-full p-10">
            <div className="flex flex-col items-start">
              <h3 className="font-Mont1 font-bold md:text-4xl text-3xl">
                Contact Us
              </h3>
              <p className="py-4 md:text-lg text-sm font-normal text-gray-600 text-start">
                Beyond Projects: Connect with EngineerNest.
              </p>
              <div className="py-1 md:flex md:justify-center grid grid-rows-2 grid-flow-col gap-3">
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>  
              <div className="md:flex justify-between w-full mt-3">
                <input
                  type="text"
                  className="mb-6 bg-white border border-black outline-none text-gray-900 text-sm block w-full p-2.5"
                  placeholder="Enter your email"
                  value={contactemail}
                  onChange={(e) => setcontactEmail(e.target.value)}
                />
                <button
                  onClick={() => handleContact(contactemail)}
                  disabled={!contactemail ? true : false}
                  // type="submit"
                  className="mb-6 bg-white border border-black outline-none text-gray-900 text-sm font-bold block md:w-1/5 w-auto p-1 px-4 text-xs"
                  >
                  Send Now
                </button>
              </div>
              
            </div>
          </div>
          <div className="bg-fontcol md:w-4/12 w-full flex flex-col gap-y-10 p-6">
            <div className="flex flex-col items-center">
              <svg
                width="31"
                height="42"
                viewBox="0 0 31 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 19.9582C14.1186 19.9582 12.7939 19.4094 11.8171 18.4327C10.8404 17.4559 10.2916 16.1312 10.2916 14.7498C10.2916 13.3685 10.8404 12.0437 11.8171 11.067C12.7939 10.0902 14.1186 9.5415 15.5 9.5415C16.8813 9.5415 18.2061 10.0902 19.1828 11.067C20.1596 12.0437 20.7083 13.3685 20.7083 14.7498C20.7083 15.4338 20.5736 16.1111 20.3118 16.743C20.0501 17.3749 19.6664 17.949 19.1828 18.4327C18.6992 18.9163 18.125 19.3 17.4931 19.5617C16.8612 19.8235 16.1839 19.9582 15.5 19.9582ZM15.5 0.166504C11.6322 0.166504 7.92289 1.70296 5.18799 4.43786C2.45308 7.17277 0.916626 10.8821 0.916626 14.7498C0.916626 25.6873 15.5 41.8332 15.5 41.8332C15.5 41.8332 30.0833 25.6873 30.0833 14.7498C30.0833 10.8821 28.5468 7.17277 25.8119 4.43786C23.077 1.70296 19.3677 0.166504 15.5 0.166504Z"
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-Mont1 font-bold text-white text-xl p-1">Address</h3>
              <p className="font-normal text-gray-100">
                Kompong Spue, Cambodia
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="39"
                height="38"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29167 16.4792C11.2917 22.375 16.125 27.1875 22.0208 30.2083L26.6042 25.625C27.1667 25.0625 28 24.875 28.7292 25.125C31.0625 25.8958 33.5833 26.3125 36.1667 26.3125C37.3125 26.3125 38.25 27.25 38.25 28.3958V35.6667C38.25 36.8125 37.3125 37.75 36.1667 37.75C16.6042 37.75 0.75 21.8958 0.75 2.33333C0.75 1.1875 1.6875 0.25 2.83333 0.25H10.125C11.2708 0.25 12.2083 1.1875 12.2083 2.33333C12.2083 4.9375 12.625 7.4375 13.3958 9.77083C13.625 10.5 13.4583 11.3125 12.875 11.8958L8.29167 16.4792Z"
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-Mont1 font-bold text-white text-xl p-1">Phone</h3>
              <p className="font-normal text-gray-100">+885 77 354 857</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="43"
                height="34"
                viewBox="0 0 43 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.1666 0.333496H4.83329C2.54163 0.333496 0.687459 2.2085 0.687459 4.50016L0.666626 29.5002C0.666626 31.7918 2.54163 33.6668 4.83329 33.6668H38.1666C40.4583 33.6668 42.3333 31.7918 42.3333 29.5002V4.50016C42.3333 2.2085 40.4583 0.333496 38.1666 0.333496ZM38.1666 8.66683L21.5 19.0835L4.83329 8.66683V4.50016L21.5 14.9168L38.1666 4.50016V8.66683Z"
                  fill="#F1F1F1"
                />
              </svg>

              <h3 className="font-Mont1 font-bold text-white text-xl p-1">Email</h3>
              <p className="font-normal text-gray-100">
                engineernest2023@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End contact use Section */}
    </div>
  );
};

export default Home;
