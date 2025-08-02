"use client";

import { Heart, Shield, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">SafeCall</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              AI 기술로 가족을 보호하는 보이스피싱 예방 훈련 서비스입니다.
              부모님의 자산과 마음의 평안을 지키는 것이 저희의 사명입니다.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">
                가족을 사랑하는 마음으로 만든 서비스
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1588-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@safecall.kr</span>
              </div>
              <div className="text-sm">
                <div>평일 9시-18시</div>
                <div className="text-xs text-slate-500">
                  24시간 내 답변 보장
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">법적 고지</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                환불정책
              </a>
              <a href="#" className="hover:text-white transition-colors">
                사업자정보
              </a>
            </div>
          </div>
        </div>

        <hr className="border-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © 2025 SafeCall. All rights reserved. | 사업자등록번호: 000-00-00000
          </div>
          <div className="text-slate-500 text-xs">
            이 서비스는 교육 및 예방 목적으로만 제공됩니다
          </div>
        </div>
      </div>
    </footer>
  );
}
