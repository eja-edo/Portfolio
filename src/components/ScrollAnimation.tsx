'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType =
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'scaleIn'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'rotateIn'
    | 'bounceIn'
    | 'zoomIn';

interface ScrollAnimationProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    amount?: number | 'some' | 'all';
}

const animations: Record<AnimationType, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    slideUp: {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideDown: {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideLeft: {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    slideRight: {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    rotateIn: {
        hidden: { opacity: 0, rotate: -10, scale: 0.9 },
        visible: { opacity: 1, rotate: 0, scale: 1 },
    },
    bounceIn: {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
            },
        },
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function ScrollAnimation({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    amount = 0.2,
}: ScrollAnimationProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Custom easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for animating children with delay
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
    animation?: AnimationType;
}

export function StaggerItem({
    children,
    className = '',
    animation = 'fadeInUp',
}: StaggerItemProps) {
    return (
        <motion.div
            variants={animations[animation]}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Parallax effect component
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number; // -1 to 1, negative = opposite direction
}

export function Parallax({ children, className = '', speed = 0.5 }: ParallaxProps) {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: speed * -50 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0 }}
            style={{ willChange: 'transform' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
