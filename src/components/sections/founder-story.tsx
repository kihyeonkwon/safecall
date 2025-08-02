"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, Shield, Target } from "lucide-react";

export function FounderStorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Heart,
      title: "진정성",
      description: "가족을 지키고 싶은 마음에서 시작된 서비스입니다.",
    },
    {
      icon: Shield,
      title: "안전함",
      description: "고객의 개인정보와 가족의 안전을 최우선으로 합니다.",
    },
    {
      icon: Users,
      title: "소통",
      description: "고객과의 투명한 소통을 통해 더 나은 서비스를 만듭니다.",
    },
    {
      icon: Target,
      title: "효과성",
      description: "실제로 도움이 되는 훈련과 솔루션을 제공합니다.",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            저 또한 평범한 아들입니다
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            제 부모님을 지키고 싶은 마음에서 이 서비스를 시작했습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder photo and info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
              <div className="w-full h-full bg-slate-200 rounded-full flex items-center justify-center">
                <div className="text-6xl text-slate-500">👨‍💼</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              권기현 (SafeCall 창립자)
            </h3>
            <p className="text-slate-600 mb-6">
              AI 보안 전문가 · 가족을 사랑하는 아들
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <p className="text-slate-700 italic text-sm leading-relaxed">
                &ldquo;개발자로서 AI 기술의 발전을 누구보다 가까이에서 지켜봤습니다.
                그런데 그 기술이 악용되어 우리 부모님 세대를 위협한다는 사실을
                알게 되었을 때, 가만히 있을 수 없었습니다.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                왜 SafeCall을 만들게 되었을까요?
              </h4>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  어느 날, 70대이신 아버지께서 이상한 전화를 받으셨다고
                  하시더군요. &ldquo;아들 목소리 같았는데 뭔가 이상했어&rdquo;라고
                  말씀하시는 아버지의 표정에서 불안함을 느꼈습니다.
                </p>
                <p>
                  그때 깨달았습니다. AI 기술이 발전할수록, 우리가 가장 사랑하는
                  사람들이 가장 위험해진다는 것을. 그리고 기술로 만들어진 문제는
                  기술로 해결해야 한다는 것을.
                </p>
                <p className="font-semibold text-blue-600">
                  나쁜 놈들이 AI를 쓰기 전에, 우리가 먼저 AI로 가족을 보호해야
                  합니다.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">우리의 약속</h4>
              <p className="leading-relaxed">
                SafeCall은 단순한 비즈니스가 아닙니다. 우리 모두의 부모님을
                지키는 사회적 사명입니다. 저희는 이 사명을 가슴에 새기고, 고객의
                신뢰를 가장 소중한 자산으로 여기겠습니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
            SafeCall의 핵심 가치
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <p className="text-lg text-slate-700 italic leading-relaxed max-w-4xl mx-auto">
              &ldquo;여러분의 부모님도 제 부모님처럼 소중한 분들입니다. 함께
              지켜나가요. SafeCall이 여러분 가족의 든든한 방패가 되겠습니다.&rdquo;
            </p>
            <div className="mt-6">
              <div className="text-sm text-slate-500">SafeCall 창립자</div>
              <div className="text-lg font-semibold text-slate-900">
                권기현 드림
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
