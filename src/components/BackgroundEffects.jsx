import { motion, useScroll, useTransform } from "framer-motion";

/* พื้นหลัง glow/parallax เบา ๆ */
export default function BackgroundEffects() {
  const { scrollY } = useScroll();
  
  // Parallax movement: แปลงค่า Scroll เป็นระยะทาง (เลื่อนช้าๆ)
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1: ซ้ายบน - เลื่อนลง */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-300/10 blur-3xl" 
      />
      
      {/* Blob 2: ขวากลาง - เลื่อนสวนขึ้นไป */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-purple-300/10 blur-3xl" 
      />

       {/* Blob 3: ซ้ายล่าง - เลื่อนลง */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-blue-300/10 blur-3xl" 
      />
    </div>
  );
}