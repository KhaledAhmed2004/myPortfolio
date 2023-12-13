import { useRef } from "react";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaLinkedin } from "react-icons/fa";
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2cyio7g",
        "template_8dql5oc",
        form.current,
        "SxdwSk86UnEdRmFda"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully toasted!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="Contact_me" className="py-3">
      <h2 className="my-8 text-3xl font-semibold text-center underline underline-offset-8">
        Contact me
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1  px-5 md:px-16">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <p>
            Have something to say? I am here to help. Fill up the form or send
            email or you can call.
          </p>
          <p className="flex items-center gap-2">
            <FiMapPin className="text-2xl" /> Feni, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineEmail className="text-2xl" />
            khaledahmednayeem2004@gmail.com
          </p>
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/khaled-ahmed-nayeem-96596826a/"
          >
            <FaLinkedin className="text-2xl" />
            Khaled Ahmed Nayeem
          </a>
        </div>
        <form className="flex-1 px-5" ref={form} onSubmit={sendEmail}>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="user name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="user email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full mt-4"
            placeholder="message..."
          ></textarea>
          <input
            className="bg-[#048970] text-white font-semibold py-2 px-6 rounded-lg"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
