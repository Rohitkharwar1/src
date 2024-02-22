import TwoColumns from "./layouts/TwoColumns";
import { useState } from "react";
import "./App.css";
import MultiStepForm from "./modules/Multipart";

import logo from "../src/assets/fbsLogo.png";
// import { Search } from "lucide-react";

function App() {
  const [formData, setFormData] = useState({});
  function formatSalary(salary) {
    const annualSalary = salary * 12;
    if (annualSalary < 100000) {
      return `${(annualSalary / 1000).toFixed(1)}k`;
    } else {
      return `${(annualSalary / 100000).toFixed(1)} LPA`;
    }
  }

  return (
    <div className="App w-screen">
      <TwoColumns>
        <MultiStepForm formData={formData} setFormData={setFormData} />
        {/* <div>
					<div>{formData.jobTitle}</div>
					<div>{formData.jobType}</div>
					<div>
						{formData.internshipDuration ? (
							<div>
								Internship Duration: {formData.internshipDuration}
								Letter of Experience will be given after completion of
								Internship.
							</div>
						) : null}
					</div>
					<div>
						{formData.responsibilities?.map((responsibility, index) => (
							<div key={index}>{responsibility}</div>
						))}
					</div>
					<div>
						{formData.qualifications?.map((responsibility, index) => (
							<div key={index}>{responsibility}</div>
						))}
					</div>
				</div> */}
        <div className="posterContainer ">
          <div className="poster  position-relative w-screen">
            {/* <img src={logo} alt="firstBitSolutions" className="logoImage" /> */}
            {/* <div className="position-relative w-50 col-md-1 text-center">
                <h1 className="text-center position-absolute top-0 left-50 ">
                  We
                </h1>
                <h1 className="mainHeading "> Are Hiring</h1>
              </div> */}
            <div className="  py-5 pb-3 position-relative  d-flex flex-row align-items-center justify-content-center gap-3 w-screen ">
              {/* <img
                src="/image/banner.jpeg"
                alt="404"
                width={"100%"}
                height={200}
              /> */}
              <p
                className=""
                style={{
                  fontSize: "5rem",
                  fontWeight: "bold",
                  position: "absolute",
                  top: 0,
                  left: "20%",
                }}
              >
                We{" "}
              </p>
              <p
                style={{ fontSize: "5rem", fontWeight: "bold", paddingTop: 20 }}
              >
                are Hiring
              </p>

              <img
                src={logo}
                alt="firstBitSolutions"
                style={{ position: "absolute", top: 10, right: 10 }}
                width={80}
                height={80}
              />
            </div>

            {/* <div className="positionContainer position-relative width-100 col-sm-8">
              <div className=" position-absolute top-0  left-0">
                <img
                  src="/image/badge.png"
                  alt="sorry 404"
                  width={250}
                  height={"100%"}
                />
              </div>

              <h2 className="position position-absolute top-50 start-50 ">
                {formData.jobTitle}
              </h2>

              <h3 className="subscript">{formData.jobType}</h3>
            </div> */}
            <div className="d-flex align-items-start justify-content-start w-screen pt-3">
              <img
                src="/image/color bg.png"
                alt="sorry 404"
                width={230}
                height={"100%"}
              />

              <div className=" ml-5 d-flex align-items-baseline justify-content-center flex-row  ">
                <h2
                  className=""
                  style={{
                    fontSize: "55px",
                    fontWeight: "bold",
                  }}
                >
                  {formData.jobTitle}
                </h2>
                <p className="ml-5 fs-4 ">{formData.jobType}</p>
              </div>

              {/* <sub
                className=""
                style={{
                  marginRight: 10,
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {formData.jobType}
              </sub> */}
              {/* <img
                src="/image/color bg1.png"
                alt="sorry 404"
                width={200}
                height={"100%"}
              /> */}
            </div>

            <div className="salaryContainer w-screen">
              <div
                className="d-flex flex-column align-items-center justify-content-center w-100"
                style={{ marginTop: "-40px" }}
              >
                {formData.salary?.map((salary, index) => (
                  <h2 key={index}>
                    {salary + "/-"} {`(${formatSalary(salary)})`}
                  </h2>
                ))}
                <h3 className="[WFO]">[WFO]</h3>
              </div>
            </div>
            <div className="font-weight-bolder">
              {formData.internshipDuration ? (
                <>
                  <p className="fs-2">
                    {`Internship Duration: ${formData.internshipDuration} \n`}
                  </p>
                  <p className="fs-4">
                    Letter of Experience will be given after completion of
                    Internship.
                  </p>
                </>
              ) : null}
            </div>
            {/* <div className="respContainer">
              <div className="respContainer-col">
                <div className=""></div>
                <h2 className="  px-3 py-2 bg-success text-white rounded-pill w-100 ">
                  Salary
                </h2>
              </div>
              <div className="respData">
                <ul>
                  {formData.salary?.map((salary, index) => (
                    <li key={index}>{salary}</li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="respContainer">
              <div className="respContainer-col">
                <div className=""></div>
                <h2
                  className="  px-4 py-3  text-black rounded-pill w-100 "
                  style={{ marginTop: "-15px", background: "#b0d40e" }}
                >
                  Responsibilities
                </h2>
              </div>
              <div className="respData">
                <ul>
                  {formData.responsibilities?.map((responsibility, index) => (
                    <li key={index} className="text-left">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="respContainer">
              <div className="respContainer-col">
                <div className=""></div>
                <h2
                  className="  px-4 py-3  text-black rounded-pill w-100"
                  style={{ marginTop: "-40px", background: "#b0d40e" }}
                >
                  Qualifications
                </h2>
              </div>
              <div className="respData">
                <ul>
                  {formData.qualifications?.map((qualification, index) => (
                    <li key={index} className="text-left">
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="respContainer">
              <div className="respContainer-col">
                <div className=""></div>
                <h2
                  className="px-4 py-3  text-black rounded-pill w-100"
                  style={{ marginTop: "-40px", background: "#b0d40e" }}
                >
                  Benifits
                </h2>
              </div>
              <div className="respData">
                <ul>
                  {formData.benifits?.map((benifits, index) => (
                    <li key={index} className="text-left ">
                      {benifits}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="respContainer">
							<div className="respContainer-col">
								<div className="positionMotif"></div>
								<h2 className="salary">Benefits</h2>
							</div>
							<div className="respData">
								<ul>
									<li>lorem ipsum dolor sit amet</li>
									<li>lorem ipsum dolor sit amet</li>
									<li>lorem ipsum dolor sit amet</li>
									<li>lorem ipsum dolor sit amet</li>
								</ul>
							</div>
						</div> */}
            {/* <div className=" fixed-bottom  ">
              <img
                src="/image/footer.png"
                alt="404"
                width={300}
                height={"100%"}
                style={{ float: "right" }}
              />

              
            </div> */}
            <img
              src="/image/new badge.png"
              alt="404"
              width={75}
              height={"10%"}
              style={{ right: 20 }}
              className="position-absolute right-0 bottom-0  "
            />
            <footer className="position-absolute left-0 bottom-0 text-center fs-2 w-100 font-weight-bolder ">
              firstbit.recruitment@gmail.com
            </footer>
          </div>
        </div>
      </TwoColumns>
    </div>
  );
}

export default App;
