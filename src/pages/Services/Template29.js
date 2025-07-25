import styles from "./Css/Template29.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template29 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.dfgjhfgd}>
                    <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                        <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                            serviceResponse.data.banner_title}</h1>

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
                                src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.banner_image}`}
                                alt=""
                            />
                        )}
                    </div>
                </div>



                <div className={styles.sdcbvghsdcsddvfsd}>
                    <div className="custom-container">
                        <div className={styles.hsdffdvffdfd}>
                            <h2>{serviceResponse.data?.second_section_title &&
                                serviceResponse.data.second_section_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.second_section_description &&
                                        serviceResponse.data.second_section_description,
                                }}
                            />
                            {/* <div className="fdnbujfbf mt-4">
                    <p><i className="fa-solid fa-circle-notch"></i> High-Quality Backlinks from niche-relevant, authority websites</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Manual Outreach to secure authentic, natural links</p>
                    <p><i className="fa-solid fa-circle-notch"></i> White-Hat SEO Practices approved by Goog</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Detailed Monthly Reports on backlink performance</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Diverse Link Profile including guest posts, niche edits, and citations</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Boost in Domain Authority and search engine rankings</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Improved Organic Traffic with long-term SEO benefits</p>
                </div> */}
                        </div>
                    </div>
                </div>


                <div className={styles.sdhdvbusdsfs}>
                    <div className="custom-container">
                        <div className={styles.hbdhdcsdsds}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={styles.cjdjcdc}>
                                        {serviceResponse.data?.third_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.third_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.fdhjhj}>
                                        <h2>{serviceResponse.data?.third_section_title &&
                                            serviceResponse.data.third_section_title}</h2>

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
                        </div>
                    </div>
                </div>






                <ServiceEnquiryForm loading={setLoading} slug={slug} />


                <div className={styles.sdfbghdsvbfdfd}>
                    <div className="custom-container">
                        <div className={styles.kdsdnfvdsfd}>
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

                        <div className={styles.dfbnghjfdgfd}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={styles.nsfdsfjff}>
                                        <div className={styles.nfdjfd}>
                                            {serviceResponse.data?.fifth_section_image && (
                                                <img
                                                    src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.fifth_section_image}`}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                        <div className={styles.fgfdg}>
                                            <h4>{serviceResponse.data?.fifth_section_title &&
                                                serviceResponse.data.fifth_section_title}</h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        serviceResponse.data?.fifth_section_description &&
                                                        serviceResponse.data.fifth_section_description,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className={styles.nsfdsfjff}>
                                        <div className={styles.nfdjfd}>
                                            {serviceResponse.data?.sixth_section_image && (
                                                <img
                                                    src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.sixth_section_image}`}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                        <div className={styles.fgfdg}>
                                            <h4>{serviceResponse.data?.sixth_section_title &&
                                                serviceResponse.data.sixth_section_title}</h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        serviceResponse.data?.sixth_section_description &&
                                                        serviceResponse.data.sixth_section_description,
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
                            <h2>{serviceResponse.data?.seven_section_title &&
                                serviceResponse.data.seven_section_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.seven_section_description &&
                                        serviceResponse.data.seven_section_description,
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
