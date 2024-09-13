import Logo from "../../assets/Logo.png";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Company info */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="logo" className="w-5" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p>Belgrade, Serbia </p>
            <p>@ 2024 Interior All rights reserved</p>
          </div>
          {/* Footer link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About Us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Craftsmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+381 11 123 456</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMessage />
                <a href="mailto:contact@interior.com">contact@interior.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
