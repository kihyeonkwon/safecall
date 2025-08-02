"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Check,
  Star,
  Zap,
  Users,
  Gift,
  ShieldCheck,
} from "lucide-react";

export function FoundersClubSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const benefits = [
    {
      icon: Star,
      title: "평생 할인 혜택 (Lifetime Deal)",
      description: "앞으로 요금이 인상되어도 평생 이 가격으로 이용",
      highlight: true,
    },
    {
      icon: Zap,
      title: "신규 기능 우선 체험권",
      description: "AI 목소리 합성 기능 등 핵심 기능 무료 업그레이드",
      highlight: true,
    },
    {
      icon: Users,
      title: "창업자와의 간담회 초청",
      description: "분기별 파운더스 클럽 멤버 전용 이벤트 참여",
      highlight: false,
    },
    {
      icon: Gift,
      title: "전용 고객 지원",
      description: "우선 고객지원 및 1:1 맞춤 컨설팅 서비스",
      highlight: false,
    },
    {
      icon: ShieldCheck,
      title: "베타 테스터 자격",
      description: "새로운 기능을 가장 먼저 체험하고 피드백 제공",
      highlight: false,
    },
  ];

  const scrollToPayment = () => {
    document
      .getElementById("payment-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="founders-club"
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Crown className="w-5 h-5" />
            특별 제안
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            세상을 바꾸는 첫 걸음에
            <br />
            함께하는{" "}
            <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              파운더스 클럽
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            선착순 100분에게만 드리는 파격적인 혜택
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Limited time offer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-3xl border border-red-400/30 mb-8">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold mb-2">⏰ 한정 시간 제안</div>
                <div className="text-red-100">이 기회는 다시 오지 않습니다</div>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-mono font-bold text-white bg-black/20 px-4 py-2 rounded-lg inline-block">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-red-100 mt-2">남은 시간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  100명 한정
                </div>
                <div className="text-red-100">파운더스 클럽 모집</div>
                <div className="mt-4 bg-black/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
                <div className="text-sm text-red-100 mt-2">
                  67명 가입 완료 · 33자리 남음
                </div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">
                파운더스 클럽 전용 혜택
              </h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${
                    benefit.highlight
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      benefit.highlight ? "bg-purple-600" : "bg-white/10"
                    }`}
                  >
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold mb-1 ${
                        benefit.highlight ? "text-purple-300" : "text-white"
                      }`}
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  {benefit.highlight && (
                    <Crown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 sticky top-8">
              {/* Regular pricing (crossed out) */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="text-xl text-slate-400 line-through opacity-60">
                    정식 출시가: 월 20,000원
                  </div>
                  <div className="absolute inset-0 bg-red-500/20 rotate-12 rounded-lg blur-sm"></div>
                </div>
              </div>

              {/* Special pricing */}
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl border border-purple-400/30">
                  <div className="text-sm text-purple-200 mb-2">
                    파운더스 클럽 특별가
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    ₩120,000
                    <span className="text-lg text-purple-200">/년</span>
                  </div>
                  <div className="text-purple-200">
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
                      50% 할인
                    </span>
                    <span className="ml-2">월 10,000원</span>
                  </div>
                </div>
              </div>

              {/* Feature comparison */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">무제한 훈련 전화</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">실시간 시나리오 업데이트</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">가족 대시보드</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">24/7 고객 지원</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-purple-300 font-semibold">
                    평생 할인 혜택
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-purple-300 font-semibold">
                    AI 목소리 합성 (예정)
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                size="xl"
                onClick={scrollToPayment}
                className="w-full text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl border-0"
              >
                <Crown className="w-5 h-5 mr-2" />
                네, 부모님을 위해 지금 투자하겠습니다
              </Button>

              <div className="text-center mt-4">
                <div className="text-sm text-slate-400">
                  연 12만원 · 50% 할인 적용
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  💳 안전한 결제 · 🔒 30일 환불보장
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <p className="text-lg text-slate-300 mb-4">
              🚨 <strong>중요:</strong> 파운더스 클럽 혜택은 선착순 100명에게만
              제공됩니다
            </p>
            <p className="text-slate-400">
              정식 출시 후에는 이 가격으로 이용하실 수 없습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
