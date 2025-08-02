"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "부모님이 깜짝 놀라시거나 기분 나빠하시진 않을까요?",
      answer:
        "이 점을 가장 우려하실 만합니다. SafeCall은 이를 방지하기 위해 다음과 같은 안전장치를 마련했습니다:\n\n• **사전 동의 필수**: 모든 훈련은 피훈련자(부모님)의 명시적 동의 후에만 진행됩니다\n• **명확한 안내**: 훈련 시작 시 '이것은 보이스피싱 예방 훈련입니다'라고 먼저 안내합니다\n• **즉시 결과 알림**: 훈련 종료 즉시 SMS/알림톡으로 결과를 공유합니다\n• **가족 함께**: 신청자(자녀)와 함께 훈련 과정과 결과를 공유합니다\n\n실제로 대부분의 부모님들이 '이런 훈련이 있어서 다행이다', '실제로 도움이 된다'고 말씀하십니다.",
    },
    {
      question: "제 목소리는 어떻게 수집되고, 안전하게 관리되나요?",
      answer:
        "음성 데이터의 보안은 SafeCall의 최우선 과제입니다:\n\n**수집 방법**:\n• 간단한 문장 몇 개를 읽어주시는 것만으로 충분합니다\n• 전화나 앱을 통해 안전하게 수집됩니다\n\n**보안 관리**:\n• 모든 음성 데이터는 256-bit 암호화로 저장됩니다\n• 국내 클라우드 서버에만 보관됩니다\n• 훈련 목적 외에는 절대 사용되지 않습니다\n• 고객이 요청 시 즉시 완전 삭제됩니다\n\n**법적 보호**:\n• 개인정보보호법 및 관련 법령을 철저히 준수합니다\n• 제3자 제공은 절대 하지 않습니다",
    },
    {
      question: "연간 결제 외에 다른 옵션은 없나요?",
      answer:
        "현재 파운더스 클럽은 연간 결제만 제공하고 있습니다. 이는 다음과 같은 이유 때문입니다:\n\n**서비스 품질 향상**:\n• 장기적인 훈련 계획 수립이 가능합니다\n• 개인별 맞춤 시나리오 개발에 충분한 시간을 확보합니다\n\n**특별 혜택 제공**:\n• 50% 할인 혜택을 제공할 수 있습니다\n• 평생 할인 및 신규 기능 우선 이용권을 드립니다\n\n**정식 출시 후**에는 월간 결제 옵션도 제공할 예정이지만, 파운더스 클럽의 특별 혜택은 받으실 수 없습니다.",
    },
    {
      question: "훈련 전화는 어떤 번호로 걸려오나요?",
      answer:
        "훈련 전화는 다음과 같이 발신됩니다:\n\n**전용 번호 사용**:\n• SafeCall 전용 발신 번호를 사용합니다 (예: 1588-0000)\n• 실제 기관이나 개인 번호를 사칭하지 않습니다\n\n**명확한 구분**:\n• 훈련 시작 시 반드시 '보이스피싱 예방 훈련'임을 먼저 안내합니다\n• 실제 사기 전화와 혼동되지 않도록 안전장치를 마련했습니다\n\n**시간 조절**:\n• 고객이 원하는 시간대에 맞춰 훈련을 진행합니다\n• 야간이나 새벽 시간에는 절대 전화하지 않습니다\n\n**긴급 중단**:\n• 훈련 중 언제든 '중단'을 요청하시면 즉시 종료됩니다",
    },
    {
      question: "법적으로 문제는 없나요?",
      answer:
        "SafeCall은 모든 서비스를 합법적으로 제공합니다:\n\n**관련 법령 준수**:\n• 개인정보보호법\n• 정보통신망 이용촉진 및 정보보호 등에 관한 법률\n• 전기통신사업법\n• 소비자보호법\n\n**사전 동의 절차**:\n• 모든 훈련은 피훈련자의 명시적 동의 하에 진행됩니다\n• 동의 철회권을 보장합니다\n• 동의 범위를 명확히 고지합니다\n\n**윤리적 운영**:\n• 교육 및 예방 목적으로만 서비스를 제공합니다\n• 사기나 범죄 목적으로는 절대 사용되지 않습니다\n• 정기적인 법무 검토를 받고 있습니다\n\n**투명한 운영**:\n• 서비스 약관과 개인정보 처리방침을 명확히 공개합니다\n• 고객의 권리와 구제 방법을 안내합니다",
    },
    {
      question:
        "정말 효과가 있나요? 부모님이 실제로 사기를 구별할 수 있게 될까요?",
      answer:
        "네, 실제로 효과가 입증되고 있습니다:\n\n**훈련 효과**:\n• 반복 훈련을 통해 의심 신호를 빠르게 인지하게 됩니다\n• 실전과 같은 상황에서 침착하게 대응하는 능력이 향상됩니다\n• 가족과의 확인 습관이 자연스럽게 형성됩니다\n\n**데이터 기반 개선**:\n• 각 훈련 결과를 분석하여 개인별 취약점을 파악합니다\n• 맞춤형 추가 훈련을 제공합니다\n• 지속적인 모니터링으로 방어력을 유지합니다\n\n**실제 후기**:\n• 베타 테스터 중 90% 이상이 '도움이 된다'고 응답했습니다\n• '실제 사기 전화를 받았을 때 바로 알아챘다'는 사례가 다수 있습니다\n\n**과학적 접근**:\n• 인지심리학 전문가와 협력하여 훈련 시나리오를 개발합니다\n• 효과 측정을 위한 체계적인 평가 방법을 사용합니다",
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            자주 묻는 질문
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            궁금한 점이 있으시다면
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            고객님들이 가장 많이 궁금해하시는 질문들을 정리했습니다
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="mb-4"
            >
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-slate-100">
                    <div className="pt-4 text-slate-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              더 궁금한 점이 있으시나요?
            </h3>
            <p className="text-slate-600 mb-6">
              언제든 연락주세요. 24시간 내에 성심껏 답변드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:support@safecall.kr"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                📧 support@safecall.kr
              </a>
              <a
                href="tel:1588-0000"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                📞 1588-0000
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              평일 9시-18시 · 빠른 답변 보장
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
