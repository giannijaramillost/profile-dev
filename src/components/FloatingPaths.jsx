import { motion } from "framer-motion";

export function FloatingPaths() {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${880 - i * 12} -${489 + i * 15}C-${880 - i * 12} -${489 + i * 15} -${
      712 - i * 12
    } ${516 - i * 15} ${452 - i * 12} ${743 - i * 15}C${1416 - i * 12} ${
      1070 - i * 15
    } ${1584 - i * 12} ${1875 - i * 15} ${1584 - i * 12} ${1875 - i * 15}`,
    opacity: 0.1 + i * 0.02,
    width: 1 + i * 0.05,
  }));

  return (
    <div 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1696 1316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#bb00bb"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default FloatingPaths;