import { useState } from "react";
// import React {useState} from 'react'
import "./App.css";
import Headernav from "./components/navbar";
import ButtonDetails from "./components/button";
import OurPoduct from "./components/card";
import busman from "./assets/business-3d-waving-goodbye-man-1-close-up 1.png";
import mic from "./assets/Mask Group.png";
import goog from "./assets/Mask Group (1).png";
import ama from "./assets/Mask Group (2).png";
import chelimg from "./assets/Photo.png";
import web from "./assets/Frame.png";
import design from "./assets/Dashboard.png";
import seo from "./assets/Frame (1).png";
import security from "./assets/Frame (2).png";
import procesImg from "./assets/Photo (1).png";
import img1card from "./assets/Rectangle 6.png";
import img2card from "./assets/Rectangle 8.png";
import img3card from "./assets/Rectangle 7.png";
let data = [
  {
    img: img1card,
    name: "PT. ABCDE",
    job: "Web Development",
    id: 2,
    status: true,
  },
  {
    img: img2card,
    name: "Rose Wood",
    job: "SEO",
    id: 2,
    status: true,
  },
  {
    img: img3card,
    name: "CoSpace",
    job: "Presentation Template",
    id: 3,
    status: true,
  },
];
const App = () => {
  let [newdata, setData] = useState(data);
  let [addimg, setImg] = useState("");
  let [addname, setName] = useState("");
  let [addJob, setJob] = useState("");
  let [addStatus, setStatus] = useState("true");

  // deleteUser
  function deleteUser(id) {
    newdata = newdata.filter((el) => el.id != id);
    setData(newdata);
  }

  // chekUser
  function checkUser(elem) {
    newdata = newdata.map((el) => {
      if (elem.id == el.id) {
        return {
          ...el,
          status: !el.status,
        };
      }
      return el;
    });
    setData(newdata);
  }
  function add() {
    let newUser = {
      img: addimg,
      name: addname,
      job: addJob,
      status: addStatus == "true" ? true : false,
      id: Date.now(),
    };
    setData([...newdata, newUser]);
    setImg("")
    setName("")
    setJob("")
    setStatus("true")
  }
  return (
    <div>
      <header>
        <Headernav />
        <section className="headSec">
          <aside className="headLeft">
            <h1>Go digital with us</h1>
            <p>
              We have designed hundreds of websites and helped improve their
              online performance through SEO, SEM and Social Media Marketing
            </p>
            <ButtonDetails text="See Portofolio" bg="white" />
          </aside>
          <aside className="headRight">
            <img src={busman} alt="" />
          </aside>
        </section>
      </header>
      <main>
        <section className="experience">
          <div className="expText">
            <h2>We are experienced</h2>
            <p>
              We have been around for a long time since 2010, thousands of
              products have been created, we are always here to provide new
              innovations for you
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </section>
        <section className="clients">
          <h2>Client</h2>
          <p className="gray">
            Using Our Experience To Make Your Digital Experience Brighter
          </p>
          <div className="company">
            <img src={mic} alt="" />
            <img src={goog} alt="" />
            <img src={ama} alt="" />
          </div>
        </section>
        <section className="challenge">
          <div className="leftChelenge">
            <img src={chelimg} alt="" />
          </div>
          <div className="rightChelenge">
            <div className="text">
              <p className="gray">Who We Help</p>
              <h1>Specific challenges require specific solutions</h1>
              <p className="gray">
                Some of the industries our digital agency specialises in
              </p>
            </div>
            <div className="allsolution">
              <div className="solution1">
                <div className="soltext">
                  <img src={web} alt="" />
                  <h4>Web & Mobile Apps</h4>
                </div>
                <p className="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="solution1">
                <div className="soltext">
                  <img src={design} alt="" />
                  <h4>Design Services</h4>
                </div>
                <p className="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="allsolution">
              <div className="solution1">
                <div className="soltext">
                  <img src={seo} alt="" />
                  <h4>SEO</h4>
                </div>
                <p className="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="solution1">
                <div className="soltext">
                  <img src={security} alt="" />
                  <h4>Security Tester</h4>
                </div>
                <p className="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="workProcess">
          <div className="leftProc">
            <h1>How does our process work?</h1>
            <p className="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ButtonDetails text="See Details" bg="#14213D" color="white" />
          </div>
          <img src={procesImg} alt="" className="rightproc" />
        </section>
        <section className="arrowing">
          <div className="leftarrow">
            <p className="gray">Our Product</p>
            <h2>We’ll let our work speak for itself</h2>
            <p className="gray">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          <div className="rightarrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </section>
        <section className="ourProduct">
          <div className="inp">
            <input
              type="text"
              placeholder="img"
              value={addimg}
              onChange={(e) => setImg(e.target.value)}
            />
            <input
              type="text"
              placeholder="addname"
              value={addname}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="addJob"
              value={addJob}
              onChange={(e) => setJob(e.target.value)}
            />
            <select
              name=""
              id=""
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <button onClick={() => add()} className="addbtn">
              Add
            </button>
          </div>
          {newdata.map((el) => {
            return (
              <OurPoduct
                el={el}
                funcCheck={checkUser}
                funcDelete={deleteUser}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default App;
