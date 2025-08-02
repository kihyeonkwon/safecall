import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { paymentData } = await request.json();

    // KakaoPay Ready API call
    const response = await fetch(
      "https://open-api.kakaopay.com/online/v1/payment/ready",
      {
        method: "POST",
        headers: {
          Authorization: `SECRET_KEY ${process.env.KAKAOPAY_ADMIN_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("KakaoPay API Error:", errorData);
      return NextResponse.json(
        { error: "KakaoPay 결제 준비에 실패했습니다." },
        { status: 500 }
      );
    }

    const kakaoPayResponse = await response.json();

    // Store payment info in your database here
    // await savePaymentInfo({
    //   tid: kakaoPayResponse.tid,
    //   userInfo,
    //   paymentData,
    //   status: 'ready'
    // });

    return NextResponse.json(kakaoPayResponse);
  } catch (error) {
    console.error("Payment ready error:", error);
    return NextResponse.json(
      { error: "결제 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
