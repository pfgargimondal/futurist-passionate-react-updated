import styles from "./Css/Template13.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
export const Template13 = ({ serviceResponse, slug }) => {
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
              backgroundImage: "url(./images/afros.png)",
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

            <div className={`${styles.dbfghsdf} col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.banner_image}`}
                  alt=""
                />
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
