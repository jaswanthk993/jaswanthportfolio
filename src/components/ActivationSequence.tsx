import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ActivationSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Phase opacities
  const screenOpacity = useTransform(smoothProgress, [0, 0.05], [1, 1]);
  const pulseOpacity = useTransform(smoothProgress, [0, 0.08, 0.15], [0.3, 0.8, 0]);
  const coreGlow = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const coreScale = useTransform(smoothProgress, [0.1, 0.35], [0.2, 1.5]);
  const hudOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);
  const diagLine1 = useTransform(smoothProgress, [0.3, 0.38], [0, 1]);
  const diagLine2 = useTransform(smoothProgress, [0.35, 0.43], [0, 1]);
  const diagLine3 = useTransform(smoothProgress, [0.4, 0.48], [0, 1]);
  const diagLine4 = useTransform(smoothProgress, [0.45, 0.53], [0, 1]);
  const assemblyProgress = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const nameOpacity = useTransform(smoothProgress, [0.65, 0.78], [0, 1]);
  const nameY = useTransform(smoothProgress, [0.65, 0.78], [60, 0]);
  const subtitleOpacity = useTransform(smoothProgress, [0.72, 0.82], [0, 1]);
  const systemOnlineOpacity = useTransform(smoothProgress, [0.78, 0.85], [0, 1]);
  const whiteTransition = useTransform(smoothProgress, [0.85, 0.98], [0, 1]);
  const sectionOpacity = useTransform(smoothProgress, [0.96, 1], [1, 0]);

  // Power bar widths
  const powerBar1 = useTransform(smoothProgress, [0.15, 0.3], ["0%", "100%"]);
  const powerBar2 = useTransform(smoothProgress, [0.2, 0.35], ["0%", "100%"]);
  const powerBar3 = useTransform(smoothProgress, [0.25, 0.4], ["0%", "100%"]);

  // Assembly lines
  const leftLineX = useTransform(assemblyProgress, [0, 1], ["-100%", "0%"]);
  const rightLineX = useTransform(assemblyProgress, [0, 1], ["100%", "0%"]);
  const topLineY = useTransform(assemblyProgress, [0, 1], ["-100%", "0%"]);
  const bottomLineY = useTransform(assemblyProgress, [0, 1], ["100%", "0%"]);

  // Ring rotations
  const ring1Rotate = useTransform(smoothProgress, [0.1, 0.7], [0, 360]);
  const ring2Rotate = useTransform(smoothProgress, [0.1, 0.7], [0, -270]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
      <motion.div
        className="sticky top-0 left-0 w-full h-screen overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        {/* Deep black foundation */}
        <div className="absolute inset-0 bg-black" />

        {/* Ambient background glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: coreGlow,
            background:
              "radial-gradient(circle at 50% 50%, rgba(220,38,38,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
          }}
        />

        {/* White transition overlay */}
        <motion.div
          className="absolute inset-0 bg-white z-40"
          style={{ opacity: whiteTransition }}
        />

        {/* Initial energy pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: pulseOpacity }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_60px_20px_rgba(220,38,38,0.4)]" />
        </motion.div>

        {/* Core reactor */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: coreGlow }}
        >
          <motion.div
            className="relative"
            style={{ scale: coreScale }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute -inset-24 rounded-full border border-red-500/20"
              style={{ rotate: ring1Rotate }}
            >
              <div className="absolute top-0 left-1/2 w-1 h-3 bg-red-500/60 -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-blue-500/60 -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-3 h-1 bg-red-500/40 -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-3 h-1 bg-blue-500/40 -translate-y-1/2" />
            </motion.div>

            {/* Inner ring */}
            <motion.div
              className="absolute -inset-16 rounded-full border border-blue-500/30"
              style={{ rotate: ring2Rotate }}
            >
              <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-blue-400/80 -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-blue-400/80 -translate-x-1/2" />
            </motion.div>

            {/* Core */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-blue-600 shadow-[0_0_80px_30px_rgba(220,38,38,0.3),0_0_120px_60px_rgba(59,130,246,0.15)]" />
          </motion.div>
        </motion.div>

        {/* HUD Diagnostics */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: hudOpacity }}
        >
          {/* Left HUD panel */}
          <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 space-y-4 font-mono text-[10px] md:text-xs tracking-widest uppercase">
            <motion.div style={{ opacity: diagLine1 }} className="text-red-500/70">
              <span className="text-red-400/40">&#9654;</span> REACTOR_CORE{" "}
              <span className="text-green-400">ONLINE</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine2 }} className="text-blue-400/70">
              <span className="text-blue-400/40">&#9654;</span> NEURAL_SYNC{" "}
              <span className="text-green-400">CALIBRATED</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine3 }} className="text-red-500/70">
              <span className="text-red-400/40">&#9654;</span> QUANTUM_LINK{" "}
              <span className="text-yellow-400">PENDING</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine4 }} className="text-blue-400/70">
              <span className="text-blue-400/40">&#9654;</span> AI_FRAMEWORK{" "}
              <span className="text-green-400">LOADED</span>
            </motion.div>

            {/* Power bars */}
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-red-500/50 w-12">PWR_1</span>
                <div className="w-24 h-1 bg-white/5 rounded overflow-hidden">
                  <motion.div className="h-full bg-red-500/70 rounded" style={{ width: powerBar1 }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500/50 w-12">PWR_2</span>
                <div className="w-24 h-1 bg-white/5 rounded overflow-hidden">
                  <motion.div className="h-full bg-blue-500/70 rounded" style={{ width: powerBar2 }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500/50 w-12">PWR_3</span>
                <div className="w-24 h-1 bg-white/5 rounded overflow-hidden">
                  <motion.div className="h-full bg-green-500/70 rounded" style={{ width: powerBar3 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right HUD panel */}
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 space-y-3 font-mono text-[10px] md:text-xs tracking-widest uppercase text-right">
            <motion.div style={{ opacity: diagLine1 }} className="text-blue-400/60">
              SYS_INTEGRITY <span className="text-green-400">98.7%</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine2 }} className="text-red-400/60">
              CLOUD_NODES <span className="text-green-400">ACTIVE</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine3 }} className="text-blue-400/60">
              LATENCY <span className="text-green-400">0.3ms</span>
            </motion.div>
            <motion.div style={{ opacity: diagLine4 }} className="text-red-400/60">
              DEPLOY_STATUS <span className="text-green-400">READY</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Assembly frame lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: assemblyProgress }}
        >
          {/* Top line */}
          <motion.div
            className="absolute top-[15%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
            style={{ y: topLineY }}
          />
          {/* Bottom line */}
          <motion.div
            className="absolute bottom-[15%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{ y: bottomLineY }}
          />
          {/* Left line */}
          <motion.div
            className="absolute left-[10%] top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"
            style={{ x: leftLineX }}
          />
          {/* Right line */}
          <motion.div
            className="absolute right-[10%] top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{ x: rightLineX }}
          />
          {/* Corner markers */}
          <motion.div className="absolute top-[15%] left-[10%] w-4 h-4 border-t border-l border-red-500/40" style={{ y: topLineY, x: leftLineX }} />
          <motion.div className="absolute top-[15%] right-[10%] w-4 h-4 border-t border-r border-blue-500/40" style={{ y: topLineY, x: rightLineX }} />
          <motion.div className="absolute bottom-[15%] left-[10%] w-4 h-4 border-b border-l border-red-500/40" style={{ y: bottomLineY, x: leftLineX }} />
          <motion.div className="absolute bottom-[15%] right-[10%] w-4 h-4 border-b border-r border-blue-500/40" style={{ y: bottomLineY, x: rightLineX }} />
        </motion.div>

        {/* System Online - Name reveal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none"
            style={{
              opacity: nameOpacity,
              y: nameY,
              textShadow: "0 0 80px rgba(220,38,38,0.3), 0 0 120px rgba(59,130,246,0.2)",
            }}
          >
            Jaswanth
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none"
            style={{
              opacity: nameOpacity,
              y: nameY,
              textShadow: "0 0 80px rgba(59,130,246,0.3), 0 0 120px rgba(220,38,38,0.2)",
            }}
          >
            Kumar
          </motion.h1>
          <motion.p
            className="mt-4 text-sm md:text-base font-mono uppercase tracking-[0.3em] text-white/60"
            style={{ opacity: subtitleOpacity }}
          >
            AI Builder · Cloud Architect · Product Thinker
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.5em]"
            style={{ opacity: systemOnlineOpacity }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            <span className="text-green-400/90">System Online</span>
          </motion.div>
        </div>

        {/* Scroll indicator at the very start */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]),
          }}
        >
          <span className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">
            Scroll to activate
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
            initial={{ opacity: 0.5 }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-red-500/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Scan lines overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            opacity: useTransform(smoothProgress, [0.85, 1], [0.03, 0]),
          }}
        />
      </motion.div>
    </div>
  );
};

export default ActivationSequence;
