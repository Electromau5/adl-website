export default function HandsAIPage() {
    return (
      <div className="px-6 md:px-16 lg:px-32 py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Title and Intro */}
          <h1 className="text-4xl font-bold leading-tight mb-6">
          Streamlining Project Management with My Project Inbox
          </h1>
          <p className="text-lg text-gray-700 mb-12">
          My Project Inbox is a next-generation project coordination platform that transforms how engineering and networking teams manage tasks. It provides real-time project tracking, seamless task delegation, and structured progress monitoring, ensuring efficient collaboration and accountability.
          <br /><br />
          <b>Holistic Project Oversight: </b>Offers a dashboard-centric approach to managing active, scheduled, and completed projects. <br />
          <b>Smart Task Delegation: </b> Enables managers to assign, update, or reassign team members efficiently.  <br />
          <b>Adaptive Progress Insights: </b>  Displays status updates, workload distribution, and blockers for proactive decision-making.  <br />
          </p>
  
          {/* Full-bleed cover image */}
          <img
            src="/images/my-project-inbox/cover.png"
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
          <p>
          As part of the My Project Inbox design team, we worked across multiple disciplines to ensure a user-friendly, intuitive, and high-performance platform for project management and team collaboration. <br /><br />
          </p>
          <h3 className="font-semibold">User Experience Strategy</h3>
          <p>
          Focused on designing intuitive workflows that reduce complexity in project delegation and tracking.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Operational Optimization</h3>
          <p>
          Identified and streamlined workflow bottlenecks, ensuring a more efficient project lifecycle.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Cross-Team Engagement</h3>
          <p>
          Facilitated alignment between design, engineering, and leadership teams to enhance usability and scalability.
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
          { value: '35%', label: 'Reduction in Task Assignment Time' },
          { value: '50%', label: 'Improvement in Progress Visibility' },
          { value: '60%', label: 'Faster Reassignment Workflows' },
          { value: '75%', label: 'Increase in Project Completion Efficiency' },
          { value: '85%', label: 'Reduction in Documentation Gaps' },
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
        Management & Communication Gaps
        </h3>
        <p className="text-gray-700">
        Engineering and networking teams faced challenges with disjointed project tracking due to scattered information across multiple platforms, leading to increased coordination time, delays, duplicated efforts, and inconsistent role assignments that hindered effective workload optimization.
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
        <h3 className="text-3xl font-bold mb-4">A Smarter and More Collaborative System</h3>
        <p className="text-gray-700">
        My Project Inbox was designed to eliminate inefficiencies by offering a structured dashboard for managing all project phases, enabling real-time updates to keep teams informed on progress and blockers, and allowing flexible project reassignment to dynamically balance workloads.
        </p>
      </div>
    </div>

    {/* Right Column: Image */}
{/* Right Column: Image */}
<div className="flex flex-col justify-center items-center h-full gap-6">
  <img
    src="/images/my-project-inbox/user-research.png"
    alt="WIC Family Interaction"
    className="w-full max-w-sm object-cover flex-1 rounded-t-xl"
  />
  <img
    src="/images/my-project-inbox/user-research-2.png"
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
        src="/images/my-project-inbox/design-process.png"
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
      Workflow Breakdowns, Ownership Confusion, and Visibility Gaps
      </h3>
      <p className="text-gray-700 mb-10">
      To deeply understand the project coordination challenges faced by engineering and networking teams, we conducted a multi-method research initiative combining qualitative discovery with quantitative validation. Our approach blended field observation, stakeholder interviews, surveys, and usability testing to ensure insights were holistic, inclusive, and actionable.
      </p>

      <h4
        className="text-md font-semibold uppercase tracking-wide mb-4"
        style={{ color: '#1976D2' }}
      >
        Primary User Needs
      </h4>

      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/my-project-inbox/user-need-1.png" alt="Vision Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
          An intuitive platform that enables quick decision making and timely project adjustments.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/my-project-inbox/user-need-2.png" alt="Document Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
          Simplified, centralized communication channels to facilitate better collaboration, reducing the risk of miscommunication or lost information.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white border border-gray-200 p-4">
          <img src="/images/my-project-inbox/user-need-3.png" alt="Calendar Icon" className="w-8 h-8" />
          <p className="text-gray-800 text-sm">
          The ability to automate repetitive administrative tasks to increase productivity and allow team members to focus more on critical project activities.
          </p>
        </div>
      </div>
    </div>

    {/* Right Column: Testimonials */}
    <div className="space-y-6">
      {[
        {
          quote:
            '"I constantly find myself chasing updates through emails and Slack, which fragments information and delays our response time."',
          name: 'Jessica Martinez',
          title: 'Network Operations Manager',
          img: '/images/my-project-inbox/User-1.webp',
        },
        {
          quote:
            '"There’s no clear visibility into the project timeline or who’s accountable for each task, causing frequent confusion among team members."',
          name: 'Rahul Patel',
          title: 'Senior Network Engineer',
          img: '/images/my-project-inbox/User-2.webp',
        },
        {
          quote:
            '"Manual input of repetitive project data into multiple platforms significantly reduces my efficiency and often results in human errors."',
          name: 'Emily Chen',
          title: 'Project Coordinator',
          img: 'images/my-project-inbox/User-3.webp',
        },
        {
          quote:
            '"It’s challenging to assess overall project health quickly due to scattered documentation and inconsistent project tracking methods across teams."',
          name: 'Aaron Thompson',
          title: 'Lead Systems Analyst',
          img: 'images/my-project-inbox/User-4.webp',
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
                <h3 className="text-xl font-semibold mb-2">Real-Time Project Insights and Filtering</h3>
                <p className="text-gray-700 mb-4">
                Easily browse and filter large project volumes by status, category, assignee, and more. My Project Inbox gives users instant visibility into what matters, reducing noise and surfacing action items.
                </p>
                <img src="/images/my-project-inbox/mpi-1.png" alt="WIC Search" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Medical Modules */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast and Structured Project Creation</h3>
                <p className="text-gray-700 mb-4">
                Kick off new projects quickly with guided entry for key details and smart team suggestions. My Project Inbox minimizes setup time while ensuring consistency across projects.
                </p>
                <div className="space-y-6">
                  <img src="/images/my-project-inbox/mpi-2.png" alt="Medical Module" className="w-full rounded-lg shadow" />
                </div>
              </div>
  
              {/* Family Module */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Smooth Team Transitions</h3>
                <p className="text-gray-700 mb-4">
                Transfer project ownership between teams while retaining full context. My Project Inbox supports organizational agility by allowing projects to move across departments with minimal disruption.
                </p>
                <img src="/images/my-project-inbox/mpi-3.png" alt="Family Module" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Project Duplication with Context</h3>
                <p className="text-gray-700 mb-4">
                Clone project details and assign new owners without starting from scratch. My Project Inbox accelerates task replication while preserving important structure and configuration.
                </p>
                <img src="/images/my-project-inbox/mpi-4.png" alt="Appointment 1" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Bulk Reassignment Made Simple</h3>
                <p className="text-gray-700 mb-4">
                Easily reassign multiple projects to new team members in just a few clicks. My Project Inbox reduces the overhead of handoffs and helps managers quickly adapt to staffing or priority changes.
                </p>
                <img src="/images/my-project-inbox/mpi-5.png" alt="Appointment 2" className="w-full rounded-lg shadow" />
              </div>
  
              {/* Appointment 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Efficient Project Updates at Scale</h3>
                <p className="text-gray-700 mb-4">
                Make quick adjustments to project metadata like category, network, and assignees. My Project Inbox ensures updates are fast, traceable, and always within context—no need to leave the current workflow.
                </p>
                <img src="/images/my-project-inbox/mpi-6.png" alt="Appointment 3" className="w-full rounded-lg shadow" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Centralized Project Notes for Better Visibility</h3>
                <p className="text-gray-700 mb-4">
                My Project Inbox consolidates comments and updates in a single view, giving teams instant access to project history and decisions. This reduces back-and-forth and keeps everyone aligned on key developments.
                </p>
                <img src="/images/my-project-inbox/mpi-7.png" alt="Appointment 3" className="w-full rounded-lg shadow" />
              </div>
  
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
      {/* Conclusion Section */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-2" style={{ color: '#1976D2' }}>Conclusion</h2>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Empowering Humans to <br /> Enabling Clarity and Control in Project Management
        </h3>
        <p className="text-gray-700 mb-4">
        Designing My Project Inbox was an exercise in surfacing structure from scattered information. In complex organizational environments—where multiple team members juggle priorities across departments—the system was built to bring coherence, not chaos. It wasn’t just about managing tasks; it was about empowering people to move projects forward with confidence.
        </p>
        <p className="text-gray-700 mb-4">
        By designing a solution that makes projects easy to create, update, assign, and track, we gave users a central place to focus, act, and collaborate. This project reinforced the belief that great enterprise tools don’t just organize information—they reduce decision fatigue, eliminate ambiguity, and create momentum.
        </p>
      </div>

      {/* Learning Outcomes Section */}
      <div>
        <h2 className="text-sm font-semibold uppercase mb-6" style={{ color: '#1976D2' }}>Learning Outcomes</h2>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-start gap-3">
            <span>Streamlined project handoff between departments, reducing delays and miscommunication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span>Improved visibility into project status and ownership for all stakeholders</span>
          </li>
          <li className="flex items-start gap-3">
            <span>Empowered teams to take immediate action with quick access to contextual information</span>
          </li>
          <li className="flex items-start gap-3">
            <span>Reduced friction in updating and reassigning projects, encouraging continuous progress</span>
          </li>
          <li className="flex items-start gap-3">
            <span>Supported accountability with clearly defined project workflows and responsibilities</span>
          </li>
        </ul>
      </div>
    </section>

        </div>
      </div>
    );
  }
  