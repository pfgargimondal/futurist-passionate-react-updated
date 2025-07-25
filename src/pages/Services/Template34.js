import styles from "./Css/Template34.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template34 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.gdfbdfdfgdf554}>
                    <div className={styles.dfgjhfgd} style={{ background: "url(./images/afros.png)" }}>
                        <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                            <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                                serviceResponse.data.banner_title}</h1>

                            <p className="mt-3 mb-5">{serviceResponse.data?.banner_description &&
                                serviceResponse.data.banner_description}</p>

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
                                    src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.banner_image}`}
                                    alt=""
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
                            <h2>{serviceResponse.data?.second_section_title &&
                                serviceResponse.data.second_section_title}</h2>

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

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
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
                <div className={`${styles.dnejiwhkrmiwejrwer} py-5`}>
                    <div className="custom-container py-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_one &&
                                            serviceResponse.data.fourth_section_title_one}</h2>

                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_one &&
                                                    serviceResponse.data.fourth_section_description_one,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_two &&
                                            serviceResponse.data.fourth_section_title_two}</h2>
                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_two &&
                                                    serviceResponse.data.fourth_section_description_two,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_three &&
                                            serviceResponse.data.fourth_section_title_three}</h2>

                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_three &&
                                                    serviceResponse.data.fourth_section_description_three,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className={`${styles.sdfghnrewetytuuuu} sticky-top`}>
                                    {serviceResponse.data?.fourth_section_main_image && (
                                        <img
                                            src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.fourth_section_main_image}`}
                                            alt="" className="img-fluid"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sdmsdjhsds}>
                    {serviceResponse.data?.featured_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.featured_image}`}
                            alt=""
                        />
                    )}
                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
