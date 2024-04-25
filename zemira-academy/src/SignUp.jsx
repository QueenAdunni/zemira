import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const togglePasswordVisibility = (field) => {
    setFormData({
      ...formData,
      [field]: !formData[field],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    // Add more validations as needed...

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Add your form submission logic here
    }
  };

  return (
    <div>
      <Header />

      <div className="container-fluid bg-secondary p-5 text-light">
      <form onSubmit={handleSubmit} className="signup">

        <div className="my-3">
          <label>First Name:</label><br />
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        </div>
        
        <div className="my-3">
          <label>Last Name:</label><br />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          
        </div>

        <div className="my-3">
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="my-3">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
        </div>

        <div className="my-3">
          <label>
            Password:
            <div className="password-input">
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("showPassword")}
              >
                <FontAwesomeIcon
                  icon={formData.showPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
          </label>
        </div>

        <div className="my-3">
          <label>
            Confirm Password:
            <div className="password-input">
              <input
                type={formData.showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("showConfirmPassword")}
              >
                <FontAwesomeIcon
                  icon={formData.showConfirmPassword ? faEyeSlash : faEye}
                />
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </label>
        </div>

        <div className="my-3">
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;

