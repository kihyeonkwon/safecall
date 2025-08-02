"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function PaymentFail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">결제 실패</h1>
        <p className="text-slate-600 mb-6">
          결제 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
        <div className="bg-red-50 p-4 rounded-xl border border-red-200 mb-6">
          <p className="text-sm text-red-700">
            문제가 계속될 경우 고객센터로 문의해주세요.
          </p>
        </div>
        <Link
          href="/#payment-form"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 시도하기
        </Link>
      </div>
    </div>
  );
}
