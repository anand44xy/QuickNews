import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-2">About QuickNews</h5>
            <p>QuickNews is your go-to platform for the latest news headlines from around the world. Developed and maintained by <a  className='text-info' href="https://anand44xy.github.io/My-Portfolio/">Anand Saini.</a></p>
          </div>

          {/* Contact & Social Icons */}
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <div className="text-center">
              <p className="mb-2">Connect with me:</p>
              <a href="https://github.com/anand44xy" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/anand44xy" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-1">&copy; {new Date().getFullYear()} QuickNews. All rights reserved.</p>
            <small className="text-muted">Developed by Anand Saini | GitHub: <a href="https://github.com/anand44xy" className="text-info"></a> | LinkedIn: <a href="https://www.linkedin.com/in/anand44xy" className="text-info"></a></small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
