import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import logo from "../assets/images/logo.png";
import azul from "../assets/images/azul.jpeg";

import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiMercadopago } from "react-icons/si";
import { IoClose } from "react-icons/io5";

import { useFormik } from "formik";
import toast from "react-hot-toast";

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = "Requerido";
  } else if (values.nombre.length > 15) {
    errors.nombre = "Debe ser de 15 caracteres o menos.";
  }
  if (!values.telefono) {
    errors.telefono = "Requerido";
  } else if (!isValidPhoneNumber(values.telefono)) {
    errors.telefono = "Número de telefono inválido.";
  }
  if (!values.mensaje) {
    errors.mensaje = "Requerido";
  }
  if (values.apellido.length > 15) {
    errors.apellido = "Debe ser de 15 caracteres o menos.";
  }

  if (!values.correo) {
    errors.correo = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = "Correo electronico invalido.";
  }

  return errors;
};

function isValidPhoneNumber(phoneNumber) {
  const regex = /0[1-9]{3}[-\s]\d{7}|0[1-9]{3}\d{7}/;
  return regex.test(phoneNumber);
}

function Footer() {
  const [loading, setLoading] = useState(false);
  const formulario = useRef();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      mensaje: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      toast.promise(
        emailjs
          .sendForm("service_u7qpjj9", "template_bmo4nsq", values, {
            publicKey: "RGekvYqfLQqQrBBiq",
          })
          .then(
            () => {
              resetForm();
              setLoading(false);
            },
            (error) => {
              console.log(error);
              setLoading(false);
              throw new Error(error);
            },
          ),
        {
          loading: "Loading",
          success: "Mensaje enviado correctamente.",
          error: "No se ha podido enviar tu mensaje.",
        },
      );
    },
  });

  return (
    <div>
      <section className="bg-automotriz flex flex-col place-content-center items-center text-white">
        <div
          id="footer"
          className="lg:flex lg:place-content-around lg:items-center"
        >
          <div className=" flex flex-col items-center lg:w-1/2 lg:p-14">
            <div className="w-96  p-5 pt-8">
              <img src={logo} />
            </div>
            <div className="fles place-content-center items-center px-5 text-center lg:text-start">
              <h2 className="mb-2 text-5xl font-bold lg:text-5xl">
                ¿Necesitas <span className="text-myred">ayuda</span>?
              </h2>
              <h2 className="text-lg">
                Contáctanos para recibir asesoramiento personalizado.
              </h2>
            </div>
            <div className="flex w-10/12 flex-col gap-1 py-5">
              <div className="footerItem">
                <IoLocationSharp className="size-10 text-myred" />
                <span className="w-10/12">
                  Delicias al lado del C.C Paseo 72, av.15, Maracaibo 4001,
                  Zulia J978+QFG, Maracaibo 4001, Zulia, Venezuela
                </span>
              </div>
              <div className="footerItem">
                <BiSolidPhoneCall className="size-10 text-myred" />
                <span className="w-10/12">0424-6729349</span>
              </div>
              <div className="footerItem">
                <IoIosMail className="size-10 text-myred" />
                <span className="w-10/12">invermocar@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex place-content-center lg:w-3/6">
            <form
              ref={formulario}
              onSubmit={formik.handleSubmit}
              className="flex w-10/12 flex-col place-content-center gap-2 pt-0 text-black md:w-full md:p-5 lg:gap-5"
            >
              <div className="flex flex-col gap-2 lg:gap-5">
                <input
                  id="nombre"
                  name="nombre"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                  className="footerInput"
                  type="text"
                  placeholder="Nombre"
                />
                {formik.errors.nombre ? (
                  <div className="valid">{formik.errors.nombre}</div>
                ) : null}

                <input
                  id="apellido"
                  name="apellido"
                  onChange={formik.handleChange}
                  value={formik.values.apellido}
                  className="footerInput"
                  type="text"
                  placeholder="Apellido"
                />
                {formik.errors.apellido ? (
                  <div className="valid">{formik.errors.apellido}</div>
                ) : null}
              </div>
              <div className="flex gap-2 lg:gap-5">
                <div className="flex w-1/2 flex-col gap-2 lg:gap-5">
                  <input
                    id="telefono"
                    name="telefono"
                    onChange={formik.handleChange}
                    value={formik.values.telefono}
                    className="footerInput"
                    type="tel"
                    placeholder="Telefono"
                  />
                  {formik.errors.telefono ? (
                    <div className="valid">{formik.errors.telefono}</div>
                  ) : null}

                  <input
                    id="correo"
                    name="correo"
                    onChange={formik.handleChange}
                    value={formik.values.correo}
                    className="footerInput"
                    type="text"
                    placeholder="Correo"
                  />
                  {formik.errors.correo ? (
                    <div className="valid">{formik.errors.correo}</div>
                  ) : null}
                </div>
                <div className="w-1/2">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    onChange={formik.handleChange}
                    value={formik.values.mensaje}
                    className={`footerInput w-full resize-none ${formik.errors.mensaje || formik.errors.telefono || formik.errors.correo ? "h-[80%]" : "h-full"}`}
                    type="text"
                    placeholder="Mensaje"
                  />
                  {formik.errors.mensaje ? (
                    <div className="valid">{formik.errors.mensaje}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex place-content-between gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <a
                    href="https://www.instagram.com/invermoca/?hl=es-la"
                    target="_blank"
                  >
                    <BsInstagram className="size-8 text-myred sm:size-12" />
                  </a>
                  <a href="https://twitter.com/invermoca_MCBO" target="_blank">
                    <BsTwitter className="size-8 text-myred sm:size-12" />
                  </a>
                  <a
                    href="https://www.mercadolibre.com.ve/pagina/invermocamcbo?item_id=MLV756179721&category_id=MLV446395&seller_id=1034082447&client=recoview-selleritems&recos_listing=true"
                    target="_blank"
                  >
                    <SiMercadopago className="size-8 text-myred sm:size-14" />
                  </a>
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-myred px-10 py-2 text-2xl font-bold italic text-white disabled:bg-gray-400 sm:px-16 sm:py-4 md:text-3xl"
                    disabled={loading}
                  >
                    Enviar
                  </button>
                  <MdKeyboardArrowRight className="invisible absolute size-12 text-white sm:visible sm:static" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
