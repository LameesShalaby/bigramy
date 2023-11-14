import logo from "../../assets/images/logo.svg";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <a href="">
                <img src={logo} />
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              Join our <br /> Newsetter
            </div>
            <div className="col-lg-5 col-md-6">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="email"
                  placeholder="What your are Looking for?"
                  aria-label="Email"
                />
                <button className="btn btn-success" type="submit">
                  Subscrible
                </button>
              </form>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesett
                ing industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>Follow us on</p>
              <div className="social-icons">
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul>
                <li className="nav-link">News</li>
                <li className="nav-link">Tournaments</li>
                <li className="nav-link">Courses</li>
                <li className="nav-link">E-Books</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul>
                <li className="nav-link">Privacy policies</li>
                <li className="nav-link">Terms &amp; Conditions</li>
                <li className="nav-link">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="copy-right">
        <p>2023 LOGO. All Rights Reserved.</p>
      </section>
    </>
  );
};

export default Footer;
