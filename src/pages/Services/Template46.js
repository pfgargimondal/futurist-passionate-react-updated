import styles from "./Css/Template46.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template46 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);

  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />} 
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd}>
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title &&
                  serviceResponse.data.banner_title}
              </h1>

              <p className="mt-3 mb-5">
                {serviceResponse.data?.banner_description &&
                  serviceResponse.data.banner_description}
              </p>

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
                  src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

                <div class={styles.dfdsf52d1}>
                 <div class={`${styles.box} ${styles.updown}`}>
                   <img src="./images/contentimg (2).png"/>
                 </div>
               </div>

                <div class={styles.dfdsf52d2}>
                 <div class={`${styles.box} ${styles.leftright}`}>
                   <img src="./images/contentimg (3).png"/>
                 </div>
               </div>

              <div class={styles.dfdsf52d}>
                 <div class={`${styles.box} ${styles.updown}`}>
                   <img src="./images/contentimg (1).png"/>
                 </div>
              </div>

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
                className="pt-4"
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

        <div className={styles.ndfyhdf}>
          <div className="custom-container">
            <div className={styles.fgdfgfdg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.cfbfjhf} style={{backgroundImage: "url('images/background(2).png')"}}>
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
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.dfbghdfd}>
                    {serviceResponse.data?.third_section_image && (
                      <img data-aos="fade-left"
                        src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dbfsdbgdfgdfg}>
          <div className="container">
            <div className={styles.fdfgdfgfg}>
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

            <div className={styles.fgfhdfgdfg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dfbdfhgdfg}>
                    <div className={styles.dfbdf}>
                      {serviceResponse.data?.fourth_section_image_one && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_one}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.sbgsdffg}>
                      <h4>
                        {serviceResponse.data?.fourth_section_title_one &&
                          serviceResponse.data.fourth_section_title_one}
                      </h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data
                              ?.fourth_section_description_one &&
                            serviceResponse.data.fourth_section_description_one,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_two &&
                              serviceResponse.data.fourth_section_title_two}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_two &&
                                serviceResponse.data
                                  .fourth_section_description_two,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_three && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_three}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_three &&
                              serviceResponse.data.fourth_section_title_three}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_three &&
                                serviceResponse.data
                                  .fourth_section_description_three,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_four && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_four}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_four &&
                              serviceResponse.data.fourth_section_title_four}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_four &&
                                serviceResponse.data.fourth_section_description_four,
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

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
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
