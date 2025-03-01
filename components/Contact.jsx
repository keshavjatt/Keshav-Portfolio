import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import DOMPurify from "dompurify";
import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xqaerlaz"); // Formspree Form ID
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been sent successfully!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm({ ...form, [name]: sanitizedValue });
  };

  // Handle Form Submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("All fields are required!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    await handleSubmit(e);
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      <form ref={formRef} onSubmit={onSubmit} className="mt-8 flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your good name?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">Your Message</span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What do you want to say?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>

        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;