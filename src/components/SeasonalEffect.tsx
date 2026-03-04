'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    rotation: number;
    swayOffset: number;
}

export function SeasonalEffect() {
    const pathname = usePathname();

    const isProjectsRoute = pathname === '/projects' || pathname.startsWith('/projects/');

    if (isProjectsRoute) return null;

    const [season, setSeason] = useState<Season>('winter');
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isEnabled, setIsEnabled] = useState(true);
    const [windStrength, setWindStrength] = useState(0);
    const [windDirection, setWindDirection] = useState(1);
    const [targetWindStrength, setTargetWindStrength] = useState(0);
    const [targetWindDirection, setTargetWindDirection] = useState(1);

    // Xác định mùa dựa trên tháng hiện tại
    useEffect(() => {
        const month = new Date().getMonth() + 1; // 1-12

        if (month >= 1 && month <= 3) setSeason('spring');
        else if (month >= 3 && month <= 6) setSeason('summer');
        else if (month >= 6 && month <= 9) setSeason('autumn');
        else setSeason('winter');
    }, []);

    // Mô phỏng gió thổi - thay đổi theo chu kỳ
    useEffect(() => {
        if (!isEnabled) return;

        const updateWind = () => {
            // Chu kỳ gió: 70% không có gió, 30% có gió
            const hasWind = Math.random() < 0.12;

            if (hasWind) {
                // Gió mạnh, hướng ngẫu nhiên (trái hoặc phải)
                setTargetWindStrength(Math.random() * 3 + 2); // 2-5
                setTargetWindDirection(Math.random() > 0.5 ? 1 : -1);
            } else {
                // Không có gió hoặc gió rất nhẹ
                setTargetWindStrength(Math.random() * 0.5);
                setTargetWindDirection(Math.random() > 0.5 ? 1 : -1);
            }
        };

        // Thay đổi gió mỗi 5-8 giây
        updateWind();
        const interval = setInterval(updateWind, (5 + Math.random() * 3) * 1000);

        return () => clearInterval(interval);
    }, [isEnabled]);

    // Chuyển đổi gió mượt mà (lerp)
    useEffect(() => {
        if (!isEnabled) return;

        const lerpInterval = setInterval(() => {
            setWindStrength(prev => {
                const diff = targetWindStrength - prev;
                if (Math.abs(diff) < 0.01) return targetWindStrength;
                return prev + diff * 0.1; // Chuyển 10% mỗi frame
            });

            setWindDirection(prev => {
                // Chuyển hướng gió từ từ
                if (prev !== targetWindDirection) {
                    const diff = targetWindDirection - prev;
                    if (Math.abs(diff) < 0.1) return targetWindDirection;
                    return prev + diff * 0.15;
                }
                return prev;
            });
        }, 50); // Update mỗi 50ms

        return () => clearInterval(lerpInterval);
    }, [isEnabled, targetWindStrength, targetWindDirection]);

    // Tạo particles
    useEffect(() => {
        if (!isEnabled) return;

        const particleCount = season === 'summer' ? 5 : 10;
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * -100,
                size: season === 'winter' ? Math.random() * 4 + 2 : Math.random() * 6 + 4,
                speed: season === 'summer' ? Math.random() * 0.10 + 0.04 : Math.random() * 0.4 + 0.2,
                opacity: Math.random() * 0.6 + 0.4,
                rotation: Math.random() * 360,
                swayOffset: Math.random() * Math.PI * 2,
            });
        }

        setParticles(newParticles);
    }, [season, isEnabled]);

    // Animation loop
    useEffect(() => {
        if (!isEnabled || particles.length === 0) return;

        let animationFrameId: number;
        let lastTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            const deltaTime = (currentTime - lastTime) / 16; // Normalize to ~60fps
            lastTime = currentTime;

            setParticles((prevParticles) =>
                prevParticles.map((particle) => {
                    let newY = particle.y + particle.speed * deltaTime;
                    let newX = particle.x;
                    let newRotation = particle.rotation;

                    // Hiệu ứng gió
                    if (windStrength > 1) {
                        // Có gió mạnh - di chuyển theo hướng gió rõ ràng
                        newX = particle.x + (windStrength * windDirection * 0.15 * deltaTime);
                        newRotation += windStrength * windDirection * 0.5;
                    } else {
                        // Không có gió - rơi thẳng với dao động nhẹ
                        const gentleSway = Math.sin(Date.now() / 1000 + particle.swayOffset) * 0.3;
                        newX = particle.x + gentleSway * 0.08 * deltaTime;
                        newRotation += particle.speed;
                    }

                    // Giới hạn không cho ra khỏi màn hình theo chiều ngang
                    newX = Math.max(0, Math.min(100, newX));

                    // Reset khi ra khỏi màn hình
                    if (newY > 110) {
                        return {
                            ...particle,
                            y: -10,
                            x: Math.random() * 100,
                            rotation: Math.random() * 360,
                        };
                    }

                    return {
                        ...particle,
                        y: newY,
                        x: newX,
                        rotation: newRotation % 360,
                    };
                })
            );

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [particles.length, season, isEnabled, windStrength, windDirection]);

    // Render particle dựa theo mùa
    const renderParticle = (particle: Particle) => {
        const baseStyle: React.CSSProperties = {
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            pointerEvents: 'none',
            transform: `rotate(${particle.rotation}deg)`,
            fontSize: `${particle.size * 3}px`,
        };

        switch (season) {
            case 'winter':
                // Tuyết rơi ❄️
                const snowflakes = ['❄', '❅', '❆'];
                return (
                    <div
                        key={particle.id}
                        style={{
                            ...baseStyle,
                            color: '#ffffff',
                            textShadow: '0 0 5px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.5)',
                        }}
                    >
                        {snowflakes[particle.id % snowflakes.length]}
                    </div>
                );

            case 'autumn':
                // Lá rơi 🍂
                const leaves = ['🍂', '🍁'];
                return (
                    <div
                        key={particle.id}
                        style={{
                            ...baseStyle,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                        }}
                    >
                        {leaves[particle.id % leaves.length]}
                    </div>
                );

            case 'spring':
                // Hoa anh đào 🌸
                const flowers = ['🌸'];
                return (
                    <div
                        key={particle.id}
                        style={{
                            ...baseStyle,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        }}
                    >
                        {flowers[particle.id % flowers.length]}
                    </div>
                );

            case 'summer':
                // Ánh sáng lấp lánh ✨
                const sparkles = ['✨', '⭐', '💫'];
                return (
                    <div
                        key={particle.id}
                        style={{
                            ...baseStyle,
                            animation: `twinkle ${2 + particle.id % 3}s ease-in-out infinite`,
                        }}
                    >
                        {sparkles[particle.id % sparkles.length]}
                    </div>
                );

            default:
                return null;
        }
    };

    if (!isEnabled) return null;

    return (
        <>
            {/* Toggle button */}
            <button
                onClick={() => setIsEnabled(!isEnabled)}
                className="fixed bottom-4 right-4 z-50 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
                title={isEnabled ? 'Tắt hiệu ứng mùa' : 'Bật hiệu ứng mùa'}
            >
                <span className="text-2xl">
                    {season === 'winter' && '❄️'}
                    {season === 'autumn' && '🍂'}
                    {season === 'spring' && '🌸'}
                    {season === 'summer' && '☀️'}
                </span>
            </button>

            {/* Particle container */}
            <div
                className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
                style={{ mixBlendMode: season === 'summer' ? 'screen' : 'normal' }}
            >
                {particles.map((particle) => renderParticle(particle))}
            </div>

            {/* CSS animations */}
            <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
        </>
    );
}
