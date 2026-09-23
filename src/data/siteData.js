// Single source of editable conference content.
// Migrated from data/site-data.js (window.siteData) to an ES module.
// Edit values here — all pages re-render automatically.
export const siteData = {
  isDraft: false,
  conference: {
    shortName: "ICETET-2027",
    fullTitle: "International Conference on Emerging Trends in Engineering and Technology",
    tagline: "A two-day international forum for engineering research, innovation, and collaboration.",
    edition: "2027",
    dates: "19–20 February 2027",
    startDateTime: "2027-02-19T09:00:00+05:30",
    venue: "SRMS College of Engineering & Technology (SRMS CET)",
    city: "Bareilly, Uttar Pradesh, India",
    organizingDepartment: "Department of Electronics & Communication Engineering, Electrical & Electronics Engineering, and Mechanical Engineering, SRMS CET, Bareilly",
    format: "Two-day international conference"
  },
  partner: {
    name: "NIELIT",
    fullName: "National Institute of Electronics & Information Technology, Ministry of Electronics & Information Technology, Government of India",
    about: "NIELIT supports education, training, research, and capacity building in electronics, information technology, and emerging digital technologies.",
    logo: "assets/images/logo-nielit.png"
  },
  hostInstitute: {
    name: "Shri Ram Murti Smarak College of Engineering & Technology, Bareilly",
    shortName: "SRMS CET, Bareilly",
    about: "SRMS CET, Bareilly brings together engineering education, applied research, and industry-oriented learning across core and emerging technology domains.",
    profile: [
      "Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly is the host institution of ICETET-2027. Established and run by the Shri Ram Murti Smarak Trust, the institute is approved by the All India Council for Technical Education (AICTE), New Delhi and is affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.",
      "Located at Ram Murti Puram on the Bareilly–Nainital Road, SRMS CET brings together engineering education, applied research, and industry-oriented learning across core and emerging technology domains, and provides the academic venue and organizing foundation for ICETET-2027."
    ],
    website: "https://srms.ac.in/cet/",
    logo: "assets/images/logo-srms.png",
    logoLight: "assets/images/logo-host.png"
  },
  departmentsIntro: "ICETET-2027 is jointly organized by three academic departments of Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly, bringing together expertise across electrical and electronics engineering, electronics and communication engineering, and mechanical engineering.",
  departments: [
    { code: "EEE", name: "Electrical & Electronics Engineering", description: "The Department of Electrical & Electronics Engineering at SRMS CET provides academic and practical exposure in electrical and electronics engineering, with emphasis on contemporary technologies, power systems, electronics, control, and emerging engineering applications.", url: "https://srms.ac.in/cet/department-of-electrical-and-electronics-engineering/", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M13 2 5 13h6l-1 9 9-12h-6l0-8Z' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>" },
    { code: "EC", name: "Electronics & Communication Engineering", description: "The Department of Electronics & Communication Engineering at SRMS CET focuses on electronics, communication systems, embedded technologies, signal processing, wireless technologies, and emerging areas of electronics and communication engineering.", url: "https://srms.ac.in/cet/department-of-electronics-and-communication-engineering/", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 9a11 11 0 0 1 16 0M7 12a7 7 0 0 1 10 0M10 15a3 3 0 0 1 4 0M12 18h.01' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>" },
    { code: "ME", name: "Mechanical Engineering", description: "The Department of Mechanical Engineering at SRMS CET provides a foundation in mechanical engineering along with practical learning, research, innovation, design, manufacturing, and emerging mechanical engineering applications.", url: "https://srms.ac.in/cet/department-of-mechanical-engineering/", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8M8 8h8v8H8z' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>" }
  ],
  about: {
    description: [
      "The International Conference on Emerging Trends in Engineering and Technology (ICETET-2027) is a two-day international forum organized by the Department of Electronics & Communication Engineering, Electrical & Electronics Engineering, and Mechanical Engineering, SRMS CET, Bareilly, in association with NIELIT (National Institute of Electronics & Information Technology, Ministry of Electronics & Information Technology, Government of India).",
      "ICETET-2027 aims to bring together academicians, researchers, industry professionals, scientists, and students from across the globe to exchange ideas, share research findings, and discuss recent advancements and future directions in engineering and technology.",
      "The conference provides a multidisciplinary platform to foster innovation, collaboration, and knowledge dissemination across core and emerging engineering domains. It covers contemporary and future-oriented research areas, emphasizing theoretical developments and practical industrial applications."
    ],
    objectives: ["Exchange research findings and future directions in engineering and technology.", "Foster innovation, collaboration, and knowledge dissemination.", "Connect theoretical developments with practical industrial applications.", "Build a multidisciplinary platform for academicians, researchers, industry, scientists, and students."],
    whoShouldAttend: ["Academicians and researchers", "Industry professionals and scientists", "Research scholars and students", "Engineering practitioners and technology innovators"],
    hostNote: "ICETET-2027 is an international conference organized by Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly, and jointly hosted by the Departments of Electrical & Electronics Engineering, Electronics & Communication Engineering, and Mechanical Engineering."
  },
  speakers: [
    { name: "KEYNOTE SPEAKER 01", designation: "Coming Soon", organization: "", photo: "" },
    { name: "KEYNOTE SPEAKER 02", designation: "Coming Soon", organization: "", photo: "" },
    { name: "KEYNOTE SPEAKER 03", designation: "Coming Soon", organization: "", photo: "" }
  ],
  tracks: [
    { title: "Mechanical Systems and Advanced Manufacturing", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8M8 8h8v8H8z' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Design, Analysis, and Optimization of Mechanical Systems", "Advanced Manufacturing Processes", "Additive Manufacturing", "CAD/CAM/CAE", "Smart Manufacturing", "Industry 4.0 and Digital Manufacturing Technologies"] },
    { title: "Electrical Power and Energy Systems", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M13 2 5 13h6l-1 9 9-12h-6l0-8Z' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Power Generation, Transmission, and Distribution", "Renewable and Sustainable Energy Systems", "Smart Grids", "Power Electronics", "Electric Vehicles", "Energy Storage and Management Systems"] },
    { title: "RF and Microwave Communication Technology", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 9a11 11 0 0 1 16 0M7 12a7 7 0 0 1 10 0M10 15a3 3 0 0 1 4 0M12 18h.01' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Electromagnetic Interference and Electromagnetic Compatibility (EMI/EMC)", "5G, 6G and Beyond", "MIMO and Massive MIMO", "Satellite and Aerospace", "Advanced Antenna Design", "Wearable and Flexible Antenna", "Microwave Circuits", "RADAR and SONAR", "Intelligent Surfaces"] },
    { title: "Electronic Devices and VLSI Technologies", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M7 7h10v10H7zM4 9h3m-3 3h3m-3 3h3m10-6h3m-3 3h3m-3 3h3M9 4v3m3-3v3m3-3v3m-6 13v-3m3 3v-3m3 3v-3' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Next Generation Transistors", "Spintronics", "CMOS Technology", "Wide Band Gap Semiconductors", "Low Power Energy Efficient VLSI Devices", "Analog IC and Mixed Signal Circuits", "System on Chip", "Future Computing Architecture"] },
    { title: "Automation, Robotics, and Control", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='3' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M12 3v6m0 6v6M3 12h6m6 0h6' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Industrial Automation", "Robotics and Autonomous Systems", "Control Theory", "PLC and SCADA Systems", "Intelligent Control", "Human-Machine Interaction", "Mechatronics"] },
    { title: "Systems Modeling and Simulation", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z M4 7.5l8 4.5 8-4.5M12 12v9' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Mathematical Modeling", "System Dynamics", "Numerical Methods", "Simulation Tools", "Digital Twins", "Multi-Physics and Multi-Domain Simulations"] },
    { title: "Signal Processing, Instrumentation and Measurements", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M3 12h3l2-7 4 14 2-7h7' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Audio, Speech and Language Processing", "Biomedical Signal and Image Processing", "Sensors and Transducers", "Measurement Techniques", "Biomedical Instrumentation", "Industrial Instrumentation", "Calibration and Testing", "Smart Sensing Systems"] },
    { title: "Materials, Machines, and Smart Devices", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m12 3 8 5v8l-8 5-8-5V8l8-5Zm0 0v8m8-3-8 5-8-5m8 5v8' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Advanced and Smart Materials", "Composites", "MEMS/NEMS", "Machine Design", "Smart Devices and Actuators", "Material Characterization and Applications", "High Frequency Materials"] },
    { title: "AI, ML, IoT, and Emerging Computing Paradigms", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='12' cy='12' r='3' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M12 3v6m0 6v6M3 12h6m6 0h6' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Artificial Intelligence and Machine Learning", "Internet of Things", "Edge and Cloud Computing", "Big Data Analytics", "Blockchain", "Quantum and Neuromorphic Computing"] },
    { title: "Sustainable Engineering Practices", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 10-5 10-15ZM4 21c2-5 6-8 11-10' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Green Technologies", "Sustainable Manufacturing", "Energy-Efficient Systems", "Environmental Engineering", "Waste Management", "Circular Economy and Climate-Resilient Engineering"] },
    { title: "Intelligent Networking and Cyber-Physical Systems", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><circle cx='5' cy='12' r='2' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='19' cy='6' r='2' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='19' cy='18' r='2' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='m7 11 10-4M7 13l10 4' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Smart Networks", "Cyber-Physical Systems", "Industrial IoT", "Network Security", "Intelligent Transportation Systems", "Real-Time and Distributed Systems"] },
    { title: "Modern Computational Techniques", icon: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M4 5h16v14H4zM8 9h8M8 13h5M8 17h8' fill='none' stroke='currentColor' stroke-width='1.5'/></svg>", topics: ["Computational Intelligence", "Optimization Algorithms", "Numerical and Soft Computing Methods", "High Performance Computing", "Data-Driven Engineering Solutions"] }
  ],
  authorGuidelines: ["Full papers should follow the official conference template.", "Abstracts should include relevant keywords and complete author affiliations.", "Submissions must be original and unpublished.", "Authors should ensure that their submissions meet the conference's originality and plagiarism requirements.", "Submission Portal: Coming Soon"],
  importantDates: [
    { label: "Paper Submission Deadline", date: "2 November 2026", iso: "2026-11-02T23:59:00+05:30" },
    { label: "Notification of Acceptance", date: "23 November 2026", iso: "2026-11-23T23:59:00+05:30" },
    { label: "Camera Ready Submission", date: "23 December 2026", iso: "2026-12-23T23:59:00+05:30" },
    { label: "Registration Deadline", date: "25 January 2027", iso: "2027-01-25T23:59:00+05:30" },
    { label: "Conference Dates", date: "19–20 February 2027", iso: "2027-02-19T09:00:00+05:30" }
  ],
  committee: [
    { group: "Chief Patron", members: [{ name: "Prof. (Dr.) J.P. Pandey", designation: "Vice Chancellor, AKTU Lucknow", photo: "assets/images/committee-jp-pandey.webp" }, { name: "Shri Dev Murti", designation: "Chairman, SRMS Trust", photo: "assets/images/committee-dev-murti.webp" }] },
    { group: "Patron", members: [{ name: "Shri Aditya Murti", designation: "Secretary, SRMS Trust", photo: "assets/images/committee-aditya-murti.webp" }, { name: "Er. Subhash Mehra", designation: "Trust Advisor, SRMS Trust", photo: "assets/images/committee-subhash-mehra.webp" }] },
    { group: "Director Conference", members: [{ name: "Prof. (Dr.) Prabhakar Gupta", designation: "Principal, SRMS CET, Bareilly", photo: "assets/images/committee-prabhakar-gupta.webp" }] },
    { group: "Organizing Chair", members: [{ name: "Prof. (Dr.) Anuj Kumar", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-anuj-kumar.webp" }, { name: "Dr. Shailesh Kumar", designation: "SRMS CET&R, Bareilly", photo: "assets/images/committee-shailesh-kumar.webp" }, { name: "Prof. (Dr.) Ritu Singh", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-ritu-singh.webp" }, { name: "Er. Ravi Rastogi", designation: "Scientist-D, NIELIT", photo: "assets/images/committee-ravi-rastogi.webp" }] },
    { group: "Convener", members: [{ name: "Dr. Sovan Mohanty", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-sovan-mohanty.webp" }, { name: "Dr. Rajesh Kumar", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-rajesh-kumar.webp" }, { name: "Dr. Ravindra Kumar", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-ravindra-kumar.webp" }] },
    { group: "Co-Convener", members: [{ name: "Dr. Avtaar Singh", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-avtaar-singh.webp" }, { name: "Ms. Smita Dinkar", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-smita-dinkar.webp" }, { name: "Ms. Parul Dixit", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-parul-dixit.webp" }] },
    { group: "Organizing Secretary", members: [{ name: "Er. Vivek Yadav", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-vivek-yadav.webp" }, { name: "Mr. Shashank Mishra", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-shashank-mishra.webp" }, { name: "Dr. Satya Dev", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-satya-dev.webp" }] },
    { group: "Organizing Committee", members: [{ name: "Er. Anuj Agarwal", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-anuj-agarwal.webp" }, { name: "Er. Preeti Verma", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-preeti-verma.webp" }, { name: "Er. Mahendra Singh", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-mahendra-singh.webp" }, { name: "Er. Sumbul", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-sumbul.webp" }, { name: "Er. Dipti Nigam", designation: "SRMS CET, Bareilly", photo: "" }, { name: "Er. Amit Kumar", designation: "SRMS CET, Bareilly", photo: "" }, { name: "Er. Madhur Sharma", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-madhur-sharma.webp" }, { name: "Er. Ashwani Kumar", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-ashwani-kumar.webp" }, { name: "Er. Sakshi Tiwari", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-sakshi-tiwari.webp" }, { name: "Dr. Pradeep Kr. Yadav", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-pradeep-yadav.webp" }, { name: "Dr. Pushpendra Yadav", designation: "SRMS CET, Bareilly", photo: "assets/images/committee-pushpendra-yadav.webp" }] },
    {
      group: "National Committee",
      members: [
        ["Dr. Chandan Kumar Sarkar", "Retd. Professor, Jadavpur University & Chair, IEEE Kolkata Section, Kolkata"], ["Dr. Angsuman Sarkar", "Professor, Kalyani Government Engineering College; Immediate Past Chair, IEEE EDS Kolkata Chapter; SMIEEE"], ["Dr. Saurabh Chaudhury", "Professor, NIT Silchar, Assam; SMIEEE"], ["Dr. Savitesh Madhulika Sharma", "Professor, CVV Institute of Science and Technology, Chinmaya Vishwa Vidyapeeth, Ernakulam, Kerala"], ["Dr. Kulbir Singh", "Professor & Head, Assoc. Dean (Sustainability), Thapar University, Patiala"], ["Dr. B. Mohapatra", "Professor and R&D, Greater Noida Institute of Technology, Greater Noida"], ["Dr. R. Balachandran", "Department of ECE, RMK Engineering College, Chennai"], ["Dr. Pavitra Singh", "Department of Mechanical Engineering, NIAMT Ranchi"], ["Dr. Narendra Kumar", "Department of Industrial and Production Engineering, NIT Jalandhar, Punjab"], ["Dr. Ankit Sahai", "Department of Mechanical Engineering, Faculty of Engineering, Dayalbagh Educational Institute (Deemed to be University), Agra"], ["Prof. Rajeev Srivastava", "Department of Mechanical Engineering, MNNIT Allahabad"], ["Dr. Manoj Kumar Gupta", "Department of Mechanical Engineering, MMMUT Gorakhpur"], ["Dr. Gunjan Soni", "Department of Mechanical Engineering, MNIT Jaipur"], ["Dr. Sudhir Kumar Pathak", "Scientist, DST Delhi"], ["Dr. Ajay Bharti", "Department of Mechanical Engineering, MNNIT Allahabad"], ["Dr. Himanshu Bisaria", "Banda University of Agriculture and Technology, Banda, UP"], ["Dr. Rabindra Kumar Patel", "Department of Mechanical Engineering, MNNIT Allahabad"], ["Dr. Jagadish Chandra Mohanta", "Department of Mechanical Engineering, MNNIT Allahabad"], ["Dr. Ashwini Kumar Yadav", "Department of Mechanical Engineering, MNNIT Allahabad"], ["Dr. Rahul Dev", "Department of Mechanical Engineering, MNNIT Allahabad"]
      ].map(([name, designation]) => ({ name, designation, photo: "" }))
    },
    {
      group: "International Committee",
      members: [
        ["Dr. Demissie Jobir Gelmecha", "Associate Professor, Adama Science and Technology University, Adama, Ethiopia", "🇪🇹"], ["Dr. Viranjay Mohan Srivastava", "Professor, University Teaching Faculty, Birmingham, United Kingdom", "🇬🇧"], ["Dr. Kinde Anlay Fante", "ONISILOS MSCA COFUND Fellow, University of Cyprus, Cyprus", "🇨🇾"], ["Dr. Ajaypal Singh Dhillon", "McGill University, Montreal, Quebec, Canada", "🇨🇦"], ["Dr. Tadesse Hailu", "Associate Dean, Adama Science and Technology University, Adama, Ethiopia", "🇪🇹"], ["Prof. Muhammad Anisuzzaman Talukder", "Department of Electrical and Electronic Engineering, Bangladesh University of Engineering and Technology, Dhaka, Bangladesh", "🇧🇩"], ["Dr. Shohel Sayeed", "Multimedia University, Malaysia", "🇲🇾"], ["Dr. Bhadra Pokharel", "Professor, Materials Science and Engineering Program, Department of Physics, Pulchowk Campus, Institute of Engineering, Nepal; IEEE ED Nepal Chapter Chair", "🇳🇵"], ["Dr. Shimelis Lemma", "Dean, College of Mechanical, Chemical and Materials Engineering, Adama Science and Technology University, Adama, Ethiopia", "🇪🇹"], ["Dr. Getinet Asrat Mengesha", "Associate Professor, Wolaita Sodo University, Ethiopia", "🇪🇹"], ["Dr. Gulam Mohammed Sayeed Ahmed", "Associate Professor, Adama Science and Technology University, Adama, Oromia, Ethiopia", "🇪🇹"]
      ].map(([name, designation, flag]) => ({ name, designation, photo: "", flag }))
    }
  ],
  registration: {
    fees: [
      { category: "Student / Research Scholar", indian: "₹3,000", foreign: "₹6,000" },
      { category: "Faculty", indian: "₹4,000", foreign: "₹8,000" },
      { category: "Industry Participant", indian: "₹5,000", foreign: "₹10,000" },
      { category: "Attendee", indian: "₹2,000", foreign: "₹4,000" }
    ],
    paymentDetails: "Payment details and registration instructions will be announced soon.",
    formLink: "",
    feeNote: "Registration fee is non-refundable.",
    includes: ["Access to technical sessions and invited talks", "Conference programme and digital participation material", "Certificate of participation or presentation, as applicable"],
    steps: ["Complete the registration form with accurate participant and paper details.", "Make payment using the official payment instructions.", "Upload payment proof as requested by the organizers.", "Retain the confirmation message and bring identification to the conference."]
  },
  publication: ["Selected papers may be considered for publication in reputed journals or conference proceedings.", "Additional publication opportunities will be announced after peer review.", "Publication is subject to scope, quality, originality, formatting, and publisher requirements."],
  gallery: ["assets/images/gallery-01.webp", "assets/images/gallery-02.webp", "assets/images/gallery-03.webp", "assets/images/gallery-04.webp", "assets/images/gallery-05.webp", "assets/images/gallery-06.webp", "assets/images/gallery-07.webp", "assets/images/gallery-08.webp", "assets/images/gallery-09.webp", "assets/images/gallery-10.webp", "assets/images/gallery-11.webp", "assets/images/gallery-12.webp", "assets/images/gallery-13.webp", "assets/images/gallery-14.webp", "assets/images/gallery-15.webp"],
  contact: { address: "SRMS College of Engineering & Technology (SRMS CET), Bareilly, Uttar Pradesh, India", phones: ["+91-581-2582030"], emails: ["cet@srmscet.edu"], mapEmbedUrl: "https://www.google.com/maps?q=Shri+Ram+Murti+Smarak+College+of+Engineering+and+Technology,+Ram+Murti+Puram,+Bareilly-Nainital+Road,+Bhojipura,+Bareilly+243202,+Uttar+Pradesh,+India&output=embed", mapLink: "https://www.google.com/maps/search/?api=1&query=Shri+Ram+Murti+Smarak+College+of+Engineering+%26+Technology+Ram+Murti+Puram+Bareilly" },
  social: { facebook: "", twitter: "", linkedin: "", instagram: "", youtube: "" },
  submissionLink: ""
};

export default siteData;
