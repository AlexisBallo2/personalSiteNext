import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
//import useOnScreen from "../hooks/useOnScreen";
import styles from "./homepage.module.css";
import bulletpitch from "../public/images/resumeImages/bulletpitchIcon.ico";
import mdSci from "../public/images/resumeImages/Maryland_Science_Center_Logo.png";
import pulseImage from "../public/images/resumeImages/pulseTransport.png";
import rendia from "../public/images/resumeImages/R-Logo.png";
import dpw from "../public/images/resumeImages/dpw.png";
import parsons from "../public/images/resumeImages/parsonsIcon.jpeg";
import codeintheschools from "../public/images/resumeImages/codeintheschools.png";
import Nav from "./Nav";
import MiniPortfolio from "./MiniPortfolio";
import Image from "next/image";
function HomePage() {
	return (
		<div>
			<header id="home">
				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">Alexis Ballo</h1>
						<h3></h3>
						<hr />
						<ul className="social">
							<li>
								<a
									href="https://www.facebook.com/profile.php?id=100010979888714"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/alexis-ballo-6471191a7/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/alexisballo/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://github.com/AlexisBallo2"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-github"></i>
								</a>
							</li>
							<li>
								<a href="mailto:aballo@middlebury.edu"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fa fa-envelope"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<AnchorLink className="" href="#resume">
						<i className="icon-down-circle"></i>
					</AnchorLink>
				</p>
			</header>


			<section id="portfolio" className="">
				<div className="row education">
					<div className="three columns header-col">
						<h1 className="">
							<span>Portfolio</span>
						</h1>
					</div>
					<MiniPortfolio />
					</div>
				</section>

			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div
						className="nine columns main-col"
						style={{ borderLeft: "3px solid #11abb0" }}
					>
						<div className="row item">
							<div className="twelve columns">
								<h3>Middlebury College</h3>
								<p className="info">
									{" "}
									Diploma Pending <span>&bull;</span>{" "}
									<em className="date">In Progress</em>
								</p>

								<p></p>
							</div>
						</div>

						<div className="row item">
							<div className="twelve columns">
								<h3>Baltimore City College</h3>
								<p className="info">
									International Baccalaureate and High School Diploma{" "}
									<span>&bull;</span> <em className="date">May 2021</em>
								</p>

								<p></p>
							</div>
						</div>

						<div className="row item">
							<div className="twelve columns">
								<h3>National Center for Outdoor and Adventure Education</h3>
								<p className="info">
									{" "}
									EMT certification <span>&bull;</span>{" "}
									<em className="date">April 2021</em>
								</p>

								<p></p>
							</div>
						</div>

						<div className="row item">
							<div className="twelve columns">
								<h3>Johns Hopkins Summer Class</h3>
								<p className="info">
									{" "}
									Received grade &quot;A&quot; in summer biomedical engineering course
									<span>&bull;</span> <em className="date">April 2020</em>
								</p>

								<p></p>
							</div>
						</div>
					</div>
				</div>

				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Work Experience</span>
						</h1>
					</div>

					<div
						className="nine columns main-col"
						style={{ borderLeft: "3px solid #11abb0" }}
					>
						{/* bulletpitch */}

						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								{/* <div className={styles.imageDiv}> */}
								<div className="two columns">
									<div className={styles.imageDiv}>
										<Image src={bulletpitch} width={60} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>Bulletpitch</h3>
										<p className="info">
											Chief Technology Officer<span>&bull;</span>{" "}
											<em className="date">July 2022 - Present</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Worked with founders to develop a modern website and
										expedite growth
									</p>
									<h5>Achievements</h5>
									<ul className={styles.RendiaAchievements}>
										<li>
											Developed sophisticated website for hosting and delivering
											newsletter content 
										</li>
											<ul className={styles.nestedList}>
											<li>Followed Agile development practices</li>
											<li>Implemented customized analytics tracking and GTM configuration</li>
										</ul>
										<li>
											Used Google Search Console to build company&apos;s SEO
										</li>
										<li>
											Integrated components of multiple websites into one sleek
											site
										</li>
										<li>Built mass email sending program using stmb</li>
									</ul>
									<h5>Technologies used</h5>
									<ul className={styles.RendiaAchievements}>
										<li>
											Python, HTML/CSS/JS, NextJs, Google Search Console,
											Google Analytics, AWS (S3, RDS, VPS)
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* parsons */}

						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								{/* <div className={styles.imageDiv}> */}
								<div className="two columns">
									<div className={styles.imageDiv}>
										<Image src={parsons} width={50} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>Parsons</h3>
										<p className="info">
											Software Engineering Intern<span>&bull;</span>{" "}
											<em className="date">June 2022 - Present</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Developed web-based resource tracking tool for multi-member, interdisciplinary teams, incorporating SSO and aesthetic design
									</p>
									<h5>Technologies used</h5>
									<ul className={styles.RendiaAchievements}>
										<li>
											Django, Python, Bootsrap
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* rendia */}
						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								<div className="two columns">
									<div className={styles.imageDiv}>
										{/* added padding because it is a larger looking image */}
										<Image src={rendia} width={40} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>Rendia</h3>
										<p className="info">
											Software Engineering Intern <span>&bull;</span>{" "}
											<em className="date">May 2022 - August 2022</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									Worked with the engineering team to develop their patient
									education product.
									<div>
										<h5>Achievements</h5>
										<ul className={styles.RendiaAchievements}>
											<li>Assisted the team with minor bug fixes</li>
											<li>
												Developed a proof of concept HLS video streaming
												authorization protocol
											</li>
												<ul className={styles.nestedList}>
													<li>
														Studied current authorization protocol involving mp4
														video files
													</li>
													<li>
														Implemented three seperate solutions using different
														web services (
														<a href="https://bunny.net/">bunny.net</a>,{" "}
														<a href="https://www.cloudflare.com/">Cloudflare</a>
														, <a href="https://www.backblaze.com/">Backblaze</a>
														)
													</li>
													<li>
														Created and deployed python server for load testing
														the different solutions using{" "}
														<a href="https://jmeter.apache.org/">
															Apache Jmeter
														</a>
													</li>
												</ul>
											<li>
												Presented a lunch and learn talk about the rubix cube
												with <a href="/file/cube.pdf">homemade materials</a>
											</li>
										</ul>
										<h5>Technologies used</h5>
										<ul className={styles.RendiaAchievements}>
											<li>
												Python, PHP, HTML/CSS/JS , EmberJs, JMeter, Cloudflare
												workers, docker
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Pulse */}
						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								<div className="two columns">
									<div className={styles.imageDiv}>
										<Image src={pulseImage} width={100} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>Pulse Medical Transport</h3>
										<p className="info">
											EMT <span>&bull;</span>{" "}
											<em className="date">July 2021 - September 2021</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Primary provider when transporting patients to/from medical
										facilities.
									</p>
								</div>
							</div>
						</div>

						{/* sci */}
						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								<div className="two columns">
									<div className={styles.imageDiv}>
										<Image src={mdSci} width={50} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>Maryland Science Center</h3>
										<p className="info">
											Program Assistant <span>&bull;</span>{" "}
											<em className="date">November 2018 - March 2020</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Worked to organize and run overnight activities for children
										at the Maryland Science Center. Helped setup and cleanup
										science activities and snack, prepare the students for
										bedtime, and make sure children adhered to the schedule
									</p>
								</div>
							</div>
						</div>

						{/* energy */}
						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								<div className="two columns" style={{ textAlign: "center" }}>
									<div className={styles.imageDiv}>
										<Image src={dpw} width={50} />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>
											<a
												href="https://generalservices.baltimorecity.gov/energy"
												style={{ color: "black" }}
											>
												Baltimore City Energy Office
											</a>
										</h3>
										<p className="info">
											Paid Intern <span>&bull;</span>{" "}
											<em className="date">July 2019 - August 2019</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Investigated water infrastructure and methods to reduce
										water waste and energy usage in Baltimore City
									</p>
								</div>
							</div>
						</div>

						{/* codeinschools */}
						<div className="row item" style={{ padding: "20px 0 20px 0" }}>
							<div className="twelve columns">
								<div className="two columns" style={{ textAlign: "center" }}>
									<div className={styles.imageDiv}>
										<Image src={codeintheschools} width="200%" />
									</div>
								</div>
								<div className="ten columns" style={{ padding: "0px" }}>
									<div className={styles.spacingDiv}>
										<h3>
											<a
												href="https://www.linkedin.com/company/code-in-the-schools/"
												style={{ color: "black" }}
											>
												Code in the Schools
											</a>
										</h3>
										<p className="info">
											YouthWorks Summer Student <span>&bull;</span>{" "}
											<em className="date">September 2017 - July 2018</em>
										</p>
									</div>
								</div>
								<div className="twelve columns">
									<p>
										Learned JavaScript through a Baltimore City Student
										Employment Office initiative to engage students in the
										workforce
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div
						className="nine columns main-col"
						style={{ borderLeft: "3px solid #11abb0" }}
					>
						<div className="notbars">
							<h3 className="">Hard Skills</h3>
							<ul className="newskill">
								<li>Emergency Medical Technician</li>
								<li>Website Building (HTML/CSS/JS)</li>
								<li>Python</li>
								<li>Wordpress</li>
							</ul>
							<h3 className="">Soft Skills</h3>
							<ul className="newskill">
								<li>Self-motivated</li>
								<li>Hard Worker</li>
								<li>Driven</li>
								<li>Compassionate</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section id="testimonials">
				<div className="text-container">
					<div className="row">
						<div className="two columns header-col">
							<h1>
								<span>Testimonials</span>
							</h1>
						</div>

						<div className="ten columns flex-container">
							<div className="flexslider">
								<blockquote>
									<p>
										Alexis is an intelligent self-motivated young man with very
										good creative critical thinking abilities.
									</p>
									<cite>Ken Altrell - Dept of Public Works Baltimore MD</cite>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="row">
					<div className="two columns header-col">
						<h1>
							<span></span>
						</h1>
					</div>

					<div className="seven columns">
						<h2 style={{ color: "white" }}>
							<span className="lead">Contact Me</span>
						</h2>
						<p>
							<span className="lead">
								{" "}
								Email at{" "}
								<a target="_blank" href="mailto:aballo@middlebury.edu" rel="noreferrer">
									aballo@middlebury.edu
								</a>
							</span>
						</p>
					</div>

					<div className="three columns action"></div>
				</div>
			</section>
			<footer>
				<div className="row">
					<div className="twelve columns">
						<ul className="social-links">
							<li>
								<a
									href="https://www.facebook.com/profile.php?id=100010979888714"
									rel="noreferrer"
									target="_blank"
								>
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/alexis-ballo-6471191a7/"
									rel="noreferrer"
									target="_blank"
								>
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/alexisballo/"
									rel="noreferrer"
									target="_blank"
								>
									<i className="fa fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://github.com/AlexisBallo2" target="_blank" rel="noreferrer">
									<i className="fa fa-github"></i>
								</a>
							</li>
							<li>
								<a href="mailto:aballo@middlebury.edu" target="_blank" rel="noreferrer">
									<i className="fa fa-envelope"></i>
								</a>
							</li>
						</ul>

						<ul className="copyright">
							<li>&copy; Copyright 2021 AlexisBallo</li>
						</ul>
					</div>

					<div id="go-top">
						<AnchorLink className="" title="Back to Top" href="#home">
							<i className="icon-up-open"></i>
						</AnchorLink>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default HomePage;
