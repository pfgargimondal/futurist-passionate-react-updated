import styles from "./Css/Template13.module.css";
import { useEffect, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template13 = ({ serviceResponse, slug }) => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // Animations only happen once
      });
    }, []);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div
            className={styles.dfgjhfgd}
            style={{
              // backgroundImage: "url(./images/afros.png)",
            }}
          >
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title &&
                  serviceResponse.data.banner_title}
              </h1>
              <div className="mt-3 mb-5"
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

            <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
              {slug === 'keyword-research-services' && (
                <>
                <div className={styles.ro1}>
                  <img src="./images/keyword-banner-imag_1.png" className={styles.roimg1}  alt=""/>
                </div>
                <div className={styles.ro2}>
                  <img src="./images/keyword-banner-imag_2.png" className={styles.roimg2} data-aos="zoom-in-up" alt=""/>
                </div>
                <div className={styles.ro3}>
                  <img src="./images/keyword-banner-imag_3.png" className={styles.roimg3} data-aos="fade-down" alt=""/>
                </div>
                <div className={styles.ro4}>
                  <img src="./images/keyword-banner-imag_4.png" className={styles.roimg4} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.ro5}>
                  <img src="./images/keyword-banner-imag_5.png" className={styles.roimg5} data-aos="fade-left" alt=""/>
                </div>
                <div className={styles.ro6}>
                  <img src="./images/keyword-banner-imag_6.png" className={styles.roimg6} data-aos="fade-left" alt=""/>
                </div>
                <div className={styles.ro7}>
                  <img src="./images/keyword-banner-imag_7.png" className={styles.roimg7} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.ro8}>
                  <img src="./images/keyword-banner-imag_8.png" className={styles.roimg8} data-aos="fade-left" alt=""/>
                </div>
                </>
              )}
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

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={`${styles.fjhfdfgdfg} pb-5`}>
          <div className="custom-container pb-5">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}
              </h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.third_section_description &&
                    serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.lkfsdmfuisdnfsdf} position-relative mb-4 mt-5`}>
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7 mb-4">
                <div className={styles.doksjoijfrerr_right}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fourth_section_title &&
                      serviceResponse.data.fourth_section_title}
                  </h2>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-5 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.fourth_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                {slug === 'keyword-research-services' && (
                  <div className="col-lg-5 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                    {serviceResponse.data?.fourth_section_image && (
                      <img src="./images/RR-1.png" className={styles.RRBG2} alt="" />
                    )}

                    <div className={styles.RR1}>
                      <img src="./images/RR-2.png" className={styles.RRi1} data-aos="fade-left" alt="" />
                    </div>
                    <div className={styles.RR2}>
                      <img src="./images/RR-3.png" className={styles.RRi2} data-aos="fade-right" alt="" />
                    </div>
                    <div className={styles.RR3}>
                      <img src="./images/RR-4.png" className={styles.RRi3 }data-aos="fade-left" alt="" />
                    </div>

                    
                  </div>
                </div>
            
                )}


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ndkasedfnsdifsdff} position-relative mb-4 mt-5 pt-5`}>
          <div className="custom-container pt-5">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className={styles.doksjoijfrerr_right}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.fifth_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-7 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fifth_section_title &&
                      serviceResponse.data.fifth_section_title}
                  </h2>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fifth_section_description &&
                        serviceResponse.data.fifth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdmsdjhsds}>
          {serviceResponse.data?.sixth_section_image && (
            <img
              src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.sixth_section_image}`}
              alt=""
            />
          )}
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
