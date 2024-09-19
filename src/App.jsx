// import "./App.css";
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";


// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// function App() {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, dirty } = useFormik({
//     initialValues: initialValues,
//     validationSchema: signUpSchema,
//     onSubmit: (values, action) => {
//       console.log(values);
//       action.resetForm();
//     },

//   });

//   return (
//     <>
//       <div>
//         <h1>Welcome!</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.name && touched.name ? <p>{errors.name}</p> : null}
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               placeholder="Email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && touched.email ? <p>{errors.email}</p> : null}
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.password && touched.password ? <p>{errors.password}</p> : null}
//           </div>
//           <div>
//             <label htmlFor="confirm_password">Confirm Password</label>
//             <input
//               type="password"
//               name="confirm_password"
//               id="confirm_password"
//               placeholder="Confirm Password"
//               value={values.confirm_password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
//           </div>
//           <div>
           
//             <button type="submit" disabled={!(dirty && isValid)}>Sign Up</button>
//           </div>
//         </form>
//         <img src="https://img.freepik.com/premium-photo/purple-desk-with-laptop-glasses-pen_1082794-23847.jpg?w=1060" alt="" style={{width:600 , height: 400}}/>
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, dirty } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Welcome!</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-input ${errors.name && touched.name ? 'error' : ''}`}
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? <p className="error-message">{errors.name}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p className="error-message">{errors.email}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`form-input ${errors.password && touched.password ? 'error' : ''}`}
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : null}
            </div>

            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                className={`form-input ${errors.confirm_password && touched.confirm_password ? 'error' : ''}`}
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? <p className="error-message">{errors.confirm_password}</p> : null}
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn" disabled={!(dirty && isValid)}>
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="image-container">
          <img
            src="https://img.freepik.com/premium-photo/purple-desk-with-laptop-glasses-pen_1082794-23847.jpg?w=1060"
            alt="Purple Desk"
            className="responsive-image"
          />
        </div>
      </div>
    </>
  );
}

export default App;

