import PropTypes from "prop-types";
import { Footer, Navbar } from "../components/home";

const Global = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Global.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Global;
