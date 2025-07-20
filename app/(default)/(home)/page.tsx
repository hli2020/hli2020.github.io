import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Hongyang Li, Assistant Professor at HKU",
    keywords: ["Hongyang Li", "HKU", "Embodied AI", "Autonomous Driving"],
};



import Image from 'next/image'
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <div className="w-full">



            <div className="w-full px-6 flex justify-center mt-24 lg:mt-36">
                <div className="w-full max-w-5xl flex flex-col gap-6 leading-relaxed">
                    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">

                        <div className="flex flex-col gap-6">

                            <h1 className="text-center text-t0 font-bold">
                                Hongyang Li
                            </h1>

                            <p>
                                Assistant Professor, Institute of Data Science, The University of Hong Kong 
                            </p>

                            <ul className="ml-6 list-outside list-disc space-y-3">
                                <li>
                                    Academic page: <Link href="https://datascience.hku.hk/people/hongyang-li/" target="_blank" className="text-o-blue animated-underline">https://datascience.hku.hk/people/hongyang-li/</Link>
                                </li>
                                <li>
                                    Email: <Link href="mailto:hongyang@hku.hk" className="text-o-blue animated-underline">hongyang@hku.hk</Link> or <Link href="mailto:hy@opendrivelab.com" className="text-o-blue animated-underline">hy@opendrivelab.com</Link>
                                </li>
                                <li>
                                    Office: Room P307B, Graduate House, 3 University Drive, HKU
                                </li>
                            </ul>

                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="/content/hongyang_li.jpg"
                                alt="Hongyang Li"
                                width={512}
                                height={512}
                                className="max-w-2xs bg-gradient-landing rounded-sm group-hover:scale-103 transition delay-100 duration-200"
                            />
                        </div>

                    </div>

                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#perspective" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="perspective">
                            Perspective Students / FTEs
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
                    <div className="flex flex-col gap-3">
                        <b className="text-o-dark-blue bg-o-blue/20 py-3 px-6">
                            We are taking in 2026 Internship. Newbies / undergraduates are welcome! Please refer to <Link href="/recruit" className="text-o-blue animated-underline">this page</Link> for more details.
                        </b>
                    </div>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-6">
                <div className="w-full max-w-5xl flex">
                    <ul className="ml-6 list-outside list-disc space-y-3">
                        <li>
                            Post-doc / Ph.D. / MPhil: please send me an email. We usually hire <Link href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hong_kong_phd_fellowship_scheme" target="_blank" className="text-o-blue animated-underline">HKPFS</Link> or <Link href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hku_presidential_phd_scholar_programme" target="_blank" className="text-o-blue animated-underline">HKU Presidential Scholarship</Link> level candidate
                        </li>
                        <li>
                            Research Assistant / Internship: please send request to <Link href="mailto:recruit@opendrivelab.com" target="_blank" className="text-o-blue animated-underline">recruit@opendrivelab.com</Link>
                        </li>
                        <li>
                            For full-time employee (FTE) at HKU  / Shanghai Innovation Institute, we would be happy to recruit Research Scientist / Engineer / Staff in Embodied AI and Autonomous Driving!
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#biography" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="biography">
                            Biography
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
                        Hongyang Li is an Assistant Professor at Musketeers Foundation Institute of Data Science, University of Hong Kong and has led OpenDriveLab (<Link href="https://opendrivelab.com/" target="_blank" className="text-o-blue animated-underline">opendrivelab.com</Link>) since 2021. His research focus is on autonomous driving and embodied AI. He led the end-to-end autonomous driving project, UniAD and won the IEEE CVPR 2023 Best Paper Award. UniAD has a tremendous impact both in academia and industry, including the recent rollout to customers by Tesla in FSD V12. He created the first large-scale real robot ecosystem, AgiBot World, that systematically investigated the scaling law principles for robotic manipulation. He proposed the bird's-eye-view perception work, BEVFormer, that won Top 100 AI Papers in 2022. He served as Area Chair for CVPR, NeurIPS (including 2023 Notable AC), ICLR, ICCV, ICML, RSS, referee for Nature Communications, Guest Editor at Automotive Innovations. He is the Working Group Chair for IEEE Standards P3474 under Vehicular Technology Society. He is the Senior Member of IEEE, CCF and CSIG. He is the recipient of China AI Wu Wen Jun Early Career Award 2024.
                    </p>
                    <details className="group inline-block">
                        <summary className="inline-block text-o-blue animated-underline hover:cursor-pointer select-none group-open:bg-foreground/6">
                            中文简介
                        </summary>
                        <p className="bg-foreground/6 pt-2 pb-2">
                            李弘扬，香港大学数据科学研究院助理教授，OpenDriveLab团队（<Link href="https://opendrivelab.com/" target="_blank" className="text-o-blue animated-underline">opendrivelab.com</Link>）联合创始人。研究方向为端到端智能系统在机器人、自动驾驶的应用。他主导的端到端自动驾驶方案UniAD于2022年提出，获IEEE CVPR 2023最佳论文奖。UniAD等系列工作产生了明显的社会经济效益，包括特斯拉于2023年推出的端到端FSD。他构造的超大规模具身智能训练场AgiBot World，是业界首个百万真机、千万仿真数据集，系统研究具身Scaling Law方法论。他提出的俯视图感知方法BEVFormer，获2022年百强影响力人工智能论文榜单，成为业界广泛使用的纯视觉检测基准。他多次担任CVPR、NeurIPS、ICLR、ICCV、ICML、RSS等国际会议领域主席（AC），其中获得NeurIPS 2023 Notable AC。他是《自然·通讯》的审稿人、期刊《Automotive Innovations》客座编委。IEEE、CCF、CSIG高级会员、IEEE汽车委员会自动驾驶国际标准工作组组长。荣获2024年中国吴文俊人工智能青年科技奖、2023年上海市东方英才计划领军项目。
                        </p>
                    </details>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#research" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="research">
                            Research
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
                        <li>
                            Focus:  AI for Robotics, Autonomous Driving, 3D Vision, Foundation Models
                        </li>
                        <li>
                            <Link href="https://scholar.google.com/citations?user=Hfrih1EAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" className="text-o-blue animated-underline">Google Scholar</Link>
                        </li>
                        <li>
                            <Link href="https://hub.hku.hk/cris/rp/rp03401" target="_blank" className="text-o-blue animated-underline">HKU Scholars Hub</Link>
                        </li>
                        <li>
                            <Link href="https://opendrivelab.com/publications/" target="_blank" className="text-o-blue animated-underline">Publications</Link> from OpenDriveLab
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#teaching" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="teaching">
                            Teaching
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
                        <li>
                            IDSS2501: Embodied AI 101
                            <br></br>
                            Time: Jul. 22 - Aug. 1, 2025,
                            <br></br>
                            Resource: <Link href="https://datascience.hku.hk/2024/12/hku-summer-institute-2025-idss-2501-welcomes-applications-from-undergraduates/" target="_blank" className="text-o-blue animated-underline">homepage</Link>
                        </li>
                        <li>
                            CCAI9025: AI-driven Robotics for Humankind
                            <br></br>
                            Time: Wed. 13:00-14:50, Sep. 01 - Nov 29, Fall 2025
                            <br></br>
                            Venue: Wang Gungwu Lecture Hall(WLGH), Graduate House
                            <br></br>
                            For: Undergraduate Year 1 or 2, to all department
                        </li>
                        <li>
                            DATA8017: Fundamentals of Autonomous Intelligent Systems
                            <br></br>
                            Time: Fri. 14:00-16:50, Sep. 01 - Nov 29, Fall 2025
                            <br></br>
                            Venue: IDS P603 Seminar Room, Graduate House 
                            <br></br>
                            For: RPg-level (MPhil or Ph.D.)
                        </li>
                    </ul>
                </div>
            </div>



            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <h2 className="text-t1"> 
                        <Link href="#talk" className="scroll-mt-32 group flex items-center text-o-dark-blue font-bold" id="talk">
                            Talk
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
                <ul className="px-6 list-outside list-disc w-full max-w-5xl grid gap-y-6 gap-x-12 grid-cols-1 lg:grid-cols-2">



                    <li>
                        <p>
                            Talk on "What are Good (Pre-training) Representations for Robotic Manipulation?", 
                            TU Delft, Netherlands,
                            July 2024,
                            in conjunction with RSS 2024. <Link href="/content/TUDelft_Talk_MPI.pdf" target="_blank" className="text-o-blue animated-underline">slides</Link>
                        </p>
                        <div className="max-w-xl">
                            <AspectRatio ratio={16/9} className="rounded-sm overflow-hidden bg-gradient-landing mt-3">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/reNxFagbDoU?si=6DYDlydCF2X_NsaC"
                                    title="YouTube video player"
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </div>
                    </li>



                    <li>
                        <p>
                            Talk on "Could Foundation Models really resolve End-to-end Autonomy?",
                            Tutorial on <Link href="https://wayve.ai/cvpr-e2ead-tutorial/" target="_blank" className="text-o-blue animated-underline">End-to-End Autonomy: A New Era of Self-Driving</Link>, 
                            CVPR 2024, Seattle, USA. <Link href="/content/Wayve_Tutorial_CVPR2024_Hongyang.pdf" target="_blank" className="text-o-blue animated-underline">slides</Link>
                        </p>
                        <div className="max-w-xl">
                            <AspectRatio ratio={16/9} className="rounded-sm overflow-hidden bg-gradient-landing mt-3">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/8XOpjf6jAxg?si=cICeweE2s3TpQIzC&amp;start=2677"
                                    title="YouTube video player"
                                    allowFullScreen
                                />
                            </AspectRatio>
                        </div>
                    </li>



                </ul>
            </div>



        </div>
    )
}
