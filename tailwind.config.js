// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // ===== Fade up animation (ใช้ใน FadeUp.jsx)
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(14px) scale(0.98)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },

        // ===== Floating animation (ใช้กับภาพหรือ icon)
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        },

        // ===== Shimmer effect (พื้นหลังวิ่ง)
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        // ===== Wave icon (ใช้กับอีโมจิ 👋)
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },

        // ===== Moving Dots (ใช้ตอนหน้าโหลดแบบจุดวิ่ง)
        movingDots: {
          '0%': { transform: 'translateX(-2rem)', opacity: 0 },
          '25%': { transform: 'translateX(0)', opacity: 1 },
          '75%': { transform: 'translateX(2rem)', opacity: 1 },
          '100%': { transform: 'translateX(4rem)', opacity: 0 },
        },

        // ===== Custom smooth spin (ใช้กับ loader)
        spinSmooth: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
      "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(56,189,248,0.6))" },
      "50%": { filter: "drop-shadow(0 0 16px rgba(56,189,248,0.9))" },
    },
      shine: {
          "0%": { transform: "translateX(-150%) rotate(25deg)" },
          "100%": { transform: "translateX(150%) rotate(25deg)" },
        },
      },

      animation: {
        // ===== ใช้ใน FadeUp.jsx
        'fade-in-up': 'fade-in-up .6s cubic-bezier(.22,.61,.36,1) both',

        // ===== icon ลอยช้า ๆ
        float: 'float 6s ease-in-out infinite',

        // ===== background shimmer
        shimmer: 'shimmer 2s linear infinite',

        // ===== wave สำหรับอีโมจิ 👋
        wave: 'wave 1.8s ease-in-out infinite',

        // ===== จุดเคลื่อนไหว
        movingDots: 'movingDots 1.6s ease-in-out infinite',
        shine: "shine 2.8s ease-in-out infinite",
        // ===== smooth spin loader (ใช้ใน LoadingOverlay)
        'spin-smooth': 'spinSmooth 1.4s linear infinite',
      
      },
    },
  },
  plugins: [],
};
