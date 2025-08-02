"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, TrendingUp, Users, Zap } from "lucide-react";

export function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statistics = [
    {
      icon: TrendingUp,
      number: "2,847억원",
      label: "2024년 보이스피싱 피해액",
      description: "전년 대비 34% 증가",
      color: "text-red-600",
    },
    {
      icon: Users,
      number: "73%",
      label: "50대 이상 피해자",
      description: "부모님 세대가 주요 타겟",
      color: "text-orange-600",
    },
    {
      icon: Zap,
      number: "87%",
      label: "AI 음성 복제 성공률",
      description: "3초면 충분한 딥페이크",
      color: "text-red-700",
    },
  ];

  const caseSamples = [
    {
      title: "검사 사칭형",
      scenario:
        '"안녕하세요, 서울중앙지검 김검사입니다. 귀하의 계좌가 범죄에 연루되어 즉시 조치가 필요합니다."',
      impact: "평균 피해액: 1,200만원",
    },
    {
      title: "자녀 납치 협박형",
      scenario:
        '"엄마, 도와줘! 나 지금 납치됐어. 빨리 돈 보내지 않으면 큰일나!" (실제 자녀 음성으로 복제)',
      impact: "평균 피해액: 2,800만원",
    },
    {
      title: "대출 빙자형",
      scenario:
        '"안녕하세요, OO은행입니다. 고객님께 특별 저금리 대출 상품을 안내드립니다."',
      impact: "평균 피해액: 850만원",
    },
  ];

  return (
    <section
      id="problem"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-900/50 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            긴급 경고
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            이것은 먼 미래의 이야기가 아닙니다
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            지금 이 순간에도 AI 기술을 악용한 새로운 형태의 보이스피싱이 우리
            가족을 노리고 있습니다.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case samples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            실제 피해 사례 분석
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseSamples.map((sample, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-red-800/20 p-6 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-bold text-red-300">
                    {sample.title}
                  </h4>
                </div>
                <blockquote className="text-slate-300 italic mb-4 text-sm leading-relaxed">
                  "{sample.scenario}"
                </blockquote>
                <div className="text-orange-400 font-semibold text-sm">
                  {sample.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* News references */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold mb-8">주요 언론 보도</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">KBS 뉴스</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-lg font-semibold">MBC 뉴스</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-lg font-semibold">SBS 뉴스</div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="text-lg font-semibold">연합뉴스</div>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            "AI 딥페이크 기술을 악용한 신종 보이스피싱 급증 경고"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
