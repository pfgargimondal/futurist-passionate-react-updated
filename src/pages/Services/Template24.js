import styles from "./Css/Template24.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template24 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({      
      duration: 2000,
      once: false,
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
                src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
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

        <div className={styles.sdvggsdcsd}>
          <div className="custom-container">
            <div className={styles.bjvbffbgf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.fdnvhjfdv}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.third_section_image}`}
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
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

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

        <div className={styles.sdvggsdcsd}>
          <div className="custom-container">
            <div className={styles.bjvbffbgf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.sdbghcsdcsd}>
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
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.fdnvhjfdv} style={{marginTop:"15%"}}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fdnbvgdfgdfgdf}>
          <div className="custom-container">
            <div className={styles.cfbvhdfgdf}>
              <h2 className="text-center">
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>

              <div
                className="text-center py-4 mb-0"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={` ${styles.xnjhxffgdf} position-relative`}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.featured_image}`}
              alt=""
            />
          )}

          {slug === 'catalogue-design-services' && (
            <div className={styles.lead_page}>
                <img src="./images/catalogue_img_book.png" className={styles.book} alt=""/>

                <img src="./images/catalogue_img_design.png" className={styles.design} data-aos="zoom-out-up" alt=""/>

                <img src="./images/catalogue_img_graph.png" className={styles.graph} data-aos="zoom-out-down" alt=""/>

                <img src="./images/catalogue_img1.png" className={styles.pic1} data-aos="fade-right" alt=""/>

                <img src="./images/catalogue_img2.png" className={styles.pic2} data-aos="fade-down" alt=""/>

                <img src="./images/catalogue_img3.png" className={styles.pic3} alt=""/>

                <img src="./images/catalogue_img4.png" className={styles.pic4} data-aos="fade-left" alt=""/>

                <img src="./images/catalogue_img5.png" className={styles.pic5} data-aos="fade-down" alt=""/>

                <img src="./images/catalogue_img6.png" className={styles.pic6} alt=""/>
           </div>
          )}
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
