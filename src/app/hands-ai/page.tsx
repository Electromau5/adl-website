export default function HandsAIPage() {
    return (
      <div className="px-6 md:px-16 lg:px-32 py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Title and Intro */}
          <h1 className="text-4xl font-bold leading-tight mb-6">
            HANDS AI: Transforming Casework with Smart Automation
          </h1>
          <p className="text-lg text-gray-700 mb-12">
          The Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) is a government initiative that serves millions of families across the country, providing critical nutrition assistance and healthcare support.
          <br /><br />
          CMA Global, a leader in IT infrastructure, launched an internal startup to develop Emma—an AI-powered assistant designed to improve case management. As part of their broader initiative, they built HANDS AI, an enterprise platform supporting WIC programs across six U.S. states by streamlining workflows and surfacing critical insights. We partnered with CMA’s internal team to lead the end-to-end design of Emma, ensuring a seamless, accessible, and productivity-boosting experience within the HANDS AI ecosystem.
          </p>
  
          {/* Full-bleed cover image */}
          <img
            src="/images/hands-ai/cover.png"
            alt="HANDS AI Cover"
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
          <h3 className="font-semibold">Design Leadership</h3>
          <p>
            Took full ownership of the design process, ensuring alignment, on-time delivery, and a cohesive user experience.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Human-Centered Approach</h3>
          <p>
            Led extensive research and usability testing to understand user pain points and identify areas where the AI could deliver real value.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Cross-Functional Delivery</h3>
          <p>
            Facilitated collaboration between design, engineering, and AI teams to ensure seamless integration of AI capabilities into the platform’s core features.
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
          { value: '$250K', label: 'Projected Reduction in Administrative Overhead Costs' },
          { value: '45%', label: 'Increase in Documentation Accuracy' },
          { value: '40%', label: 'Reduction in Manual Data Entry Time' },
          { value: '68%', label: 'Percentage of Missing Records Flagged' },
          { value: '30%', label: 'Faster Case Processing' },
          { value: '60%', label: 'Reduction in Certification Errors' },
          { value: '20%', label: 'Faster Benefit Processing' },
          { value: '90%', label: 'Faster Report Generation' },
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
          Intense Bottlenecks in Case Management
        </h3>
        <p className="text-gray-700">
          WIC caseworkers rely on manual, time-consuming processes to manage thousands of client records,
          medical histories, and appointments. The outdated system leads to delays, high administrative burdens,
          and missed critical updates, ultimately affecting families in need.
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
        <h3 className="text-3xl font-bold mb-4">Human-Centered Automation</h3>
        <p className="text-gray-700">
          An intelligent case management platform that leverages automation and real-time insights to streamline workflows,
          reduce administrative burdens, and improve decision-making for WIC caseworkers so they can focus on what matters
          the most – supporting families and ensuring timely access to critical services.
        </p>
      </div>
    </div>

    {/* Right Column: Image */}
{/* Right Column: Image */}
<div className="flex flex-col justify-center items-center h-full gap-6">
  <img
    src="/images/hands-ai/user-research.png"
    alt="WIC Family Interaction"
    className="w-full max-w-sm object-cover flex-1 rounded-t-xl"
  />
  <img
    src="/images/hands-ai/user-research-2.png"
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
        src="/images/hands-ai/design-process.png"
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
        Understanding Pain, Stress, and Real-World Challenges
      </h3>
      <p className="text-gray-700 mb-10">
        We conducted 10+ in-depth interviews and 4 contextual inquiry sessions with a diverse group of WIC caseworkers,
        supervisors, and clinic staff to capture insights into their workflows, mental models, and day-to-day challenges.
      </p>

      <h4
        className="text-md font-semibold uppercase tracking-wide mb-4"
        style={{ color: '#1976D2' }}
      >
        Primary User Needs
      </h4>

      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/hands-ai/user-need-1.png" alt="Vision Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
            Ensure faster and more accurate access to clients who require high-priority assistance
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/hands-ai/user-need-2.png" alt="Document Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
            Allow professionals to manage data effortlessly and make informed decisions with confidence
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/hands-ai/user-need-3.png" alt="Calendar Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
            Reduce no-shows and improve operational efficiency
          </p>
        </div>
      </div>
    </div>

    {/* Right Column: Testimonials */}
    <div className="space-y-6">
      {[
        {
          quote:
            '“I spend more time fixing errors and hunting for information than actually helping families.”',
          name: 'Maria Lopez',
          title: 'Senior Caseworker at Phoenix WIC Clinic',
          img: '/images/hands-ai/User-1.webp',
        },
        {
          quote:
            '“I can’t tell you how many times I’ve missed a key health indicator because the data is buried or incomplete.”',
          name: 'Dr. Kevin Singh',
          title: 'Nutritionist at Denver County Health',
          img: '/images/hands-ai/User-2.webp',
        },
        {
          quote:
            '“Our no-show rate is out of control, and it’s because our scheduling system is so clunky.”',
          name: 'Janet White',
          title: 'Clinic Manager at Tucson WIC Center',
          img: 'images/hands-ai/User-3.webp',
        },
        {
          quote:
            '“It takes forever to find the right client file, and half the time, I’m not even sure if it’s accurate.”',
          name: 'Derek Thompson',
          title: 'Program Supervisor at Maricopa County Public Health',
          img: 'images/hands-ai/User-4.webp',
        },
      ].map((person, index) => (
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
  
              {/* WIC Search */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Automating Data Filtering</h3>
                <p className="text-gray-700 mb-4">
                  Emma alleviates the manual burden of searching through large datasets by instantly applying precise filters and surfacing relevant information...
                </p>
                <img src="/images/hands-ai/WIC-Search.png" alt="WIC Search" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Medical Modules */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Proactive Health Insights and Risk Monitoring</h3>
                <p className="text-gray-700 mb-4">
                  Emma enhances decision-making by surfacing critical health risks, such as iron deficiency...
                </p>
                <div className="space-y-6">
                  <img src="/images/hands-ai/Medical-Module.png" alt="Medical Module" className="w-full rounded-lg shadow" />
                  <img src="/images/hands-ai/Medical-Module-2.png" alt="Medical Module 2" className="w-full rounded-lg shadow" />
                </div>
              </div>
  
              {/* Family Module */}
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Case Summaries</h3>
                <p className="text-gray-700 mb-4">
                  Emma streamlines case management by automatically summarizing key household details...
                </p>
                <img src="/images/hands-ai/Family-Module.png" alt="Family Module" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Appointment Scheduling with Emma</h3>
                <p className="text-gray-700 mb-4">
                  Emma streamlines appointment scheduling by guiding staff through the process with intuitive options...
                </p>
                <img src="/images/hands-ai/Appointment-1.png" alt="Appointment 1" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering for Effortless Appointment Management</h3>
                <p className="text-gray-700 mb-4">
                  Emma simplifies appointment tracking with intelligent filtering, allowing staff to quickly sort by type, status, or priority...
                </p>
                <img src="/images/hands-ai/Appointment-2.png" alt="Appointment 2" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Actionable No-Show Insights for Better Engagement</h3>
                <p className="text-gray-700 mb-4">
                  Emma provides instant visibility into missed appointments, helping staff track no-shows and take proactive steps...
                </p>
                <img src="/images/hands-ai/Appointment-3.png" alt="Appointment 3" className="w-full rounded-lg shadow" />
              </div>
  
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
      {/* Conclusion Section */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-2" style={{ color: '#1976D2' }}>Conclusion</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering Humans to <br /> Automate Efficiency
        </h3>
        <p className="text-gray-700 mb-4">
          Designing for HANDS AI was an exercise in balancing complexity with clarity. Across family,
          medical, WIC, and scheduling modules, the goal was never just to streamline workflows — it was to empower
          human service professionals with tools that feel intuitive, responsive, and unified.
        </p>
        <p className="text-gray-700 mb-4">
          By deeply understanding the real-world constraints of caseworkers and health professionals, this system brings structure
          to chaos, enabling better care coordination and outcomes.
        </p>
        <p className="text-gray-700">
          This project reaffirmed my belief that great enterprise design isn’t about adding more features —
          it’s about making the right decisions easier, faster, and more human.
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
  