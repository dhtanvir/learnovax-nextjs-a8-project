import React from 'react';

const learningTips = {
  studyTechniques: [
    {
      id: 1,
      title: "Active Recall",
      description:
        "Test yourself frequently instead of passively reading notes."
    },
    {
      id: 2,
      title: "Spaced Repetition",
      description:
        "Review information at increasing intervals to improve memory."
    },
    {
      id: 3,
      title: "Pomodoro Technique",
      description:
        "Study for 25 minutes, then take a 5-minute break."
    },
    {
      id: 4,
      title: "Mind Mapping",
      description:
        "Use diagrams to connect ideas and simplify complex topics."
    },
    {
      id: 5,
      title: "Feynman Technique",
      description:
        "Explain concepts simply to deeply understand them."
    }
  ],
  timeManagementTips: [
    {
      id: 1,
      title: "Set Clear Goals",
      description:
        "Define daily and weekly goals to stay on track."
    },
    {
      id: 2,
      title: "Prioritize Tasks",
      description:
        "Focus on important and urgent tasks first."
    },
    {
      id: 3,
      title: "Avoid Multitasking",
      description:
        "Do one task at a time for better efficiency."
    },
    {
      id: 4,
      title: "Create a Schedule",
      description:
        "Plan study sessions and follow a routine."
    },
    {
      id: 5,
      title: "Limit Distractions",
      description:
        "Turn off notifications and stay focused."
    }
  ]
};

const Card = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800">
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </div>
);


const LearningTipsSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Learning Tips
      </h2>

      {/* Study Techniques */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">
          Study Techniques
        </h3>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {learningTips.studyTechniques.map((tip) => (
            <Card
              key={tip.id}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </div>
      </div>

      {/* Time Management */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">
          Time Management Tips
        </h3>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {learningTips.timeManagementTips.map((tip) => (
            <Card
              key={tip.id}
              title={tip.title}
              description={tip.description}
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default LearningTipsSection;