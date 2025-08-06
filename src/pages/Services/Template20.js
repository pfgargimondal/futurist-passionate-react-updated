import styles from "./Css/Template20.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Template20 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);

  const { ref, inView } = useInView({ triggerOnce: false });

  const AnimatedLetters = (text, className = "") => {
    return (
      <span
        className={className}
        style={{
          display: "inline-flex", // ✅ Prevent word break
          marginRight: "0.5rem",
          flexWrap: "nowrap",
          whiteSpace: "nowrap", // ✅ Ensure space behaves like a word
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: Math.random() < 0.5 ? "-100%" : "100%",
            }}
            animate={inView ? { opacity: 1, y: "0%" } : {}}
            transition={{ delay: index * 0.04, duration: 0.8 }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

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
            <div className="col-lg-6">
              <div className={styles.dbfghsdf}>
                {serviceResponse.data?.banner_image && (
                  <img
                    src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.banner_image}`}
                    alt=""
                  />
                )}
              </div>
              {slug === "ui-ux-design-services" && (
                <>
                  <div className={styles.uiiieer2}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterStart} ${styles.line1} ${styles.delay0}`}
                      >
                        <span className={styles.whiteText}>
                          Wireframing & Prototyping
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.uiiieer}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterEnd} ${styles.line2} ${styles.delay1}`}
                      >
                        <span className={styles.whiteText}>
                          Responsive Web Design
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.uiiieer3}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterStart} ${styles.line3} ${styles.delay2}`}
                      >
                        <span className={styles.whiteText}>
                          User Journey Mapping
                        </span>
                      </div>
                    </div>
                  </div>
                </>
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

          <ServiceEnquiryForm loading={setLoading} slug={slug} />

          <div className={styles.dfbghdfgdfgdf}>
            <div className="custom-container">
              <div className={styles.fdnfkdnfdg}>
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
          </div>

          <div className={styles.dfbjhfdfgdf}>
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.fbgdfgdfgdf}>
                      <h2>
                        {serviceResponse.data?.fourth_section_title &&
                          serviceResponse.data.fourth_section_title}
                      </h2>

                      <div
                        className="py-4 mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_description &&
                            serviceResponse.data.fourth_section_description,
                        }}
                      />
                      <button>Get started</button>
                    </div>
                  </div>
                  <div className={slug === "mobile-app-development-services" ? "col-lg-5" : "col-lg-5 mt-5 pt-5"}>
                    <div className={styles.dgndfgdfgdf}>
                      {serviceResponse.data?.fourth_section_image && (
                        <img
                          data-aos="flip-down"
                          src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fourth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dfbjhfdfgdf}>
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className={styles.gdfg5454d}>
                      {slug === "ui-ux-design-services" && (
                        <>
                          <div ref={ref} className={styles.dgnghbg5df}>
                            <h2>
                              {AnimatedLetters("Build", styles.bgjhdf5fa)}
                              {AnimatedLetters("High")}
                              {AnimatedLetters("Quality")}
                              {AnimatedLetters("Interfaces", styles.bgjhdf5faa)}
                              {AnimatedLetters("With")}
                              {AnimatedLetters("Us", styles.bgjhdf5fa)}
                            </h2>
                          </div>
                        </>
                      )}

                      <div className={`${styles.dgndfgdfgdf} mt-5 pt-5`}>
                        {serviceResponse.data?.fifth_section_image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fifth_section_image}`}
                            alt=""
                          />
                        )}
                      </div>
                      {slug === "ui-ux-design-services" && (
                        <>
                          <div className={styles.dfdsf52dsasas}>
                            <img src="./images/vr (1).png" alt="" />
                          </div>
                          <div className={styles.dfdsf52dsasas1}>
                            <img src="./images/hand (3).png" alt="" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className={styles.fbgdfgdfgdf}>
                      <h2>
                        {serviceResponse.data?.fifth_section_title &&
                          serviceResponse.data.fifth_section_title}
                      </h2>
                      <div
                        className="py-4 mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fifth_section_description &&
                            serviceResponse.data.fifth_section_description,
                        }}
                      />
                      <button>Get started</button>
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

          <div className={styles.xnjhxffgdf}>
            {serviceResponse.data?.featured_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.featured_image}`}
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
