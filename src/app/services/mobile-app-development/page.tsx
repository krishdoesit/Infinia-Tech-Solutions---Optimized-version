import { Metadata } from "next";
import SelectedText from "@/components/Animation/SelectedText";
import Solution from "@/components/Cards/Solution";
import SectionDivider from "@/components/Sections/Divider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/Cards/TechStack";
import Steps from "@/components/Cards/Steps";
import MobileIcon from "@/components/Icons/Filled/Mobile";
import PaintIcon from "@/components/Icons/Filled/Paint";
import ArrowUpIcon from "@/components/Icons/Filled/ArrowUp";
import CheckReadIcon from "@/components/Icons/Filled/CheckRead";
import CodeIcon from "@/components/Icons/Filled/Code";
import DialogIcon from "@/components/Icons/Filled/Dialog";

export const metadata: Metadata = {
    title: "Mobile App Development",
    description: "We create user-friendly mobile applications for iOS and Android platforms that drive user engagement and achieve business goals.",
};

const steps = [
    {
        number: 1,
        title: "Discovery and Planning",
        description: "We begin every web development project with a thorough discovery phase to understand your business goals, target audience, and technical requirements. Our team works closely with you to define the project scope, establish timelines, analyze technical feasibility, and create a detailed roadmap.",
        list: ["Initial consultation to gather requirements", "Define objectives, scope, and timeline", "Conduct feasibility study or technical analysis", "Create a project roadmap and budget estimation"],
        side: "left",
        image: "/assets/images/approach/planning.jpg",
    },
    {
        number: 2,
        title: "Design and Prototyping",
        description: "We develop wireframes and user flows, create design mockups or prototypes, and gather client feedback to refine designs. We ensure the design is not only visually appealing but also functional and user-friendly. This ensures we create a solution that meets your needs and exceeds expectations.",
        list: ["Develop wireframes and user flows", "Create design mockups or prototypes", "Gather client feedback and refine designs"],
        side: "right",
        image: "/assets/images/approach/design.jpg",
    },
    {
        number: 3,
        title: "Development",
        description: "We develop wireframes and user flows, create design mockups or prototypes, and gather client feedback to refine designs. We ensure the design is not only visually appealing but also functional and user-friendly. This ensures we create a solution that meets your needs and exceeds expectations.",
        list: ["Front-end and back-end development", "Regular progress updates and client check-ins", "Integration with third-party services, APIs, and databases"],
        side: "left",
        image: "/assets/images/approach/development.jpg",
    },
    {
        number: 4,
        title: "Testing and Quality Assurance",
        description: "We conduct thorough testing to ensure the website is functional, secure, and meets all performance standards. This includes testing on different browsers and devices to ensure compatibility and responsiveness. This ensures we create a solution that meets your needs and exceeds expectations.",
        list: ["Conduct functional, performance, and security testing", "Gather feedback through beta testing (if applicable)", "Fix any identified issues and refine the product"],
        side: "right",
        image: "/assets/images/approach/testing.jpg",
    },
    {
        number: 5,
        title: "Deployment and Launch",
        description: "We set up hosting and domain, publish the app to relevant app stores, and ensure a smooth transition to the live environment. This ensures your website is accessible to users and performs optimally. This ensures we create a solution that meets your needs and exceeds expectations.",
        list: ["Set up hosting and domain (for web projects)", "Publish the app to relevant app stores", "Ensure smooth transition to the live environment"],
        side: "left",
        image: "/assets/images/approach/deployment.jpg",
    },
    {
        number: 6,
        title: "Support and Maintenance",
        description: "We provide ongoing support and maintenance to ensure your website remains secure, up-to-date, and performs optimally. This includes regular updates, bug fixes, and monitoring to address any issues that arise. This ensures we create a solution that meets your needs and exceeds expectations.",
        list: ["Regular updates and bug fixes", "Performance monitoring and scaling as needed", "Additional features or modifications based on client feedback"],
        side: "right",
        image: "/assets/images/approach/support.jpg",
    },
];

const solutions = [
    {
        title: "Native App Development",
        description: "Developing applications specifically for iOS and Android platforms, ensuring optimal performance and user experience.",
        icon: <MobileIcon />,
    },
    {
        title: "Custom Mobile App Development",
        description: "Tailored applications designed to meet specific business needs, integrating advanced features and functionalities.",
        icon: <MobileIcon />,
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
        icon: <PaintIcon />,
    },
    {
        title: "App Maintenance & Upgrades",
        description: "Regular updates, bug fixes, and performance improvements to keep your app running smoothly and secure.",
        icon: <ArrowUpIcon />,
    },
    {
        title: "App Testing & Quality Assurance",
        description: "Conducting thorough testing to ensure your app is reliable, secure, and meets all functional requirements.",
        icon: <CheckReadIcon />,
    },
    {
        title: "Enterprise Mobile Solutions",
        description: "Tailored solutions for large-scale enterprise applications, ensuring seamless integration and scalability.",
        icon: <MobileIcon />,
    },
    {
        title: "Integration Services",
        description: "Seamlessly connect your mobile app with third-party platforms, such as payment gateways, CRMs, or social media tools.",
        icon: <CodeIcon />,
    },
    {
        title: "Consulting Services",
        description: "Expert guidance on mobile app development best practices, technology choices, and strategic planning.",
        icon: <DialogIcon />,
    },
];

const techStacks = [
    {
        name: "Flutter",
        image: "/assets/images/technology/flutter.png",
    },
    {
        name: "React Native",
        image: "/assets/images/technology/react.png",
    },
    {
        name: "Swift",
        image: "/assets/images/technology/swift.png",
    },
    {
        name: "Kotlin",
        image: "/assets/images/technology/kotlin.png",
    },
    {
        name: "Firebase",
        image: "/assets/images/technology/firebase.png",
    },
    {
        name: "AWS Amplify",
        image: "/assets/images/technology/aws.png",
    },
];

const MobileAppDevelopment = () => {
    return (
        <>
            <div className="flex flex-col-reverse gap-10 px-6 pb-4 pt-10 md:gap-4 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 md:p-6 lg:w-3/5">
                    <h2 className="text-3xl font-bold !leading-snug text-gray-700 md:text-4xl xl:text-5xl">
                        Creating User-Friendly <SelectedText text="Mobile Applications" /> For iOS And Android.
                    </h2>
                    <p>We build innovative mobile applications that drive user engagement, increase brand loyalty, and achieve business goals. From concept to launch, our team creates user-friendly, high-performance apps for iOS and Android.</p>
                    <div className="mt-4 flex gap-4 md:mt-8">
                        <Button color="primary" radius="full" as={Link} href="/contact">
                            Get Service
                        </Button>
                        <Button variant="flat" className="bg-gray-200" radius="full" as={Link} href="/about">
                            About Us
                        </Button>
                    </div>
                </div>
                <div className="w-full shrink-0 lg:w-2/5">
                    <Image src="/assets/images/services/app-development.png" alt="About" width={1000} height={1000} className="my-auto h-auto w-full" />
                </div>
            </div>
            <SectionDivider />

            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 mb-8 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                    Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Approach</span>: Phases and Process
                    </h2>
                    <p className="text-center text-gray-600">How we work to deliver the best web development solutions.</p>
                </div>
                {steps.map((step) => (
                    <Steps key={step.number} number={step.number} title={step.title} description={step.description} list={step.list} side={step.side as "left" | "right"} image={step.image} />
                ))}
            </div>

            <SectionDivider />
            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                        Our <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Mobile App Development</span> Solutions
                    </h2>
                    <p className="text-center text-gray-600">We offer a range of solutions to meet your unique needs and deliver exceptional results.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {solutions.map((solution) => (
                        <Solution key={solution.title} title={solution.title} description={solution.description} icon={solution.icon} />
                    ))}
                </div>
            </div>
            <SectionDivider />
            <div className="flex flex-col gap-10 px-6">
                <div className="mx-3 flex flex-col items-center gap-2 sm:mx-8">
                    <h2 className="text-center text-4xl font-bold text-gray-700">
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Tech Stack</span> We Leverage
                    </h2>
                    <p className="text-center text-gray-600">We use the latest technologies and tools to build and drive growth.</p>
                </div>
                <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8">
                    {techStacks.map((techStack) => (
                        <TechStack key={techStack.name} name={techStack.name} image={techStack.image} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileAppDevelopment;
