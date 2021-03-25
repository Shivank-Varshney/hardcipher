import React from "react";
import { NavHashLink } from 'react-router-hash-link';
// import Carousel from "react-elastic-carousel";
import ServicesSectionComponent, {ServicesSectionComponentData} from "./ServiceData";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import About from "../Image/about-banner.png";
import Work from "../Image/work-banner.png";
import Card1 from "../Image/s1.png";
import Card2 from "../Image/s2.png";
import Card3 from "../Image/s3.png";
import Homebanner from "../Image/Home-fg.png";
import Sectionwave from "./Svg";

const HomePage = () =>{
    return(
        <>
            {/* header section start */}
            <section className="container-fluid" id="header">
                <div className="row">
                    <div className="col-lg-6 my-auto">  
                        <h1 className="header-heading">heading</h1>
                        <p className="header-text py-4">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button className="play-btn mr-4 mt-3"><PlayArrowIcon /> Video tour</button>
                        <button className="download-btn"><GetAppIcon /> Download</button>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">  
                       <img src={Homebanner} alt="illustration" className="img-fluid" />
                    </div>
                </div>
            </section>
            <Sectionwave />
            {/* header section end */}


            {/* service section start */}
            <section className="container-fluid section-gap" id="services">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center mb-5">
                        <h2>services</h2>
                        <p>We are a bunch of creative and imaginative people who work according to your requirement and aims at delivering the best we can. We provide authentic work that focuses on converting your customers into clients. We are a team of experienced workers who are known to give 100% results.</p>
                    </div>
                </div>
                  
                <div className="row my-5">
                {
                    ServicesSectionComponentData.map((val,index)=>{
                        return(
                            <ServicesSectionComponent
                                key = {index}
                                imgsrc = {val.imgsrc}
                                heading = {val.heading}
                                text = {val.text}
                                link = {val.link}
                            />
                        );
                    })
                }
                </div>
            </section>
            {/* service section end */}


            {/* about section start */}
            <section className="container-fluid section-gap" id="aboutus">
                <div className="row">
                    <div className="col-md-4 mx-auto mb-md-0 mb-5">
                        <img src={About} alt="about banner" className="img-fluid" />
                    </div>
                    <div className="col-md-6 offset-md-2 my-auto">
                        <h2>
                            about hard cipher
                        </h2>
                        <p>We at hardCipher, are known to be one of the topmost, inventive and above all customer cordial advanced specialist organizations in the market. we work for the fulﬁllment of our customers need and providing high grade quality. We invest heavily in our work portfolio of profoundly satisﬁed customers, hence consistently thriving advancement........</p>
                        <div className=" d-flex justify-content-end">
                            <NavHashLink to="/about-us#" className="read-more">Read more</NavHashLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}


             {/* work section start */}
             <section className="container-fluid section-gap" id="work">
                <div className="row">
                    <div className="col pb-5">
                        <h2>How we work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 offset-3">
                        <img src={Work} alt="how we work" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col py-5">
                        <h2>Output</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <Carousel itemsToShow={3} pagination={false} enableAutoPlay>
                                {
                                    Cardata.map((val,index)=>{
                                        return(
                                            <Carouselcard
                                                key = {index}
                                                imgsrc = {val.imgsrc}
                                            />
                                        );
                                    })
                                }
                        </Carousel> */}
                    </div>
                </div>
            </section>
            {/* work section end */}


             {/* subscribe section start */}
             <section className="container-fluid section-gap" id="subscribe">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <h2>Subscribe to our newsletter</h2>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-8 mx-auto">
                        <fieldset>
                            <form name="Subscribe" action="#">
                                <input type="text" className="form-control" placeholder="Enter your email address" />
                                <button type="button" className="btn-subscribe">Subscribe <ArrowRightAltIcon /></button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </section>
            {/* subscribe section end */}


             {/* Testimonials section start */}
             <div className="container-fluid" id="testimonials">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center mb-5">
                        <h2>user testimonial</h2>
                    </div>
                </div>
                <div className="row px-md-5">
                    <div className="col-lg-8 offset-lg-2 text-center mb-5">
                    {/* <Carousel itemsToShow={1} showArrows={false}>
                                {
                                    Tdata.map((val,index)=>{
                                        return(
                                            <Testimonial
                                                key = {index}
                                                comment = {val.comment}
                                                name = {val.name}
                                            />
                                        );
                                    })
                                }
                        </Carousel> */}
                    </div>
                </div>
                <div className="row px-md-5">
                    <div className="col-md-12 my-5">
                        <div className="clients-list mb-5">
                        {/* <Carousel itemsToShow={4} pagination={false}>
                                {
                                    Cdata.map((val,index)=>{
                                        return(
                                            <Clients
                                                key = {index}
                                                imgsrc = {val.imgsrc}
                                            />
                                        );
                                    })
                                }
                        </Carousel> */}
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L12.6,240C25.3,224,51,192,76,192C101.1,192,126,224,152,208C176.8,192,202,128,227,96C252.6,64,278,64,303,90.7C328.4,117,354,171,379,192C404.2,213,429,203,455,170.7C480,139,505,85,531,90.7C555.8,96,581,160,606,208C631.6,256,657,288,682,298.7C707.4,309,733,299,758,250.7C783.2,203,808,117,834,117.3C858.9,117,884,203,909,240C934.7,277,960,267,985,218.7C1010.5,171,1036,85,1061,74.7C1086.3,64,1112,128,1137,154.7C1162.1,181,1187,171,1213,160C1237.9,149,1263,139,1288,144C1313.7,149,1339,171,1364,176C1389.5,181,1415,171,1427,165.3L1440,160L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
            </div>
            {/* Testimonials section end */}



            {/* Support section start */}
            <section className="container-fluid" id="card">
                <div className="row p-md-5 py-5 mt-5">
                    <Card 
                        imgsrc = {Card1}
                        heading = "Get Support"
                        text = "Let us know your doubts and we will provide our support in every manner. Call us or mail us your queries and we will reach out to you as soon as possible. We at HardCipher believe in providing full support to our customers."
                        linkname = "Go to support"
                    />
                    <Card 
                        imgsrc = {Card2}
                        heading = "Our community"
                        text = "We are a dedicated team of developers who puts in their heart and soul in providing 100% satisfaction to our clients. We believe in taking our clients onboard as we work through so they get what they want and are pleased to see the results."
                        linkname = "Go to community"
                    />
                    <Card 
                        imgsrc = {Card3}
                        heading = "F.A.Q"
                        text = "The questions you have in your mind related to our company and the services we provide have all been answered here for your better understanding."
                        linkname = "Go to F.A.Q"
                    />
                </div>
            </section>
            {/* Support section end */}
        </>
    );
}

const Card = (props) =>{
    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div className="card my-lg-0 my-4">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={props.imgsrc} alt="card1" className="img-fluid" />
                            </div>
                            <div className="col-9">
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text my-4">{props.text}</p>
                                <NavHashLink to="/support#" className="mt-auto">{props.linkname} <ArrowRightAltIcon /></NavHashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;