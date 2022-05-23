import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import Logo from "../../image/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <div className="footer_image">
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <hr />
        </div>
        <div className="footer_info">
          <div className="footer_infoTerms">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer_infoSocialMidia">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
