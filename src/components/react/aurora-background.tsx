"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AuroraBackground } from "src/components/react/aceternityui/aurora-background.tsx";

export function AuroraBackgroundDemo() {
    useEffect(() => {
        // 一直隐藏滚动条
        document.body.style.overflow = 'hidden';

        return () => {
            // 如果组件卸载时想要恢复滚动条
            // document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center h-screen px-4"
            >
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="backdrop-blur-lg bg-white/30 dark:bg-black/30 p-8 rounded-2xl shadow-lg text-center border border-neutral-300 dark:border-white/20 aspect-[3/4] w-full max-w-sm"
                >
                    <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
                        Welcome to Aceternity
                    </h2>
                    <p className="text-base md:text-lg dark:text-neutral-200 mt-4">
                        Login to aceternity if you can because we don't have a login flow yet
                    </p>
                </motion.div>
            </motion.div>
        </AuroraBackground>
    );
}