import styles from "./Css/Template39.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template39 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false, // Animations only happen once
    });
  }, []);


  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div className={styles.dfgjhfgd}>
          <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <div
              className="mt-3 mb-5"
              dangerouslySetInnerHTML={{
                __html:
                  serviceResponse.data?.banner_description &&
                  serviceResponse.data.banner_description,
              }}
            />

            <div className={styles.vbddds}>
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            <div className={styles.dfdsf52dffsdfds1} data-aos="fade-right">
                  <img src="./images/visitingcard (1).png" alt=""/>
            </div>

            <div className={styles.dfdsf52dffsdfds2} data-aos="fade-right">
                  <img src="./images/visitingcard (4).png" alt=""/>
            </div>

            <div className={styles.dfdsf52dffsdfds3} data-aos="fade-left" >
                  <img src="./images/visitingcard (3).png" alt=""/>
            </div>

            <div className={styles.dfdsf52dffsdfds4} data-aos="fade-left">
                <img src="./images/visitingcard (2).png" alt=""/>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>
    <ServiceEnquiryForm loading={setLoading} slug={slug} />
        <div className={styles.sdvggsdcsd}>
          <div className="custom-container">
            <div className={styles.bjvbffbgf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.fdnvhjfdv}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.sdbghcsdcsd}>
                    <h2>
                      {serviceResponse.data?.third_section_title &&
                        serviceResponse.data.third_section_title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.third_section_description &&
                          serviceResponse.data.third_section_description,
                      }}
                    />
                    <button onClick={() => navigate("/contact-us")}>
                      Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div
          className={styles.vnhdfiuvhfdbfd}
          style={{ backgroundImage: "url(./images/d.png)" }}
        >
          <div className="custom-container">
            <div className={styles.fkuyfdfrdgf}>
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
                }}
              />
            </div>

            <div className={styles.fvbnjfdvfdgfd}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.fhvgfdfd}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.ujhfgfg}>
                          {serviceResponse.data?.fifth_section_image_one && (
                            <img
                              src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.fifth_section_image_one}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fdbvhjfyfdg}>
                          <h6>
                            {serviceResponse.data?.fifth_section_title_one &&
                              serviceResponse.data.fifth_section_title_one}
                          </h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fifth_section_description_one &&
                                serviceResponse.data
                                  .fifth_section_description_one,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.fhvgfdfd}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.ujhfgfg}>
                          {serviceResponse.data?.fifth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.fifth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fdbvhjfyfdg}>
                          <h6>
                            {serviceResponse.data?.fifth_section_title_two &&
                              serviceResponse.data.fifth_section_title_two}
                          </h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fifth_section_description_two &&
                                serviceResponse.data
                                  .fifth_section_description_two,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.vhfdhhgfdfdg}>
          <div className="custom-container">
            <div className={styles.fdghufgfdgf}>
              <h2>
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
                }}
              />
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
