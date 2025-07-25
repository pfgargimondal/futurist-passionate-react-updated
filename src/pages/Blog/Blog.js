import { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { Link } from 'react-router-dom';

export const Blog = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [loading, setLoading] = useState(true);
  const [BlogDetails, setBlogDetails] = useState({});
  useEffect(() => {
    const fetchBlogPageData = async () => {
      setLoading(true);
      try {
        const getresponse = await http.get(
          `${process.env.REACT_APP_BLOGFETCHAPI}`
        );
        setBlogDetails(getresponse.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPageData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <main>
        <div className={styles.cvngjhdfdfg}>
          <div className="container">
            <div className={styles.dfgdfgfg}>
              <div className="row">
                <div className="col-lg-8">
                  <div className={styles.fnjhdff}>
                    <div className={styles.ghfgjhh5255}></div>
                    <div className="row">
                      {BlogDetails.data && BlogDetails.data.length > 0 ? (
                        BlogDetails.data.map((allBlogs, index) => (
                          <div className="col-lg-6">
                            <div className={styles.dfvdfgdfgfd}>
                              <div className={styles.fhdfgdf}>
                                <img src={`${BlogDetails.image_url}/${allBlogs.blog_image}`} alt={allBlogs.blog_title} />
                                <p>{allBlogs.category_name}</p>
                              </div>

                              <div className={styles.dfndfhgdfgdfgdfgdfg}>
                                <div className={styles.cfbgdfjhgdfg}>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div
                                        className={`${styles.fghdfgdfg} d-flex`}
                                      >
                                        <div className={styles.fdbgdfgdf}>
                                          <img src="./images/man.jpg" alt={allBlogs.author_name} />
                                        </div>
                                        <div className={styles.dfbgdfg}>
                                          <h6>{allBlogs.author_name}</h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className={styles.fdfdf}>
                                        <p>{new Date(allBlogs.blog_date).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric"
                                            })}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.dfbgdfhgdf}>
                                  <Link to={`/blog/${allBlogs.slug}`}>
                                    <h4>{allBlogs.blog_title}</h4>
                                  </Link>
                                  <p>{allBlogs.short_description}</p>
                                  <Link to={`/blog/${allBlogs.slug}`}>
                                    <button>Read More..</button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No Blogs Available</p>
                      )}
                    </div>
                  </div>

                  {/* <div className={styles.dfnbgjhdfgdfg}>
                    <img src="./images/ad-750.png" alt="" />
                  </div> */}
                </div>
                <div className="col-lg-4">
                  <div className={styles.dfbdfghdfgdfg}>
                    <div className={styles.bgdfhdfgdf}>
                      <ul className={styles.tabs}>
                        {/* <li className="tab-link current" data-tab="tab-1">Popular Blog</li>
                        <li className="tab-link" data-tab="tab-2">Latest Blog</li> */}
                        <li
                          className={`tab-link ${
                            activeTab === "tab-1" ? styles.current : ""
                          }`}
                          data-tab="tab-1"
                          onClick={() => setActiveTab("tab-1")}
                        >
                          Popular Blog
                        </li>
                        <li
                          className={`tab-link ${
                            activeTab === "tab-2" ? styles.current : ""
                          }`}
                          data-tab="tab-2"
                          onClick={() => setActiveTab("tab-2")}
                        >
                          Latest Blog
                        </li>
                      </ul>

                      <div className={styles.dfngfddf5545}>
                        {/* <div id="tab-1" className={`${styles['tab-content']} current`}> */}
                        <div
                          id="tab-1"
                          className={`${styles["tab-content"]} ${
                            activeTab === "tab-1" ? styles.current : ""
                          }`}
                        >
                          {BlogDetails.popular_blog && BlogDetails.popular_blog.length > 0 ? (
                            BlogDetails.popular_blog.map((popularBlog, index) => (
                              <div className={styles.dfdfgdfg}>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className={styles.fghnfg}>

                                      <img src={`${BlogDetails.image_url}/${popularBlog.blog_image}`} alt={popularBlog.blog_title} />
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className={styles.dfgfgdfg}>
                                      <Link to={`/blog/${popularBlog.slug}`}>
                                        <h6>{popularBlog.blog_title}</h6>
                                      </Link>
                                      
                                      <p>{new Date(popularBlog.blog_date).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric"
                                        })}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ))
                          ) : (
                            <p>No Blogs Available</p>
                          )}
                        </div>
                        {/* <div id="tab-2" className={`${styles['tab-content']}`}> */}
                        <div
                          id="tab-2"
                          className={`${styles["tab-content"]} ${
                            activeTab === "tab-2" ? styles.current : ""
                          }`}
                        >
                          {BlogDetails.latest_blog && BlogDetails.latest_blog.length > 0 ? (
                            BlogDetails.latest_blog.map((latestBlog, index) => (
                              <div className={styles.dfdfgdfg}>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className={styles.fghnfg}>

                                      <img src={`${BlogDetails.image_url}/${latestBlog.blog_image}`} alt={latestBlog.blog_title} />
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className={styles.dfgfgdfg}>
                                      <Link to={`/blog/${latestBlog.slug}`}>
                                        <h6>{latestBlog.blog_title}</h6>
                                      </Link>
                                      
                                      <p>{new Date(latestBlog.blog_date).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric"
                                        })}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ))
                          ) : (
                            <p>No Blogs Available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dfjgbdfdfgf}>
                    <div className={styles.dfgndf}>
                      <h4>Explore Topics</h4>
                    </div>
                    {BlogDetails.blog_counts && BlogDetails.blog_counts.length > 0 ? (
                        BlogDetails.blog_counts.map((serviceBlogCount, index) => (
                          <div className={styles.dfgfgdf5654}>
                            <div className={styles.dfgdfg}>
                              <p>
                                <i className="fa-solid fa-chevron-right"></i>{" "}
                                <span>{serviceBlogCount.category_name}</span>{" "}
                              </p>
                            </div>
                            <div className={styles.fdgbdfg}>
                              <h6>({serviceBlogCount.blog_count})</h6>
                            </div>
                          </div>
                        ))
                    ) : (
                      <p>No Blogs Available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
