import styles from "./Css/Template6.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template6 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.dfgjhfgd}>
                    <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                        <h1 className="mt-0 mb-0">
                            {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
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
                                src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.banner_image}`}
                                alt=""
                            />
                        )}
                        <div class={styles.dfdsf52d}>
                            <div class={`${styles.box} ${styles.updown}`}>
                                <img src="./images/digiphoto (1).png" alt=""/>
                            </div>
                        </div>

                        <div class={styles.dfdsf52d2}>
                            <div class={`${styles.box} ${styles.leftright}`}>
                                <img src="./images/digiphoto (2).png" alt=""/>
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
                                        serviceResponse.data?.second_section_first_description &&
                                        serviceResponse.data.second_section_first_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <ServiceEnquiryForm loading={setLoading} slug={slug} />

                <div className={styles.dfbghdfgdfgdf}>
                    <div className="custom-container">
                        <div className={styles.mgjhbdfg}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.second_section_second_description &&
                                        serviceResponse.data.second_section_second_description,
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
                                            {serviceResponse.data?.third_section_title &&
                                                serviceResponse.data.third_section_title}
                                        </h2>
                                        <div
                                            className="py-4 mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.third_section_description &&
                                                    serviceResponse.data.third_section_description,
                                            }}
                                        />
                                        <button>Get started</button>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className={styles.dgndfgdfgdf}>
                                        {serviceResponse.data?.third_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.third_section_image}`}
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
                                    <div className={styles.dgndfgdfgdf}>
                                        {serviceResponse.data?.fourth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.fourth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.fdnbvgdfgdfgdf}>
                    <div className="custom-container">
                        <div className={styles.cfbvhdfgdf}>
                            <h2 className="text-center">
                                {serviceResponse.data?.fifth_section_title &&
                                    serviceResponse.data.fifth_section_title}
                            </h2>
                            <div
                                className="text-center py-4 mb-0"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.fifth_section_description &&
                                        serviceResponse.data.fifth_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.xnjhxffgdf}>
                    {serviceResponse.data?.featured_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.featured_image}`}
                            alt=""
                        />
                    )}

                
                    <div class={styles.dfdsf52d2a}>
                        <div class={`${styles.box} ${styles.leftright}`}>
                            <img src="./images/digiicon2 (5).png"/>
                        </div>
                    </div>

                    <div class={styles.dfdsf52daa}>
                        <div class={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (1).png"/>
                        </div>
                    </div>

                    <div class={styles.dfdsf52daaa}>
                        <div class={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (4).png"/>
                        </div>
                    </div>

                    <div class={styles.dfdsf52daaaa}>
                        <div class={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (3).png"/>
                        </div>
                    </div>

                    <div class={styles.dfdsf52daaaaa}>
                        <div class={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (2).png"/>
                        </div>
                    </div>
                </div>

                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
