"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <XCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">결제 취소</h1>
        <p className="text-slate-600 mb-6">
          결제가 취소되었습니다. 언제든지 다시 시도하실 수 있습니다.
        </p>
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
