import styles from "./Css/Template5.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template5 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
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
                                    src={`${serviceResponse.image_url}/Template_5/${serviceResponse.data.banner_image}`}
                                    alt=""
                                />
                            )}
                        {slug === "social-media-optimization-services" && (
                            <div className={styles.optimization_img}>
                                <img src="./images/Social-Media-Optimization-Services-banner_img_4.png" className={styles.opti1} alt=""/>

                                <img src="./images/Social-Media-Optimization-Services-banner_img_2.png" className={styles.opti2} alt=""/>

                                <img src="./images/Social-Media-Optimization-Services-banner_img_1.png" className={styles.opti3} alt=""/>

                                <img src="./images/Social-Media-Optimization-Services-banner_img_3.png" className={styles.opti4} alt=""/>
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

                <ServiceForm loading={setLoading} slug={slug} />

                <div className={`${styles.fjhfdfgdfg} pb-5`}>
                    <div className="container-fluid px-5 pb-5">
                        <div className={`${styles.weinjiurr_inner} sticky-top p-5`}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className={styles.dinweher_inner}>
                                        <h2>
                                            {serviceResponse.data?.third_section_title &&
                                                serviceResponse.data.third_section_title}
                                        </h2>
                                        <div
                                            className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.third_section_description &&
                                                    serviceResponse.data.third_section_description,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className={styles.dinweher_inner}>
                                        {serviceResponse.data?.third_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Template_5/${serviceResponse.data.third_section_image}`}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        )}

                                        {slug === "social-media-optimization-services" && (
                                            <div className={styles.social}>
                                                <img src="./images/social-media-third_img_1.png" className={styles.s1} alt="" />

                                                <img src="./images/social-media-third_img_2.png" className={styles.s2} alt="" />
                                                
                                                <img src="./images/social-media-third_img_3.png" className={styles.s3} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.weinjiurr_inner} sticky-top p-5`}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className={styles.dinweher_inner}>
                                        <h2>
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

                                <div className="col-lg-5">
                                    <div className={styles.dinweher_inner}>
                                        {serviceResponse.data?.fourth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Template_5/${serviceResponse.data.fourth_section_image}`}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.weinjiurr_inner} sticky-top p-5`}>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className={styles.dinweher_inner}>
                                        <h2>
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

                                <div className="col-lg-5">
                                    <div className={styles.dinweher_inner}>
                                        {serviceResponse.data?.fifth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Template_5/${serviceResponse.data.fifth_section_image}`}
                                                className="img-fluid"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={styles.sdmsdjhsds}>
                    {serviceResponse.data?.featured_image && (
                        <img
                            src={`${serviceResponse.image_url}/Template_5/${serviceResponse.data.featured_image}`}
                            alt=""
                        />
                    )}
                    {slug === "social-media-optimization-services" && (
                        <div className={styles.smospics}>
                            <img src="./images/smoslike.png" className={styles.smospic1} alt=""/>

                            <img src="./images/smosshare.png" className={styles.smospic2} alt=""/>

                            <img src="./images/smosgraph.png" className={styles.smospic3} alt=""/>
                    
                            <img src="./images/smoscont.png" className={styles.smospic4} alt=""/>
                        </div>
                    )} 
                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
