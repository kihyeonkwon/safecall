"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { approveKakaoPayment } from "@/lib/kakao-pay";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pgToken = searchParams.get("pg_token");
    const tid = searchParams.get("tid");
    const partnerOrderId = searchParams.get("partner_order_id");
    const partnerUserId = searchParams.get("partner_user_id");

    if (pgToken && tid && partnerOrderId && partnerUserId) {
      approvePayment(tid, pgToken, partnerOrderId, partnerUserId);
    } else {
      setStatus("error");
      setMessage("결제 정보가 없습니다.");
    }
  }, [searchParams]);

  const approvePayment = async (
    tid: string,
    pgToken: string,
    partnerOrderId: string,
    partnerUserId: string
  ) => {
    try {
      await approveKakaoPayment(tid, pgToken, partnerOrderId, partnerUserId);
      setStatus("success");
      setMessage("결제가 성공적으로 완료되었습니다!");
    } catch {
      setStatus("error");
      setMessage("결제 승인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">
              결제 처리 중
            </h1>
            <p className="text-slate-600">잠시만 기다려주세요...</p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              결제 완료!
            </h1>
            <p className="text-slate-600 mb-6">{message}</p>
            <div className="bg-green-50 p-4 rounded-xl border border-green-200 mb-6">
              <h3 className="font-semibold text-green-800 mb-2">다음 단계</h3>
              <ul className="text-sm text-green-700 space-y-1 text-left">
                <li>• 24시간 내 환영 이메일 발송</li>
                <li>• 피훈련자 동의 절차 안내</li>
                <li>• 첫 번째 훈련 일정 조율</li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              홈으로 돌아가기
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              결제 실패
            </h1>
            <p className="text-slate-600 mb-6">{message}</p>
            <Link
              href="/#payment-form"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 시도하기
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
