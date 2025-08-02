"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Lock,
  CheckCircle,
  FileText,
  Phone,
  RefreshCw,
  UserCheck,
  Award,
} from "lucide-react";

export function TrustSafetySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securityFeatures = [
    {
      icon: Lock,
      title: "서버-통신 전 구간 암호화",
      description: "모든 데이터는 256-bit SSL 암호화로 보호됩니다",
    },
    {
      icon: Shield,
      title: "개인정보보호법 준수",
      description: "GDPR, 개인정보보호법 등 모든 관련 법규를 철저히 준수합니다",
    },
    {
      icon: UserCheck,
      title: "사전 동의 절차",
      description: "모든 훈련은 피훈련자의 명시적 동의 하에서만 진행됩니다",
    },
    {
      icon: Award,
      title: "보안 인증 준비중",
      description: "ISO 27001, SOC 2 Type II 인증 취득 예정",
    },
  ];

  const ethicalGuidelines = [
    {
      step: "1단계",
      title: "사전 안내 및 동의",
      description:
        "피훈련자(부모님)에게 서비스 목적과 방법을 명확히 설명하고 동의를 받습니다.",
      details: [
        "서비스 목적 상세 설명",
        "훈련 방법 및 절차 안내",
        "개인정보 처리 방침 고지",
        "서면 또는 전자적 동의 확보",
      ],
    },
    {
      step: "2단계",
      title: "안전한 훈련 환경",
      description:
        "실제 사기와 구별되도록 안전장치를 마련하여 훈련을 진행합니다.",
      details: [
        "훈련 전용 번호 사용",
        "훈련 시작/종료 명확한 안내",
        "긴급 중단 기능 제공",
        "즉시 결과 알림 발송",
      ],
    },
    {
      step: "3단계",
      title: "사후 관리",
      description:
        "훈련 후 충분한 설명과 피드백을 제공하여 불안감을 해소합니다.",
      details: [
        "훈련 결과 상세 설명",
        "개선점 맞춤 제공",
        "가족 구성원 공유",
        "지속적인 사후 지원",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            신뢰와 안전
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            고객님의 신뢰가
            <br />
            저희의 가장 큰 자산입니다
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            법률과 원칙을 철저히 지키며, 고객의 개인정보와 가족의 안전을
            최우선으로 합니다
          </p>
        </motion.div>

        {/* Security measures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
            보안 및 개인정보 보호
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ethical guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-4">
            윤리적 운영 원칙
          </h3>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            피훈련자(부모님)의 권리를 존중하고 윤리적 문제를 사전에 방지합니다
          </p>

          <div className="space-y-8">
            {ethicalGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl font-bold text-lg mb-4">
                      {guideline.step}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {guideline.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {guideline.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {guideline.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Refund policy */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                100% 환불 보장
              </h4>
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">
              서비스에 만족하지 않으시면 30일 내 100% 전액 환불해드립니다.
              복잡한 절차나 이유 설명 없이 간단한 요청만으로 가능합니다.
            </p>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="text-sm text-slate-600">
                <strong className="text-green-600">환불 조건:</strong>
                <br />
                • 서비스 이용 시작일로부터 30일 이내
                <br />
                • 간단한 온라인 신청으로 즉시 처리
                <br />• 영업일 기준 3-5일 내 계좌 입금
              </div>
            </div>
          </div>

          {/* Contact information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">투명한 소통</h4>
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">
              궁금한 점이나 우려사항이 있으시면 언제든 연락주세요. 투명하고
              정직한 소통으로 고객의 신뢰를 얻어가겠습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4" />
                <span>고객센터: 1588-0000 (평일 9시-18시)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FileText className="w-4 h-4" />
                <span>이메일: support@safecall.kr</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4" />
                <span>24시간 내 답변 보장</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legal compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              법적 준수사항
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed max-w-4xl mx-auto">
              SafeCall은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에
              관한 법률, 전기통신사업법 등 관련 법령을 철저히 준수합니다. 모든
              서비스는 합법적인 절차와 방법으로 제공되며, 정기적인 법무 검토를
              통해 컴플라이언스를 유지합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
