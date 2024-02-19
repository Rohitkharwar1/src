import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import html2canvas from "html2canvas";

const MultiStepForm = ({ formData, setFormData }) => {
  const [step, setStep] = useState(1);
  const [isInternship, setIsInternship] = useState(false);
  const [salaryInputFields, setSalaryInputFields] = useState(1);

  const [resInputFields, setResInputFields] = useState(1);
  const [qualInputFields, setQualInputFields] = useState(1);
  const [benifitsInputFields, setBenifitsInputFields] = useState(1);
  const [l, setL] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
    if (setL !== 0) {
      setL(0);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    if (setL !== 0) {
      setL(0);
    }
  };

  const handleCheckboxChange = () => {
    setIsInternship(!isInternship);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChangeOnArray = (index, event) => {
    const { name, value } = event.target;
    let newArray = formData[name] ? [...formData[name]] : [];
    newArray[index] = value;
    setFormData({ ...formData, [name]: newArray });
    setL(event.target.value.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // handle form submission
  };

  const addSalaryMoreFields = () => {
    setSalaryInputFields(resInputFields + 1);
    setL(0);
  };
  const addMoreFields = () => {
    setResInputFields(resInputFields + 1);
    setL(0);
  };

  // const addResMoreFields = () => {
  //   setResInputFields(resInputFields + 1);
  //   setL(0);
  // };

  const addMoreQualFields = () => {
    setQualInputFields(qualInputFields + 1);
    setL(0);
  };

  const addMoreBenifitsFields = () => {
    setBenifitsInputFields(benifitsInputFields + 1);
    setL(0);
  };
  const downloadPosterAsImage = () => {
    const poster = document.querySelector(".poster");
    html2canvas(poster).then((canvas) => {
      const imgURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgURL;
      link.download = "poster.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Form className="p-5 " onSubmit={handleSubmit} style={{ width: "50%" }}>
      <ProgressBar now={(step / 5) * 100} />
      {step === 1 && (
        <Form.Group className="" controlId="formStep1">
          <Form.Label className="w-100 text-left pt-2">
            Position Name
          </Form.Label>

          <Form.Control
            type="text"
            name="jobTitle"
            value={formData.jobTitle || ""}
            onChange={handleInputChange}
            className=" my-3"
          />
          <Form.Label className="w-100 text-left pt-2">
            Full/Part-Time
          </Form.Label>
          <Form.Control
            type="text"
            name="jobType"
            value={formData.jobType || ""}
            onChange={handleInputChange}
            className=" my-3"
          />

          <Form.Check
            type="checkbox"
            label="Is this an internship?"
            checked={isInternship}
            onChange={handleCheckboxChange}
            className=" my-3"
          />

          {isInternship && (
            <Form.Control
              type="text"
              name="internshipDuration"
              value={formData.internshipDuration || ""}
              onChange={handleInputChange}
              className=" my-3"
            />
          )}
        </Form.Group>
      )}

      {step === 2 && (
        <div>
          <Form.Group controlId="formStep2">
            {Array.from({ length: salaryInputFields }).map((_, index) => (
              <Form.Group key={index}>
                <Form.Label>Salary {}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="salary"
                  value={formData.salary ? formData.salary[index] : ""}
                  onChange={(e) => handleInputChangeOnArray(index, e)}
                  className=" my-2"
                />
              </Form.Group>
            ))}
          </Form.Group>
          {l > 6 ? (
            <Button
              className="py-2 text-white btn-warning"
              onClick={addSalaryMoreFields}
            >
              Add More
            </Button>
          ) : null}
        </div>
      )}
      {step === 3 && (
        <div>
          <Form.Group controlId="formStep3">
            {Array.from({ length: resInputFields }).map((_, index) => (
              <Form.Group key={index}>
                <Form.Label>Responsibility {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name="responsibilities"
                  value={
                    formData.responsibilities
                      ? formData.responsibilities[index]
                      : ""
                  }
                  onChange={(e) => handleInputChangeOnArray(index, e)}
                  className=" my-2"
                />
              </Form.Group>
            ))}
          </Form.Group>
          {l > 6 ? (
            <Button
              className="py-2 text-white btn-warning"
              onClick={addMoreFields}
            >
              Add More
            </Button>
          ) : null}
        </div>
      )}

      {step === 4 && (
        <div>
          <Form.Group controlId="formStep4">
            {Array.from({ length: qualInputFields }).map((_, index) => (
              <Form.Group key={index}>
                <Form.Label>Qualification {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name="qualifications"
                  value={
                    formData.qualifications
                      ? formData.qualifications[index]
                      : ""
                  }
                  onChange={(e) => handleInputChangeOnArray(index, e)}
                />
              </Form.Group>
            ))}
          </Form.Group>
          {l > 6 ? (
            <Button className="btn-warning p-2 m-3" onClick={addMoreQualFields}>
              Add More
            </Button>
          ) : null}
        </div>
      )}

      {step === 5 && (
        <div>
          <Form.Group controlId="formStep5">
            {Array.from({ length: benifitsInputFields }).map((_, index) => (
              <Form.Group key={index}>
                <Form.Label>Benifits {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name="benifits"
                  value={formData.benifits ? formData.benifits[index] : ""}
                  onChange={(e) => handleInputChangeOnArray(index, e)}
                />
              </Form.Group>
            ))}
          </Form.Group>
          {l > 6 ? (
            <Button
              className="btn-warning py-2 m-3"
              onClick={addMoreBenifitsFields}
            >
              Add More
            </Button>
          ) : null}
        </div>
      )}

      <div className="d-flex justify-content-between py-2">
        {step > 1 && (
          <Button variant="secondary " onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 5 ? (
          <Button
            className="btn btn-outline-success text-white py-2"
            variant="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </div>
      <button
        className="p-2 bg-success text-white px-4 border-0 rounded-pill"
        onClick={downloadPosterAsImage}
      >
        Download Poster
      </button>
    </Form>
  );
};

export default MultiStepForm;
