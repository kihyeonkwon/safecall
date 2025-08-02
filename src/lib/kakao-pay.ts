// KakaoPay API integration utility
export interface KakaoPayRequest {
  cid: string;
  partner_order_id: string;
  partner_user_id: string;
  item_name: string;
  quantity: number;
  total_amount: number;
  tax_free_amount: number;
  approval_url: string;
  cancel_url: string;
  fail_url: string;
}

export interface KakaoPayResponse {
  tid: string;
  tms_result: boolean;
  next_redirect_app_url: string;
  next_redirect_mobile_url: string;
  next_redirect_pc_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;
  created_at: string;
}

export async function requestKakaoPayment(data: {
  subscriberName: string;
  subscriberEmail: string;
  subscriberPhone: string;
}): Promise<KakaoPayResponse> {
  const paymentData: KakaoPayRequest = {
    cid: process.env.NEXT_PUBLIC_KAKAOPAY_CID || "TC0ONETIME",
    partner_order_id: `safecall_${Date.now()}`,
    partner_user_id: data.subscriberEmail,
    item_name: "SafeCall 파운더스 클럽 (연간)",
    quantity: 1,
    total_amount: 120000,
    tax_free_amount: 0,
    approval_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
    fail_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/fail`,
  };

  const response = await fetch("/api/kakao-pay/ready", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      paymentData,
      userInfo: data,
    }),
  });

  if (!response.ok) {
    throw new Error("KakaoPay 결제 요청에 실패했습니다.");
  }

  return response.json();
}

export async function approveKakaoPayment(
  tid: string,
  pgToken: string,
  partnerOrderId: string,
  partnerUserId: string
) {
  const response = await fetch("/api/kakao-pay/approve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tid,
      pg_token: pgToken,
      partner_order_id: partnerOrderId,
      partner_user_id: partnerUserId,
    }),
  });

  if (!response.ok) {
    throw new Error("KakaoPay 결제 승인에 실패했습니다.");
  }

  return response.json();
}
