import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { tid, pg_token, partner_order_id, partner_user_id } =
      await request.json();

    // KakaoPay Approve API call
    const response = await fetch(
      "https://open-api.kakaopay.com/online/v1/payment/approve",
      {
        method: "POST",
        headers: {
          Authorization: `SECRET_KEY ${process.env.KAKAOPAY_ADMIN_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cid: process.env.NEXT_PUBLIC_KAKAOPAY_CID,
          tid,
          partner_order_id,
          partner_user_id,
          pg_token,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("KakaoPay Approve Error:", errorData);
      return NextResponse.json(
        { error: "KakaoPay 결제 승인에 실패했습니다." },
        { status: 500 }
      );
    }

    const approvalResult = await response.json();

    // Update payment status in your database here
    // await updatePaymentStatus(tid, 'approved', approvalResult);

    return NextResponse.json(approvalResult);
  } catch (error) {
    console.error("Payment approval error:", error);
    return NextResponse.json(
      { error: "결제 승인 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
