import styles from "./Css/Template48.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template48 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

            <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_48/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'professional-dissertation-writing-services' && (
                <div className={styles.pdwsimgs}>
                  <img src="/images/pdwsban1.png" className={styles.pdwsimg1} alt=""/>

                  <img src="/images/pdwsban2.png" className={styles.pdwsimg2} alt=""/>

                  <img src="/images/pdwsban3.png" className={styles.pdwsimg3} alt=""/>
                </div>
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
        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.dfgdffgdfg}>
          <div className="custom-container">
            <div className={styles.fgdfghgdfg}>
              <div className={styles.fbgdfg5644}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.dfbngdfjhgd}>
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
                            Contact Us
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className={styles.dfjhsdfsd}>
                      {serviceResponse.data?.third_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_48/${serviceResponse.data.third_section_image}`}
                          alt=""
                        />
                      )}

                      {slug === 'professional-dissertation-writing-services' && (
                        <div className={styles.pdwspics}>
                          <img src="/images/pdwssupport.png" className={styles.pdwspic1} data-aos="fade-down-right" alt=""/>

                          <img src="/images/pdwswrite.png" className={styles.pdwspic2} data-aos="fade-right" alt=""/>

                          <img src="/images/pdwsprice.png" className={styles.pdwspic3} data-aos="fade-up-right" alt=""/>

                          <img src="/images/pdwstime.png" className={styles.pdwspic4} data-aos="fade-down-left" alt=""/>

                          <img src="/images/pdwsfree.png" className={styles.pdwspic5} data-aos="fade-left" alt=""/>

                          <img src="/images/pdwsfair.png" className={styles.pdwspic6} data-aos="fade-up-left" alt=""/>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.fbgdfg5644}>
                <div className="row">                  
                  <div className="col-lg-5">
                    <div className={styles.dfjhsdfsd}>
                      {serviceResponse.data?.fourth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_48/${serviceResponse.data.fourth_section_image}`}
                          alt=""
                        />
                      )}

                      {slug === 'professional-dissertation-writing-services' && (
                        <div className={styles.pdwsimages}>
                          <img src="/images/pdwsacademic.png" className={styles.pdwsimages1} alt=""/>

                          <img src="/images/pdwscustom.png" className={styles.pdwsimages2} alt=""/>

                          <img src="/images/pdwsreview.png" className={styles.pdwsimages3} alt=""/>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <div className={styles.dfbngdfjhgd}>
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
                        <button onClick={() => navigate("/contact-us")}>
                            Contact Us
                        </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.fbgdfg5644}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.dfbngdfjhgd}>
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
                        <button onClick={() => navigate("/contact-us")}>
                            Contact Us
                        </button>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className={styles.dfjhsdfsd}>
                      {serviceResponse.data?.fifth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_48/${serviceResponse.data.fifth_section_image}`}
                          alt=""
                        />
                      )}

                      {slug === 'professional-dissertation-writing-services' && ( 
                        <div className={styles.pdwspictures}>
                          <img src="/images/pdwshat.png" className={styles.pdwspicture1} alt=""/>

                          <img src="/images/pdwsbadge.png" className={styles.pdwspicture2} alt=""/>

                          <img src="/images/pdwspen.png" className={styles.pdwspicture3} alt=""/>

                          <img src="/images/pdwsshild.png" className={styles.pdwspicture4} alt=""/>

                          <img src="/images/pdwswatch.png" className={styles.pdwspicture5} alt=""/>

                          <img src="/images/pdwsglass.png" className={styles.pdwspicture6} alt=""/>
                        </div>
                      )}
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
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>
              <div
                className="pt-4"
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