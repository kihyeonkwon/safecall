"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CreditCard,
  Shield,
  User,
  Check,
  Crown,
  Smartphone,
} from "lucide-react";

const formSchema = z.object({
  // Payment method
  paymentMethod: z.enum(["kakaopay", "card"]).optional(),

  // Subscriber info
  subscriberName: z.string().min(2, "이름을 입력해주세요"),
  subscriberPhone: z.string().min(10, "올바른 전화번호를 입력해주세요"),
  subscriberEmail: z.string().email("올바른 이메일을 입력해주세요"),

  // Trainee info
  traineeName: z.string().min(2, "훈련받을 분의 이름을 입력해주세요"),
  traineePhone: z.string().min(10, "훈련받을 분의 전화번호를 입력해주세요"),
  relationship: z.string().min(1, "관계를 선택해주세요"),

  // Agreements
  agreePrivacy: z
    .boolean()
    .refine((val) => val === true, "개인정보 처리방침에 동의해주세요"),
  agreeTraining: z
    .boolean()
    .refine((val) => val === true, "훈련 진행 동의에 체크해주세요"),
  agreeMarketing: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function PaymentFormSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<
    "kakaopay" | "card" | null
  >(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Validate payment method selection
    if (!selectedPayment) {
      alert("결제 방법을 선택해주세요");
      return;
    }

    setIsSubmitting(true);

    try {
      if (selectedPayment === "kakaopay") {
        // KakaoPay integration
        const { requestKakaoPayment } = await import("@/lib/kakao-pay");

        const kakaoPayResponse = await requestKakaoPayment({
          subscriberName: data.subscriberName,
          subscriberEmail: data.subscriberEmail,
          subscriberPhone: data.subscriberPhone,
        });

        // Redirect to KakaoPay
        if (kakaoPayResponse.next_redirect_pc_url) {
          window.location.href = kakaoPayResponse.next_redirect_pc_url;
        } else {
          throw new Error("KakaoPay 리다이렉트 URL을 받지 못했습니다.");
        }
      } else if (selectedPayment === "card") {
        // Credit card PG integration logic
        console.log("Processing card payment...");

        // For now, simulate success
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "결제 처리 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section
        id="payment-form"
        className="py-24 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-green-200">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                파운더스 클럽 가입을 축하드립니다! 🎉
              </h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                결제가 성공적으로 완료되었습니다.
                <br />곧 등록하신 이메일과 전화번호로 상세한 안내를
                보내드리겠습니다.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-8">
                <h3 className="font-semibold text-green-800 mb-3">다음 단계</h3>
                <ul className="text-sm text-green-700 space-y-2 text-left">
                  <li>• 24시간 내 환영 이메일 발송</li>
                  <li>• 피훈련자(부모님) 동의 절차 안내</li>
                  <li>• 첫 번째 훈련 일정 조율</li>
                  <li>• 파운더스 클럽 전용 대시보드 접근권 제공</li>
                </ul>
              </div>
              <p className="text-slate-600">
                SafeCall과 함께 가족의 안전을 지켜주셔서 감사합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="payment-form"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Crown className="w-4 h-4" />
            파운더스 클럽 등록
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            부모님을 보호하는 첫 걸음
          </h2>
          <p className="text-lg text-slate-600">
            간단한 정보 입력으로 바로 시작하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              {/* Subscriber Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  신청자 정보
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      이름 *
                    </label>
                    <input
                      {...register("subscriberName")}
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                    {errors.subscriberName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subscriberName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      전화번호 *
                    </label>
                    <input
                      {...register("subscriberPhone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                    {errors.subscriberPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subscriberPhone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    {...register("subscriberEmail")}
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="hong@email.com"
                  />
                  {errors.subscriberEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subscriberEmail.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Trainee Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  훈련받을 분 정보 (부모님)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      성함 *
                    </label>
                    <input
                      {...register("traineeName")}
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="홍부모"
                    />
                    {errors.traineeName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.traineeName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      관계 *
                    </label>
                    <select
                      {...register("relationship")}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">선택해주세요</option>
                      <option value="부모">부모</option>
                      <option value="조부모">조부모</option>
                      <option value="기타 가족">기타 가족</option>
                    </select>
                    {errors.relationship && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.relationship.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    전화번호 *
                  </label>
                  <input
                    {...register("traineePhone")}
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010-9876-5432"
                  />
                  {errors.traineePhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.traineePhone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  결제 방법 선택
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* KakaoPay Option */}
                  <motion.div
                    className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedPayment === "kakaopay"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-slate-200 bg-white hover:border-yellow-300"
                    }`}
                    onClick={() => {
                      setSelectedPayment("kakaopay");
                      setValue("paymentMethod", "kakaopay");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-yellow-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">
                          카카오페이
                        </h4>
                        <p className="text-sm text-slate-600">
                          간편하고 안전한 결제
                        </p>
                        <div className="text-xs text-green-600 font-medium mt-1">
                          ✓ 대부분 사용자 보유 · 추천
                        </div>
                      </div>
                      {selectedPayment === "kakaopay" && (
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Card PG Option */}
                  <motion.div
                    className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedPayment === "card"
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-300"
                    }`}
                    onClick={() => {
                      setSelectedPayment("card");
                      setValue("paymentMethod", "card");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">
                          신용카드
                        </h4>
                        <p className="text-sm text-slate-600">
                          카드로 직접 결제
                        </p>
                        <div className="text-xs text-slate-500 mt-1">
                          모든 카드사 지원
                        </div>
                      </div>
                      {selectedPayment === "card" && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
                {!selectedPayment && (
                  <p className="text-red-500 text-sm mt-2">
                    결제 방법을 선택해주세요
                  </p>
                )}
              </div>

              {/* Agreements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  약관 동의
                </h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      {...register("agreePrivacy")}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-700">
                      개인정보 수집 및 이용에 동의합니다 (필수)
                      <a href="#" className="text-blue-600 underline ml-1">
                        자세히 보기
                      </a>
                    </span>
                  </label>
                  {errors.agreePrivacy && (
                    <p className="text-red-500 text-sm">
                      {errors.agreePrivacy.message}
                    </p>
                  )}

                  <label className="flex items-start gap-3">
                    <input
                      {...register("agreeTraining")}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-700">
                      피훈련자 사전 동의 절차를 거쳐 훈련을 진행하는 것에
                      동의합니다 (필수)
                    </span>
                  </label>
                  {errors.agreeTraining && (
                    <p className="text-red-500 text-sm">
                      {errors.agreeTraining.message}
                    </p>
                  )}

                  <label className="flex items-start gap-3">
                    <input
                      {...register("agreeMarketing")}
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-700">
                      마케팅 정보 수신에 동의합니다 (선택)
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !selectedPayment}
                className={`w-full text-white transition-all duration-300 ${
                  !selectedPayment
                    ? "bg-gray-400 cursor-not-allowed"
                    : selectedPayment === "kakaopay"
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    {selectedPayment === "kakaopay"
                      ? "카카오페이 결제 중..."
                      : "카드 결제 중..."}
                  </div>
                ) : !selectedPayment ? (
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    결제 방법을 선택해주세요
                  </div>
                ) : selectedPayment === "kakaopay" ? (
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    카카오페이로 연 120,000원 결제하기
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    신용카드로 연 120,000원 결제하기
                  </div>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white sticky top-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                주문 요약
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span>SafeCall 파운더스 클럽</span>
                  <span>연간</span>
                </div>
                <div className="flex justify-between items-center text-purple-200 line-through">
                  <span>정가</span>
                  <span>₩240,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>파운더스 클럽 할인 (50%)</span>
                  <span className="text-yellow-400">-₩120,000</span>
                </div>
                <hr className="border-purple-400" />
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>총 결제 금액</span>
                  <span>₩120,000</span>
                </div>
                <div className="text-center text-purple-200 text-sm">
                  월 10,000원 (50% 할인가)
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>평생 할인 혜택</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>신규 기능 우선 체험</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>30일 환불 보장</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>24/7 고객 지원</span>
                </div>
              </div>

              <div className="bg-black/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-semibold">안전한 결제</span>
                </div>
                <p className="text-xs text-purple-200">
                  모든 결제는 SSL 암호화로 보호되며, PCI DSS 인증을 받은 결제
                  시스템을 사용합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
