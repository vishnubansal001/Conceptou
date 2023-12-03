import { Route, Routes } from "react-router-dom";
import {
  Landing,
  Blogs,
  Contact,
  Services,
  About,
  Series,
  SingleBlog,
} from "../pages/index.js";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/contact-us" element={<Contact />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/blog-series/:id" element={<Series />} />
      <Route exact path="/blog/:id" element={<SingleBlog />} />
    </Routes>
  );
};

export default Router;
