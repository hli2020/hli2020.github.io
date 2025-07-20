import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Recruit | Hongyang Li",
    keywords: ["Recruit", "Hongyang Li", "HKU", "Embodied AI", "Autonomous Driving"],
};



import Link from "next/link"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-24 lg:mt-36">
                <div className="w-full max-w-5xl flex flex-col gap-6">
                    <p className="leading-relaxed">
                        Our research focuses on <b>Autonomous Driving, Embodied AI, and Foundation Models</b>. We are still in rapid progress toward a top-tier research group. Continuously outputting <b>high-quality</b> works and obtaining recognition from <b>international, third-party, and authorized</b> institutes are desired. Our aim is primarily to publish impactful works in top-tier conferences and journals.
                    </p>
                    <p className="leading-relaxed">
                        <b>To international students: </b>The application process is identical to domestic recruitment. We treat all applicants <b>equally</b> regardless of race, region, beliefs, and other factors.
                    </p>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#prospective" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="prospective">
                            Prospective Students
                            <span className="ml-3 hidden group-hover:inline-block size-3 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-5xl flex">
                    <ul className="ml-6 list-outside list-disc space-y-3">
                        <li className="leading-loose">Background knowledge in computer science, machine learning, robotics, physics, mathematics, or related fields</li>
                        <li className="leading-loose">Solid academic background (top-ranked universities / 双一流) and achievements (ACM / 国奖 / <i>etc.</i>)</li>
                        <li className="leading-loose">Strong research experience with publications in top-tier conferences (CVPR / RSS / <i>etc.</i>) or journals (T-PAMI / IJRR / <i>etc.</i>)</li>
                        <li className="leading-loose">Excellent programming (python / C / <i>etc.</i>) and English (TOEFL &gt; 105 / CET6 &gt; 600) skills </li>
                        <li className="leading-loose">Familiarity with tools such as PyTorch, OpenCV, ROS, Git, <i>etc.</i></li>
                        <li className="leading-loose">Full commitment to research, capable of quickly learning from new fields</li>
                        <li className="leading-loose">Hardworking or top smart (at least you should have one), passion for impactful outputs</li>
                        <li className="leading-loose">Self-motivative, responsible, reliable, and with good communication skills</li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#support" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="support">
                            Our Support
                            <span className="ml-3 hidden group-hover:inline-block size-3 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-5xl flex">
                    <ul className="ml-6 list-outside list-disc space-y-3">
                        <li className="leading-loose">Access to advanced research resources like high-performance GPUs and robotic facilities</li>
                        <li className="leading-loose">Hands-on mentorship with clear direction</li>
                        <li className="leading-loose">Collaboration with other top researchers worldwide</li>
                        <li className="leading-loose">Excellent work atmosphere</li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#position" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="position">
                            Open Positions
                            <span className="ml-3 hidden group-hover:inline-block size-3 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-5xl flex">
                    <ul className="ml-6 list-outside list-disc space-y-3">
                        <li className="leading-loose">
                            Ph.D. student / Master student / Postdoc / Research assistant @ HKU (for Ph.D. positions in Fall 2025, please consider <Link href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hong_kong_phd_fellowship_scheme" target="_blank" className="text-o-blue animated-underline">HKPFS</Link> or <Link href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hku_presidential_phd_scholar_programme" target="_blank" className="text-o-blue animated-underline">HKU Presidential Scholarship</Link>)
                        </li>
                        <li className="leading-loose">
                            Full-time employee / Intern @ Shanghai Innovation Institute (see <Link href="https://opendrivelab.com/" target="_blank" className="text-o-blue animated-underline">OpenDriveLab website</Link>)
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#contact" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="contact">
                            Contact
                            <span className="ml-3 hidden group-hover:inline-block size-3 text-foreground">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                    <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-5xl flex flex-col gap-6">
                    <p>
                        If you're interested, please drop me an email at <Link href="mailto:recruit@opendrivelab.com" target="_blank" className="text-o-blue animated-underline">recruit@opendrivelab.com</Link> with the following information:
                    </p>
                    <ul className="ml-6 list-outside list-disc space-y-3">
                        <li className="leading-loose">Subject: [Ph.D./Postdoc/RA/<i>etc.</i> Application] Name - Affiliation</li>
                        <li className="leading-loose">Curriculum vitae</li>
                        <li className="leading-loose">Transcripts</li>
                        <li className="leading-loose">Research statement (optional but recommended)</li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex justify-end">
                    <p>
                        <Link href="/" className="text-o-blue animated-underline">Back</Link>
                    </p>
                </div>
            </div>



        </div>
    )
}
