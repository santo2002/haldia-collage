import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Homepage/Home';

//import Swiper core and required modules;
//import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

//import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper styles;



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import AddCollage from './dashboardComponent/AddCollage';
import AddBanner from './dashboardComponent/AddBanner';
import AddFeature from './dashboardComponent/AddFeature';
import AddAbouts from './dashboardComponent/AddAbout';
import AddOverView from './dashboardComponent/AddOverView';
import AddWhyChooseUs from './dashboardComponent/AddWhyChooseUs';
import AddTestimonial from './dashboardComponent/AddTestimonial';
import AddReward from './dashboardComponent/AddReward';
import AddCourse from './dashboardComponent/AddCourse';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Collagespage from './pages/Collagespage/Collagespage';
import Coursepage from './pages/Coursepage/Coursepage';
import Contact from './pages/Contact/Contact';
import Admissionpage from './pages/Admissionpage/Admissionpage';
import Academicpage from './pages/Academicpage/Academicpage';
//import Register from './Authentication/Register';
import RequireAuth from './Authentication/RequireAuth';
//import Login from './Authentication/Login';
import BannerDetails from './dashboardComponent/BannerDetails';
import AddVision from './dashboardComponent/AddVision';
import FeatureDetails from './pages/Detailspages/FeatureDetails';
import CourseDetails from './pages/Detailspages/CourseDetails';
import CollageCourseDetail from './pages/Detailspages/CollageCourseDetail';

import CollageDetails from './pages/Detailspages/CollageDetails';
import TestimonialDetail from './pages/Detailspages/TestimonialDetail';
import AddMissionAbout from './dashboardComponent/AddMissionAbout';
import AddPGPROGRAMMES from './dashboardComponent/AddPGPROGRAMMES';
import AddFINANCIALAIDS from './dashboardComponent/AddFINANCIALAIDS';
import AddUGPROGRAMMES from './dashboardComponent/AddUGPROGRAMMES';
import PgDetail from './pages/Detailspages/PgDetail';
import UgDetail from './pages/Detailspages/UgDetail';
import FinanDetail from './pages/Detailspages/FinanDetail';
import LoginN from './Authentication/LoginN';
import SendPasswordReset from './Authentication/SendPasswordReset';
import ContactForm from './dashboardComponent/ContactForm';
import NewsLetter from './dashboardComponent/NewsLetter';
import AddInnerBanner from './dashboardComponent/AddInnerBanner';
import CollageDetailpage from './pages/CollageDetailpage/CollageDetailpage';
import CollageDetailAbout from './dashboardComponent/CollageDetailAbout';
import AddCollageDetailsMore from './dashboardComponent/AddCollageDetailsMore';
import AddTeam from './dashboardComponent/AddTeam';
import AddCollageCourse from './dashboardComponent/AddCollageCourse';
import Donate from './dashboardComponent/Donate';
import Career from './components/Career';
import Tenders from './components/Tenders';
import CentralToolRoom from './components/CentralToolRoom';
import Resume from './dashboardComponent/Resume';
import AddTender from './dashboardComponent/AddTender';
import AddToolRoom from './dashboardComponent/AddToolRoom';
import CoursePageDetail from './pages/Detailspages/CoursePageDetail';
import AddCourseDetail from './dashboardComponent/AddCourseDetail';
import DetailsCourseEdit from './pages/Detailspages/DetailsCourseEdit';
import ScrollTopAuto from './components/ScrollTopAuto';
import ScrollToTop from 'react-scroll-to-top';


function App() {
  return (
    <>
      <div className="page-wrapper ">
        <ScrollTopAuto />
        <ScrollToTop smooth />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requireauth" element={< RequireAuth />} />

          <Route path="add-collage" element={<AddCollage />} />
          <Route path="add-collage/:collage" element={<CollageDetails />} />
          <Route path="add-banner" element={<AddBanner />} />
          <Route path="add-banner/:banner" element={< BannerDetails />} />
          <Route path="add-feature" element={<AddFeature />} />
          <Route path="add-feature/:feature" element={<FeatureDetails />} />
          <Route path="add-about" element={<AddAbouts />} />
          <Route path="add-overview" element={<AddOverView />} />
          <Route path="add-chooseus" element={<AddWhyChooseUs />} />
          <Route path="add-testimonial" element={<AddTestimonial />} />
          <Route path="add-testimonial/:testimonial" element={<TestimonialDetail />} />
          <Route path="add-feature" element={<AddFeature />} />
          <Route path="add-certificate" element={<AddReward />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="add-course/:course" element={<CourseDetails />} />
          <Route path="add-vision-mision" element={<AddVision />} />
          <Route path="add-vision-page" element={<AddMissionAbout />} />
          <Route path="add-pg-programes" element={<AddPGPROGRAMMES />} />
          <Route path="add-pg-programes/:pg" element={<PgDetail />} />
          <Route path="add-financial-programes" element={<AddFINANCIALAIDS />} />
          <Route path="add-financial-programes/:finan" element={<FinanDetail />} />
          <Route path="add-ug-programes" element={<AddUGPROGRAMMES />} />
          <Route path="add-ug-programes/:ug" element={<UgDetail />} />
          <Route path="contact-form" element={<ContactForm />} />
          <Route path="donate" element={<Donate />} />
          <Route path="resume" element={<Resume />} />
          <Route path="tender" element={<AddTender />} />
          <Route path="toolRoom" element={<AddToolRoom />} />
          <Route path="details-course" element={<AddCourseDetail />} />
          <Route path="details-course/:id" element={<DetailsCourseEdit />} />



          <Route path="news-letter" element={<NewsLetter />} />
          <Route path="add-inner-banner" element={<AddInnerBanner />} />
          <Route path="collage-detail-about" element={<CollageDetailAbout />} />
          <Route path="read-more" element={< AddCollageDetailsMore />} />
          <Route path="add-team" element={< AddTeam />} />
          <Route path="add-collage-course" element={< AddCollageCourse />} />
          <Route path="add-collage-course/:course" element={< CollageCourseDetail />} />


          <Route path="/about" element={<Aboutpage />} />
          <Route path="/collages" element={<Collagespage />} />
          <Route path="/collages/:id" element={<CollageDetailpage />} />
          <Route path="/courses" element={<Coursepage />} />
          <Route path="/course-details/:title" element={<CoursePageDetail />} />


          <Route path="/admission" element={<Admissionpage />} />
          <Route path="/academics" element={<Academicpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/centralToolRoom" element={<CentralToolRoom />} />

          <Route path="/login" element={<LoginN />} />
          <Route path="/forget-password" element={<SendPasswordReset />} />
          {/* <Route path="/register" element={<Register />} /> */}




        </Routes>



      </div >



    </>
  );
}

export default App;
