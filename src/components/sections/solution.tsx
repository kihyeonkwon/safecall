"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  UserPlus,
  Phone,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Zap,
  Shield,
  Users,
} from "lucide-react";

export function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: UserPlus,
      title: "파운더스 클럽 가입",
      description: "가족 정보를 등록하고 안전한 훈련 환경을 구축합니다",
      details: "• 간단한 회원가입\n• 가족 정보 등록\n• 훈련 목표 설정",
    },
    {
      icon: Phone,
      title: "AI 모의 훈련 시작",
      description: "최신 시나리오로 실전과 같은 모의 훈련 전화를 발신합니다",
      details:
        "• 실제 보이스피싱과 동일한 시나리오\n• 안전한 환경에서 진행\n• 다양한 사기 유형 훈련",
    },
    {
      icon: BarChart3,
      title: "즉시 결과 분석",
      description: "훈련 결과를 즉시 분석하고 상세한 리포트를 제공합니다",
      details: "• 성공/실패 즉시 알림\n• 상세한 분석 리포트\n• 개선점 제시",
    },
    {
      icon: TrendingUp,
      title: "방어력 상승",
      description: "반복 훈련을 통해 가족의 피싱 방어력을 지속적으로 높입니다",
      details: "• 단계별 난이도 조절\n• 진행도 추적\n• 맞춤형 훈련 제공",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "최신 시나리오 자동 업데이트",
      description:
        "실제 발생하는 보이스피싱 사례를 실시간으로 분석하여 훈련에 반영합니다.",
    },
    {
      icon: Shield,
      title: "AI 목소리 합성 (예정)",
      description:
        "가족의 목소리를 학습하여 더욱 현실적인 훈련 환경을 제공합니다.",
    },
    {
      icon: Users,
      title: "가족 대시보드",
      description: "온 가족의 훈련 현황과 방어력을 한눈에 확인할 수 있습니다.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            해결책이 있습니다
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            나쁜 놈들이 AI를 쓰기 전에,
            <br />
            <span className="text-blue-600">우리가 먼저 AI로 막습니다</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            최고의 예방은 실전과 같은 <strong>훈련</strong>입니다.
            <br />
            SafeCall이 제공하는 AI 기반 보이스피싱 예방 훈련으로 가족을
            보호하세요.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
            SafeCall 작동 방식
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 transform -translate-y-1/2"></div>
                )}

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 h-full hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-sm text-slate-500 whitespace-pre-line">
                    {step.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
            핵심 기능
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-3xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              부모님의 자산을 지키는 가장 확실한 투자
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
              한 번의 보이스피싱 피해로 잃을 수 있는 금액을 생각해보세요.
              <br />
              SafeCall은 그 피해를 예방하는 가장 저렴하고 확실한 방법입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">월 1만원</div>
                <div className="text-blue-200">SafeCall 이용료</div>
              </div>
              <div className="text-center border-l border-r border-blue-400 md:border-l md:border-r md:border-b-0 border-b border-t-0">
                <div className="text-3xl font-bold mb-2">VS</div>
                <div className="text-blue-200">비교해보세요</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1,200만원</div>
                <div className="text-blue-200">평균 피해액</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
