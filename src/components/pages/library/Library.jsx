import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";
import "./Library.css";
import Sponsors from "./components/Sponsors";
import Course from "./components/CourseCarousel";
import axios from "axios";
import img1 from '../../../assets/images/logo_text.png'
import img2 from '../../../assets/images/comming_soon.png'
import img3 from '../../../assets/images/wings.png'
import img4 from '../../../assets/images/water_splash.png'
import commingUpImage from '../../../assets/images/comming_up.png'
import commingSoonImage from '../../../assets/images/comming_soon.png'
// import 'base64'

const Library = () => {
  const [showModal, setShowModal] = useState(false);
  // const [udemyCourses, setUdemyCourses] = useState([]);

  // const client_id_secret = `${process.env.REACT_APP_UDEMY_CLIENT_ID}:${process.env.REACT_APP_UDEMY_CLIENT_SECRET_ID}`;
  // const base64Encoded = base64.encode(client_id_secret);
  // const endpoints = {
  //   courses: "/courses/",
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_UDEMY_BASE_URL}${endpoints.courses}`, {
  //       'Authorization': `Basic ${base64Encoded}`
  //     })
  //     .then((res) => console.log(res.results));
  // });

  return (
    <div className="relative overflow-x-hidden">
      {/* <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              src={img1}
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src={img2}
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src={img3}
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <Sponsors />
      <div className="flex justify-center items-center">
        <img className="w-auto h-auto" src={commingUpImage} alt="comming up soon"/>
        <img className="w-auto h-auto" src={commingSoonImage} alt="comming soon"/>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-60">
        <button
          className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>

        {showModal && <Modal setOpenModal={setShowModal} />}
      </div> */}



      {/* <Courses /> */}
      {/* <Course title="Udemy Free Courses" courses={udemyCourses} /> */}
      {/* <Course title="Trending" courses={trending} />
      <Course title="Abhishek Sir Courses" courses={nowPlaying} />
      <Course title="Popular" courses={popular} />
      <Course title="Top Rated" courses={topRated} />
      <Course title="Upcoming" courses={upcoming} /> */}
    </div>
  );
};

export default Library;
