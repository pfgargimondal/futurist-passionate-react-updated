import styles from "./Css/Template44.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template44 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
                    src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.banner_image}`}
                    alt=""
                  />
                )}

                {slug === 'infographics-design-company' && ( 
                  <div className={styles.infographic_page}>
                    <img src="./images/info1.webp" className={styles.img1} alt=""/> 

                    <img src="./images/info2.webp" className={styles.img2} alt=""/> 

                    <img src="./images/info3.webp" className={styles.img3} alt=""/> 

                    <img src="./images/info4.webp" className={styles.img4} alt=""/> 

                    <img src="./images/info5.webp" className={styles.img5} alt=""/> 
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.fjhfdfgdfg}>
            <div className="custom-container">
              <div className={styles.sdfsdfsdf}>
                <h2>{serviceResponse.data?.second_section_title}</h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html: serviceResponse.data?.second_section_description,
                  }}
                />
              </div>
            </div>
          </div>

          <ServiceForm loading={setLoading} slug={slug} />

          <div className={styles.fghsdfgsdfgdfg}>
            <div className="custom-container">
              <div className={styles.fghjkdfghdf}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.dfbhdfdf6528}>
                      <div className={styles.fghsdfsdf}>
                        {serviceResponse.data?.third_section_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.third_section_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={styles.fdfdfg}>
                        <h4>{serviceResponse.data?.third_section_title_one}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className={styles.dfbhdfdf6528}>
                      <div className={styles.fghsdfsdf}>
                        {serviceResponse.data?.third_section_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.third_section_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={styles.fdfdfg}>
                        <h4>{serviceResponse.data?.third_section_title_two}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_description_two,
                          }}
                        />
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
                <h2>{serviceResponse.data?.fourth_section_title}</h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html: serviceResponse.data?.fourth_section_description,
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.dfngjhdfgdfg}>
            <div className="custom-container">
              <div className={styles.dfghdfgdf}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.fgydfgdfg}>
                      <h2>{serviceResponse.data?.fifth_section_title}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fifth_section_description,
                        }}
                      />
                      <button onClick={() => navigate("/contact-us")}>
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styles.cfbgjhcfdf}>
                      {serviceResponse.data?.fifth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.fifth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.fjhfdfgdfg}>
            <div className="custom-container">
              <div className={styles.sdfsdfsdf}>
                <h2>{serviceResponse.data?.sixth_section_title}</h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html: serviceResponse.data?.sixth_section_description,
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
