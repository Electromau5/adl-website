'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
    label: string
    value: number
    color: string
}

export default function MilestoneCard({ label, value, color }: Props) {
    const { ref, inView } = useInView({ triggerOnce: false })
    const [displayValue, setDisplayValue] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setDisplayValue((prev) => {
                if (inView) {
                    if (prev >= value) {
                        clearInterval(intervalRef.current!)
                        return value
                    }
                    return prev + 1
                } else {
                    if (prev <= 0) {
                        clearInterval(intervalRef.current!)
                        return 0
                    }
                    return prev - 1
                }
            })
        }, 15)

        return () => clearInterval(intervalRef.current!)
    }, [inView, value])

    const data = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [displayValue, 100 - displayValue],
                backgroundColor: [color, '#E0E0E0'],
                borderWidth: 0,
            },
        ],
    }

    const options = {
        animation: false,
        cutout: '85%',
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    }

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 transition-all"
        >
            <div className="relative w-40 h-40 mb-4">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-medium">{displayValue}%</span>
                </div>
            </div>
            <h3 className="text-lg font-semibold">{label}</h3>
        </div>
    )
}