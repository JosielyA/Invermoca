import React from "react";
import logo from "../assets/images/logo.png";
import azul from "../assets/images/azul.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <section
        className="flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${azul})` }}
      >
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
      <div className="">
        <BsInstagram className="" />
        <BsTwitter className="" />
      </div>
    </div>
  );
}

export default Footer;
