"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Clock, ArrowRight, Heart } from "lucide-react";

export function FinalCTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToPayment = () => {
    document
      .getElementById("payment-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            지금이 마지막 기회입니다
          </h2>
          <p className="text-xl md:text-2xl text-red-200 max-w-4xl mx-auto leading-relaxed">
            부모님의 자산을 지키는 가장 확실한 투자,
            <br />
            <span className="text-yellow-400 font-semibold">파운더스 클럽</span>
            으로 함께하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Value proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    위험은 실시간으로 증가하고 있습니다
                  </h3>
                  <p className="text-slate-300">
                    AI 기술이 발전할수록 보이스피싱은 더욱 정교해집니다. 내일은
                    오늘보다 더 위험할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    한 번의 피해가 가져올 수 있는 상실
                  </h3>
                  <p className="text-slate-300">
                    평균 피해액 1,200만원, 하지만 잃는 것은 돈만이 아닙니다.
                    부모님의 신뢰와 마음의 상처는 돈으로 회복할 수 없습니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    예방은 치료보다 훨씬 쉽습니다
                  </h3>
                  <p className="text-slate-300">
                    월 1만원으로 가족 전체를 보호할 수 있습니다. 이는 한 번의
                    외식비보다도 적은 금액입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-400" />
                <h4 className="text-lg font-bold">
                  마음의 평안, 그것이 진짜 가치입니다
                </h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                &ldquo;우리 부모님은 안전하다&rdquo;는 확신을 갖고 살 수 있다면,
                그 평안함은 얼마의 가치가 있을까요?
              </p>
            </div>
          </motion.div>

          {/* Right side - Final offer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-3xl border border-red-400/30 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Clock className="w-4 h-4" />
                선착순 100명 한정
              </div>
              <h3 className="text-2xl font-bold mb-2">
                파운더스 클럽 마지막 모집
              </h3>
              <p className="text-red-100">이 혜택은 다시 제공되지 않습니다</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-white" />
                <span>월 1만원 (연 12만원)</span>
              </div>
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span>평생 할인 혜택</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-white" />
                <span>30일 100% 환불 보장</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-lg text-red-100 mb-2">
                정가 월 20,000원 → 파운더스 클럽
              </div>
              <div className="text-4xl font-bold text-white">
                월 10,000원
                <span className="text-lg text-red-100 ml-2">50% 할인</span>
              </div>
            </div>

            <Button
              size="xl"
              onClick={scrollToPayment}
              className="w-full text-red-600 bg-white hover:bg-red-50 shadow-2xl border-0 font-bold"
            >
              지금 바로 부모님을 보호하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <div className="text-center mt-4 text-red-100 text-sm">
              💳 안전한 결제 · 🔒 즉시 서비스 시작
            </div>
          </motion.div>
        </div>

        {/* Bottom urgency message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">기억해주세요</h4>
            <p className="text-lg text-slate-300 leading-relaxed">
              보이스피싱 범죄자들은 매일 새로운 기술과 수법을 개발하고 있습니다.
              <br />
              우리가 먼저 준비하지 않으면, 언젠가는 우리 가족이 피해자가 될 수
              있습니다.
              <br />
              <span className="text-yellow-400 font-semibold">
                지금 행동하세요. 내일은 늦을 수 있습니다.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
