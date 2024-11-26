import React from 'react';
import { otherSkills, skills } from '../assets/skills';

const Skills = () => {
    const isReverse = true;

    return (
        <>
            <div
                className={`relative w-full h-[var(--height)] overflow-hidden mask-image-gradient max-w-6xl mx-auto`}
                style={{
                    '--width': '100px',
                    '--height': '100px',
                    '--quantity': skills.length,
                }}
            >
                <div className="flex relative min-w-[calc(var(--width)*var(--quantity))]">
                    {skills.map((item) => (
                        <div
                            key={item.id}
                            className={`absolute left-full w-[var(--width)] h-[var(--height)] transition-filter duration-500 ${isReverse ? 'animate-reversePlay' : 'animate-autoRun'
                                }`}
                            style={{
                                animationDelay: `calc((10s / var(--quantity)) * (${item.id || 1} - 1))`,
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name || 'Skill'}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative w-full h-[var(--height)] overflow-hidden max-w-4xl mx-auto mask-image-gradient"
                style={{
                    '--width': '100px',
                    '--height': '100px',
                    '--quantity': otherSkills.length,
                }}
                reverse="true"
            >
                <div
                    className="flex relative min-w-[calc(var(--width)*var(--quantity))]"
                >
                    {otherSkills.map((item) => (
                        <div
                            key={item.id}
                            className="absolute left-full w-[var(--width)] h-[var(--height)] transition-filter duration-500 animate-autoRun"
                            style={{
                                animationDelay: `calc((10s / var(--quantity)) * (${item.id || 1} - 1))`,
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name || 'Skill'}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
