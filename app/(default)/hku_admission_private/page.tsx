import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Application | Hongyang Li",
    keywords: ["Application", "Hongyang Li", "HKU", "Embodied AI", "Autonomous Driving"],
};



import Link from "next/link"



export default function Home() {
    return (
        <div className="w-full">


            <div className="w-full px-6 flex justify-center mt-24 lg:mt-36">
                <div className="w-full max-w-5xl flex flex-col gap-6">
                    <div className="flex flex-col gap-6 p-6 bg-red-600/20">
                        <p className="font-bold text-red-600">
                            Limited access. Please do not distribute this page.
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full px-6 flex justify-center mt-24">
                <div className="w-full max-w-5xl flex">
                    <div className="w-full flex flex-col gap-6 border-8 border-o-dark-blue p-6 py-8">

                        <div className="flex flex-col gap-3">
                            <span>
                                Application for
                            </span>
                            <h2 className="text-o-dark-blue text-t1 font-bold">
                                PhD or MPhil (Master)
                            </h2>
                        </div>

                        <ul className="ml-6 space-y-3 list-outside list-disc">
                            <li className="leading-relaxed">
                                <b>Online Application:</b>
                                <br></br>
                                <Link href="https://gradsch.hku.hk/prospective_students/application/how_to_apply/online_application_system" target="_blank" className="text-o-blue animated-underline break-words">https://gradsch.hku.hk/prospective_students/application/how_to_apply/online_application_system</Link>
                            </li>
                            <li className="leading-relaxed">
                                <b>Admission Year and Round:</b>
                                <br></br>
                                Please refer to the timeline here: Application Period <Link href="https://gradsch.hku.hk/prospective_students/application/application_period" target="_blank" className="text-o-blue animated-underline break-words">https://gradsch.hku.hk/prospective_students/application/application_period</Link>
                            </li>
                            <li className="leading-relaxed">
                                <b>Faculty:</b>
                                <br></br>
                                Interdisciplinary Area [VF01]
                            </li>
                            <li className="leading-relaxed">
                                <b>Department:</b>
                                <br></br>
                                Data Science [VD002]
                            </li>
                            <li className="leading-relaxed">
                                <b>Proposed Supervisor:</b>
                                <br></br>
                                Hongyang Li
                            </li>
                            <li className="leading-relaxed">
                                <b>Proposed Registration Date:</b>
                                <br></br>
                                Please advise with Hongyang
                            </li>
                            <li className="leading-relaxed">
                                <b>Proposed Field of Study:</b>
                                <br></br>
                                Embodied AI, Autonomous Driving, or other research topics.
                            </li>
                            <li className="leading-relaxed">
                                <b>Apply for PGS:</b>
                                <br></br>
                                Yes
                            </li>
                            <li className="leading-relaxed">
                                <b>Apply for HKPFS:</b>
                                <br></br>
                                Please advise with Hongyang
                            </li>
                            <li className="leading-relaxed">
                                <b>[Optional]</b>
                                <br></br>
                                Prior to submission in the system, it is stronly recommended to send the application form (in merged pdf) to Hongyang to have a look.
                            </li>
                            <li className="leading-relaxed">
                                <b>[Required]</b>
                                <br></br>
                                After submission, please send the application number to Hongyang. 
                            </li>
                        </ul>

                    </div>
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
