'use client'

import MilestoneCard from './MilestoneCard'

const milestones = [
    { label: 'Projects Completed', value: 92, color: '#FF6384' },
    { label: 'Client Retention', value: 85, color: '#36A2EB' },
    { label: 'Design Systems Built', value: 72, color: '#FFCE56' },
    { label: 'Prototypes Launched', value: 88, color: '#4BC0C0' },
    { label: 'Figma Components', value: 95, color: '#9966FF' },
    { label: 'Product Audits Done', value: 60, color: '#FF9F40' },
]

export default function Milestones() {
    return (
        <section className="py-20 px-6 md:px-20 bg-white text-gray-900">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-inter">
                Milestones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {milestones.map((item, index) => (
                    <MilestoneCard key={index} label={item.label} value={item.value} color={item.color} />
                ))}
            </div>
        </section>
    )
}