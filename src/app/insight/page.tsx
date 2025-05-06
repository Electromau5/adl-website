"use client";

export default function InsightPage() {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Title and Intro */}
        <h1 className="text-4xl font-bold leading-tight mb-6">
          Redesigning How Educators Access & Act on Student Insights
        </h1>
        <p className="text-lg text-gray-700 mb-12">
        {"District administrators and educators rely on complex data to support students—but too often, crucial trends remain buried under charts, filters, and dashboards. Insight is changing that.\n\nThrough its Key Insights feature, the platform uses AI to generate natural-language summaries and targeted recommendations for each dataset—helping users quickly understand what's happening, why it matters, and what actions to take."}
          <br /><br />
          {"Through its Key Insights feature, the platform uses AI to generate natural-language summaries and targeted recommendations for each dataset—helping users quickly understand what's happening, why it matters, and what actions to take."}
        </p>

        {/* Full-bleed cover image */}
        <img
          src="/images/insight/cover.png"
          alt="INSIGHT Cover"
          className="w-full max-w-[600px] mx-auto rounded-lg"
        />


        {/* Sections */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* My Primary Role */}
            <div>
              <h2
                className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-6"
                style={{ color: '#1976D2' }}
              >
                Our Primary Role
              </h2>
              <ul className="space-y-6 text-gray-800">
                <li>
                  <h3 className="font-semibold">AI-Enhanced UX Strategy</h3>
                  <p>
                    Led the integration of AI across key workflows, designing intelligent features that adapt to user behavior and deliver contextual insights in real-time.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Insight-Driven Design</h3>
                  <p>
                    Conducted in-depth analysis using platform data and usability research to identify friction points and optimize AI recommendations for caseworkers and admins.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">System Thinking & Scalability</h3>
                  <p>
                    Designed modular components and workflows that allowed AI-generated insights to scale across multiple views, reports, and user personas with minimal friction.
                  </p>
                </li>
              </ul>
            </div>

            {/* Project Impact */}
            <div>
              <h2
                className="text-xl font-semibold uppercase tracking-wide border-b pb-2 mb-6"
                style={{ color: '#1976D2' }}
              >
                Project Impact
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-gray-800">
                {[
                  { value: '15%', label: 'Reduction in chronic absenteeism through early intervention strategies' },
                  { value: '10%', label: 'Increase in student engagement by providing personalized learning insights' },
                  { value: '25%', label: 'Faster identification of at-risk students using AI-driven attendance and behavioral pattern analysis' },
                  { value: '20%', label: 'Improvement in course enrollment efficiency by predicting student demand for advanced courses' },
                  { value: '30%', label: 'Reduction in administrative workload with automated attendance tracking and reporting' },
                  { value: '50%', label: 'Increase in intervention success rates by leveraging predictive analytics for student support' },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl font-bold" style={{ color: '#1976D2' }}>
                      {stat.value}
                    </p>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Problem + Solution */}
            <div>
              {/* The Problem */}
              <div className="mb-12">
                <h2
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                  style={{ color: '#1976D2' }}
                >
                  The Problem
                </h2>
                <hr className="mb-6 border-gray-300" />
                <h3 className="text-3xl font-bold mb-4">
                  Crucial Insights get Buried Deep
                </h3>
                <p className="text-gray-700">
                  Schools and districts struggle with fragmented data systems that fail to provide real-time insights into attendance patterns, course enrollment trends, and student engagement. Without a centralized and predictive analytics platform, educators face difficulties in identifying at-risk students, optimizing course planning, and implementing timely interventions. These gaps result in increased absenteeism, inefficient resource allocation, and missed opportunities to support student success.
                </p>
              </div>

              {/* The Proposed Solution */}
              <div>
                <h2
                  className="text-sm font-semibold uppercase tracking-wide mb-2"
                  style={{ color: '#1976D2' }}
                >
                  The Proposed Solution
                </h2>
                <hr className="mb-6 border-gray-300" />
                <h3 className="text-3xl font-bold mb-4">The Data needs to Enforce Quick Actions</h3>
                <p className="text-gray-700">
                  Insight AI leverages AI-powered analytics to transform raw student data into actionable insights. By integrating attendance tracking, predictive course planning, school climate analysis, and custom group management, the platform empowers educators to make informed decisions. AI-driven recommendations help schools intervene early, improve student engagement, and allocate resources more effectively—ultimately driving better academic outcomes.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex flex-col justify-center items-center h-full gap-6">
              <img
                src="/images/insight/user-research-1.png"
                alt="WIC Family Interaction"
                className="w-full max-w-sm object-cover flex-1 rounded-t-xl"
              />
              <img
                src="/images/insight/user-research-2.png"
                alt="WIC Family Interaction 2"
                className="w-full max-w-sm object-cover flex-1 rounded-b-xl"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-4xl">
            <h2
              className="text-sm font-semibold uppercase tracking-wide mb-2"
              style={{ color: '#1976D2' }}
            >
              Design Process
            </h2>
            <div className="w-[120%]">
              <img
                src="/images/insight/design-process.png"
                alt="Design Process Illustration"
                className="w-full mx-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2
                className="text-sm font-semibold uppercase tracking-wide mb-2"
                style={{ color: '#1976D2' }}
              >
                User Research 
              </h2>
              <hr className="mb-6 border-gray-300" />
              <h3 className="text-3xl font-bold mb-4">
                Understanding Friction, Gaps, and Missed Opportunities in Student Data
              </h3>
              <p className="text-gray-700 mb-10">
                We conducted 12+ interviews and multiple contextual inquiry sessions with school administrators, academic counselors, and district data specialists to uncover critical pain points in accessing, analyzing, and acting on student data. Our goal was to understand how information bottlenecks, disconnected dashboards, and lack of AI summarization were impacting decision-making, student outcomes, and staff efficiency.
              </p>

              <h4
                className="text-md font-semibold uppercase tracking-wide mb-4"
                style={{ color: '#1976D2' }}
              >
                Primary User Needs
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
                  <img src="/images/insight/user-need-1.png" alt="Vision Icon" className="w-8 h-8" />
                  <p className="text-gray-800 text-sm">
                    Quickly understand patterns and risks across large student populations without manual deep dives
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
                  <img src="/images/insight/user-need-2.png" alt="Document Icon" className="w-8 h-8" />
                  <p className="text-gray-800 text-sm">
                    Generate contextual, AI-powered summaries to streamline collaboration and decision-making
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
                  <img src="/images/insight/user-need-3.png" alt="Calendar Icon" className="w-8 h-8" />
                  <p className="text-gray-800 text-sm">
                    Proactively detect trends like chronic absenteeism and academic dips to intervene early
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Testimonials */}
            <div className="space-y-6">
              {[
  {
    quote: "I have to juggle five different tools to answer a simple question about a student's attendance and grades.",
    name: "Angela Kim",
    title: "Assistant Principal at Edison High School",
    img: "/images/insight/User-1.webp",
  },
  {
    quote: "By the time I find the right data, the moment to act on it has usually passed.",
    name: "John Chambers",
    title: "Academic Counselor at Brooklyn STEM Academy",
    img: "/images/insight/User-2.webp",
  },
  {
    quote: "What's frustrating is that all the data is there, but it's scattered—nothing brings it all together in a way that actually helps me.",
    name: "Melissa Rodriguez",
    title: "District Data Analyst at NYC DOE",
    img: "/images/insight/User-3.webp",
  },
  {
    quote: "We miss signs of academic risk because it's buried in spreadsheets—something smarter should be surfacing that.",
    name: "Jordan Ellis",
    title: "Dean of Student Support at Queens Learning Center",
    img: "/images/insight/User-4.webp",
  },
]
.map((person, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-lg shadow-md"
              >
                <p className="italic text-gray-800 mb-4"> {person.quote} </p>
                <div className="flex items-center gap-4">
                  <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full" />
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}{' '}
                    <span className="block text-xs font-normal text-gray-600">{person.title}</span>
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prototypes */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Prototypes</h2>
          <div className="space-y-16">

            {/* ACA - 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Attendance Intelligence</h3>
              <p className="text-gray-700 mb-4">
              The Key Insights panel uses AI to detect attendance anomalies, identify high-risk student patterns, and generate real-time summaries based on subgroup disparities. By automating this analysis, the system flags critical insights—like sudden attendance drops or transportation-related disruptions—and offers suggested actions without requiring manual data exploration. This ensures school staff can focus their efforts where they’re needed most, accelerating interventions and improving student outcomes.
              </p>
              <img src="/images/insight/ACA-1.png" alt="ACA 1" className="w-full rounded-lg shadow" />
              <img src="/images/insight/ACA-2.png" alt="ACA 2" className="w-full rounded-lg shadow" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Driven Equity Insights in Advanced Coursework</h3>
              <p className="text-gray-700 mb-4">
              The AI-powered dashboard highlights patterns in advanced course enrollment and flags equity gaps—like low female participation in STEM or uneven access across student groups. It surfaces key insights and suggests actions, helping schools make data-informed decisions to promote fairness and expand opportunities.
              </p>
              <img src="/images/insight/AC-1.png" alt="AC-1" className="w-full rounded-lg shadow" />
              <img src="/images/insight/AC-2.png" alt="AC-2" className="w-full rounded-lg shadow" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Enhanced Custom Group Creation</h3>
              <p className="text-gray-700 mb-4">
              The Custom Group Creator uses AI to identify clusters of high-risk schools based on key indicators like assessment scores and suspension rates. It helps staff quickly build targeted groups for interventions, making it easier to prioritize support where it’s needed most.
              </p>
              <img src="/images/insight/CGC-1.png" alt="CGC-1" className="w-full rounded-lg shadow" />
              <img src="/images/insight/CGC-2.png" alt="CGC-2" className="w-full rounded-lg shadow" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Backed Student Climate Monitoring</h3>
              <p className="text-gray-700 mb-4">
              The School Climate Report uses AI to detect attendance patterns and behavioral trends across the school year. It highlights risk periods, identifies students in need of support, and recommends timely interventions—helping schools address chronic absenteeism and improve engagement more effectively.
              </p>
              <img src="/images/insight/SCR-1.png" alt="SCR-1" className="w-full rounded-lg shadow" />
              <img src="/images/insight/SCR-2.png" alt="SCR-2" className="w-full rounded-lg shadow" />
            </div>

           

           

          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {/* Conclusion Section */}
          <div>
            <h2 className="text-sm font-semibold uppercase mb-2" style={{ color: '#1976D2' }}>Conclusion</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Designing with Insight:<br /> Human-Centered AI for Education 
            </h3>
            <p className="text-gray-700 mb-4">
            Designing the Insight platform challenged us to balance powerful AI automation with trust, clarity, and usability for educators. Rather than overwhelming users with data, we focused on surfacing the right insights—at the right time—for the right people. From detecting chronic absenteeism to flagging equity gaps in advanced courses, our goal was to help schools move from reactive to proactive decision-making.
            </p>
            <p className="text-gray-700 mb-4">
            This work reaffirmed our belief that AI should serve as a quiet partner—amplifying human judgment, not replacing it. When designed responsibly, AI can unlock faster interventions, fairer outcomes, and more confident decisions in public education.
            </p>
          </div>

          {/* Learning Outcomes Section */}
          <div>
            <h2 className="text-sm font-semibold uppercase mb-6" style={{ color: '#1976D2' }}>Learning Outcomes</h2>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <span>Automated key processes, reducing the manual workload for staff</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Enhanced caseworker productivity by simplifying complex tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Ensured that organizational practices align with regulatory standards</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Transformed interaction with clients, providing timely and personalized services</span>
              </li>
              <li className="flex items-start gap-3">
                <span>Enabled the organization to harness data more effectively</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
