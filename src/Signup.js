import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import Modal from "./components/Modal";
import { useModal } from "./hooks/useModal";
import "./components/Modal.css";

export default function Signup() {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      text: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Debe ingresar 20 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Dirección de correo invalida")
        .required("Requerido"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Requerido"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Formulario</h1>
      <div className="input-container">
        <h3>Nombre</h3>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre completo"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      <div className="input-container">
        <h3>Email</h3>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <div className="input-container">
        <h3>Contraseña</h3>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="contraseña"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}
      <div className="input-container">
        <h3>Texto</h3>
        <input
          id="text"
          name="text"
          type="text"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.text}
          onBlur={formik.handleBlur}
        />
      </div>
      <button type="submit" onClick={openModal}>
        Submit
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        {JSON.stringify([formik.values])}
      </Modal>
    </form>
  );
}
