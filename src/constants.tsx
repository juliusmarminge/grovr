import {
  AcademicCapIcon,
  BanknotesIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  FolderIcon,
  HomeIcon,
  SunIcon,
  UsersIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

const LINKS = {
  jobsURL: "https://www.linkedin.com/company/grovrtesting/jobs/",
  instagramURL: "https://www.instagram.com/grovrtesting/",
  linkedInURL: "https://www.linkedin.com/company/grovrtesting",
};

const faqClassName = "text-base leading-7 text-gray-600 text-justify";

const EventFAQS = [
  {
    question: "When will I be paid and how much?",
    answer: (
      <p className={faqClassName}>
        You will be paid after you have submitted videos for all the mentioned
        tasks and we have verified the quality of your video (ideally within 48
        hours of submission). You will be paid Rs. 1000 for this testing event.
      </p>
    ),
  },
  {
    question: "In what cases will I not be paid?",
    answer: (
      <div className={faqClassName}>
        <ol className="mx-auto ml-4 max-w-3xl list-decimal">
          <li>
            Your video and audio is low quality (please record in a quiet and
            empty room, with headphones on).
          </li>
          <li>
            Your feedback is very generic and not helpful, videos are shorter
            than 3 minutes.
          </li>
        </ol>
      </div>
    ),
  },
];

const FAQS = [
  {
    question: "What is Product Testing?",
    answer: (
      <p className={faqClassName}>
        Product testing is the process of evaluating a product’s quality,
        functionality, usability, and overall performance before it is released
        to the market. Product testing can be done through a variety of methods,
        such as user testing, focus groups, surveys, and more. The goal of
        product testing is to gather feedback and insights from real users to
        identify and address any issues or flaws in the product, as well as to
        make data-driven decisions to improve the product’s overall quality and
        user experience.
      </p>
    ),
  },
  {
    question: "Who uses Product Testing?",
    answer: (
      <div className={faqClassName}>
        <p>
          Product testing is typically opted for by companies and organizations
          involved in product development, such as:
        </p>

        <ol className="mx-auto mt-4 max-w-3xl list-decimal">
          <li>
            Product designers who want to gather feedback on their designs and
            make improvements before finalizing the product.
          </li>
          <li>
            User experience (UX) researchers who want to understand how users
            interact with products and identify areas for improvement.
          </li>
          <li>
            Software developers who want to test the functionality and usability
            of their software before releasing it to the market.
          </li>
          <li>
            Marketing and advertising agencies who want to test the
            effectiveness of their campaigns and messaging.
          </li>
          <li>
            E-commerce companies who want to test the user-friendliness and
            effectiveness of their online platforms.
          </li>
        </ol>

        <p className="mt-4">
          In addition, individual entrepreneurs, startups, and small businesses
          may also opt for user testing to gain valuable insights into how their
          products or services are perceived by their target audience.
        </p>
      </div>
    ),
  },
  {
    question: "What is GroVr Tribe?",
    answer: (
      <p className={faqClassName}>
        GroVr Tribe is a community of individuals who have signed up to
        participate in product testing for our platform. As a member of the
        testing panel, you will have the opportunity to test new products and
        services, provide valuable feedback to product designers and
        researchers, and earn rewards for your time and effort. Our testing
        panel is made up of a diverse group of individuals from all backgrounds
        and levels of experience, ensuring that our testing results accurately
        represent the perspectives of our target users.
      </p>
    ),
  },
  {
    question: "Will the client have to moderate the Focus Groups?",
    answer: (
      <p className={faqClassName}>
        It is upto the client. GroVr provides a moderator for testing events if
        required.
      </p>
    ),
  },
  {
    question: "What happens after the testing event is completed?",
    answer: (
      <p className={faqClassName}>
        After the testing event is completed by the testers, we send the video
        recording along with the transcript to the client.
      </p>
    ),
  },
  {
    question: "Will the clients have to bring their testers?",
    answer: (
      <p className={faqClassName}>
        No, GroVr has a dedicated community from which you can get the desired
        testers to test the product or service.
      </p>
    ),
  },
  {
    question:
      "What are the different demographics of the GroVr Tribe can the client choose from?",
    answer: (
      <div className={faqClassName}>
        <ul className="list-inside list-disc">
          <li>Gender</li>
          <li>Age</li>
          <li>Geographic Location</li>
          <li>Educational Background</li>
          <li>Occupation</li>
          <li>Interests</li>
        </ul>

        <p>and much more……</p>
      </div>
    ),
  },
  {
    question: "How much time does each testing event take to complete?",
    answer: (
      <div className={faqClassName}>
        <p>
          Depending on the type of testing event, each tester will take
          somewhere between 30-60 minutes.
        </p>
        <p>
          We aim to complete each testing event within 2 days of starting the
          event
        </p>
      </div>
    ),
  },
];

const eventRequirements = [
  {
    name: "Payment Method",
    icon: BanknotesIcon,
    value: "UPI/NEFT",
  },
  {
    name: "Network",
    icon: WifiIcon,
    value: "Fast Internet",
  },
  {
    name: "Education",
    icon: AcademicCapIcon,
    value: "High School",
  },
  {
    name: "Surroundings",
    icon: SunIcon,
    value: "Quiet Environment",
  },
  {
    name: "Skills",
    icon: ChatBubbleLeftEllipsisIcon,
    value: "Good Communication",
  },
];

const STATS = [
  {
    id: 1,
    label: "Tribe members",
    prepend: "",
    number: 1000,
    append: "+",
  },
  {
    id: 2,
    label: "Hours of testing",
    prepend: "",
    number: 150,
    append: "+",
  },
  {
    id: 3,
    label: "Testing events conducted",
    prepend: "",
    number: 50,
    append: "+",
  },
  {
    id: 4,
    label: "Paid out to testers",
    prepend: "$",
    number: 2500,
    append: "+",
  },
];

const phoneNumberOptions = [
  {
    flag: "🇮🇳",
    countryCode: "+91",
  },
  {
    flag: "🇺🇸",
    countryCode: "+1",
  },
  {
    flag: "🇨🇦",
    countryCode: "+1",
  },
  {
    flag: "🇦🇪",
    countryCode: "+971",
  },
  {
    flag: "🇬🇧",
    countryCode: "+44",
  },
];

const INDUSTRIES = [
  "Finance",
  "Technology, IT",
  "Marketing",
  "Banking",
  "Insurance",
  "Market Research",
  "E-Commerce",
  "Education and Training",
  "FMCG",
  "Media and Entertainment",
  "Services",
] as const;

const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5001-10000",
  "10001+",
] as const;

const TYPES_OF_TESTING = [
  "Usability Testing",
  "Bug Testing",
  "End-To-End App Testing",
  "A/B Testing",
  "Competitor Analysis",
];

const testerNavigationItems = [
  { name: "Timeline", href: "/timeline", icon: HomeIcon },
  {
    name: "Your Projects",
    href: "/projects",
    icon: FolderIcon,
  },
  {
    name: "Your Profile",
    href: "/profile",
    icon: UsersIcon,
  },
];

const companyNavigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Your Events",
    href: "/dashboard/events",
    icon: CalendarIcon,
  },
  {
    name: "Company Profile",
    href: "/profile",
    icon: UsersIcon,
  },
];

const TYPES_OF_TESTING_EVENTS = ["Focus Group", "User Testing"];

const AGE_RANGES = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

const GENDERS = ["Male", "Female", "Others"];

const EDUCATION_QUALIFICATIONS = [
  "High School",
  "Undergraduate",
  "Postgraduate",
  "PHD",
];

const CURRENT_OCCUPATIONS = [
  "Student",
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Retired",
];

const INTERESTS = [
  "Technology",
  "Sports",
  "Food",
  "Gaming",
  "YouTube",
  "Writing",
  "Entrepreneurship",
  "Finance",
  "Education",
];

const DEVICES = ["Android", "iOS", "Desktop", "Any"];

const INDIAN_STATES = [
  "Pan India",
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export {
  LINKS,
  FAQS,
  STATS,
  INDUSTRIES,
  COMPANY_SIZES,
  TYPES_OF_TESTING,
  TYPES_OF_TESTING_EVENTS,
  AGE_RANGES,
  GENDERS,
  EDUCATION_QUALIFICATIONS,
  CURRENT_OCCUPATIONS,
  INTERESTS,
  DEVICES,
  INDIAN_STATES,
  companyNavigationItems,
  testerNavigationItems,
  EventFAQS,
  eventRequirements,
  phoneNumberOptions
};
