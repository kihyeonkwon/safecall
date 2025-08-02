"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "아버지의 목소리로 걸려온 전화...",
    "'아들, 급하게 돈 좀 보내줘'",
    "딥페이크 보이스피싱, 다음은 우리 부모님일 수 있습니다.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const scrollToFoundersClub = () => {
    document
      .getElementById("founders-club")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Warning badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <AlertTriangle className="w-4 h-4" />
            2025년 새로운 위협: AI 음성 복제 기술 악용
          </motion.div>

          {/* Dynamic headline */}
          <motion.h1
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {heroTexts[currentText]}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed"
          >
            <span className="font-semibold text-red-600">
              2025년, AI가 당신 부모님의 목소리를 흉내 내기 시작했습니다.
            </span>
            <br />더 이상 먼 미래의 이야기가 아닙니다.
          </motion.p>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">87%</div>
              <div className="text-sm text-slate-600">AI 음성 복제 성공률</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">
                2,847억원
              </div>
              <div className="text-sm text-slate-600">
                2024년 보이스피싱 피해액
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
              <div className="text-sm text-slate-600">
                50대 이상 피해자 비율
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              onClick={scrollToFoundersClub}
              className="w-full sm:w-auto text-white bg-red-600 hover:bg-red-700 shadow-2xl hero-shadow"
            >
              <Shield className="w-5 h-5 mr-2" />
              파운더스 클럽 사전 등록하기
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("problem")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              위험성 자세히 보기
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              100% 안전한 훈련 환경
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              실시간 업데이트
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm flex items-center justify-center text-xs font-bold text-white">
                30
              </div>
              30일 무조건 환불보장
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
