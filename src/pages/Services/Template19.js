import styles from "./Css/Template19.module.css";
import { useEffect,useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template19 =({ serviceResponse, slug }) =>{
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
        <div class={styles.dfgjhfgd}>
          <div class={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 class="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>

            <p class="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
            </p>

            <div class={styles.vbddds}>
                <Link to="/contact-us" className="btn125">
                    Contact Us
                </Link>
              <button class="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div class={`${styles.dbfghsdf} col-lg-6 position-relative`}>
            {serviceResponse.data?.banner_image && (
            <img
                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.banner_image}`}
                alt=""
            />
            )}
            {slug === "off-page-seo-services" && (
              <>
              <div className={styles.titli1}>
                <img src="./images/off-page-banner-img_6.png" className={styles.sayan01}data-aos="fade-left" alt="" />
              </div>
              <div className={styles.titli2}>
                <img src="./images/off-page-banner-img_5.png" className={styles.sayan02}data-aos="fade-left"alt="" />
              </div>
              <div className={styles.titli3}>
                <img src="./images/off-page-banner-img_1.png" className={styles.sayan03}data-aos="fade-right" alt="" />
              </div>
               <div className={styles.titli4}>
                <img src="./images/off-page-banner-img_2.png" className={styles.sayan04}data-aos="fade-right" alt="" />
              </div>
              <div className={styles.titli5}>
                <img src="./images/off-page-banner-img_3.png" className={styles.sayan05}data-aos="fade-right"alt="" />
              </div>
               <div className={styles.titli6}>
                <img src="./images/off-page-banner-img_4.png" className={styles.sayan06}data-aos="fade-left"alt="" />
              </div>
              </>
            )}
          </div>
        </div>

        <div class={styles.fjhfdfgdfg}>
          <div class="custom-container">
            <div class={styles.sdfsdfsdf}>
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

        <div class={styles.dfbjhfdfgdf}>
          <div class="custom-container">
            <div class={styles.vgbfdf}>
              <div class="row">
                <div class="col-lg-5">
                  <div class={`${styles.dgndfgdfgdf} position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                    <img
                        src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.third_section_image}`}
                        alt=""
                    />
                    )}

                    {slug === 'off-page-seo-services' && (
                    <div className={styles.offpgseoimgn}>
                      <img src="./images/offdouin.png" className={styles.offimg1} data-aos="fade-down" alt=""/>

                      <img src="./images/offshare.png" className={styles.offimg2} data-aos="fade-right" alt=""/>

                      <img src="./images/offbrand.png" className={styles.offimg3} data-aos="fade-left" alt=""/>
                    </div>
                    )}
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class={styles.fbgdfgdfgdf}>
                    <h2>{serviceResponse.data?.third_section_title &&
                serviceResponse.data.third_section_title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                            serviceResponse.data?.third_section_description &&
                            serviceResponse.data.third_section_description,
                        }}
                    />
                    <button>Get started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.cffbvbhjfdbvdfvgvd}>
          <div class="custom-container">
            <div class={styles.fkuyfdfrdgf}>
              <h2>{serviceResponse.data?.fourth_section_title &&
                serviceResponse.data.fourth_section_title}</h2>
              <div
                dangerouslySetInnerHTML={{
                    __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
            />
            </div>

            <div class={styles.fvbnjfdvfdgfd}>
              <div class="row">
                <div class="col-lg-6">
                  <div class={styles.fhvgfdfd}>
                    <div class="row">
                      <div class="col-lg-2">
                        <div class={styles.ujhfgfg}>
                          {serviceResponse.data?.fourth_section_image_one && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.fourth_section_image_one}`}
                                alt=""
                            />
                            )}
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class={styles.fdbvhjfyfdg}>
                          <h6>{serviceResponse.data?.fourth_section_title_one &&
                serviceResponse.data.fourth_section_title_one}</h6>
                        <p>{serviceResponse.data?.fourth_section_description_one &&
                serviceResponse.data.fourth_section_description_one}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class={styles.fhvgfdfd}>
                    <div class="row">
                      <div class="col-lg-2">
                        <div class={styles.ujhfgfg}>
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.fourth_section_image_two}`}
                                alt=""
                            />
                            )}
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class={styles.fdbvhjfyfdg}>
                          <h6>{serviceResponse.data?.fourth_section_title_two &&
                serviceResponse.data.fourth_section_title_two}</h6>
                          <p>
                            {serviceResponse.data?.fourth_section_description_two &&
                serviceResponse.data.fourth_section_description_two}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.fjhfdfgdfg}>
          <div class="custom-container">
            <div class={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.fifth_section_title &&
                serviceResponse.data.fifth_section_title}</h2>

                <div class="pt-4"
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
  )
}
