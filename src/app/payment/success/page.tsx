"use client";

import { Suspense } from "react";
import PaymentSuccessContent from "./success-content";

export default function PaymentSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">
              결제 처리 중
            </h1>
            <p className="text-slate-600">잠시만 기다려주세요...</p>
          </div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
