import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";
import { PG } from "@/lib/pg";



export async function POST(req: Request): Promise<Response> {
  try {
    const reqData: { transactionId: string; name: string; amount: number; mobile: string } = await req.json(); // Parse the request data

    // Extract transaction details
    const merchantTransactionId: string = reqData.transactionId;

    // Prepare the payload
    const data = {
      merchantId: PG.PG_MERCHENT_ID,
      merchantTransactionId: merchantTransactionId,
      name: reqData.name,
      amount: reqData.amount * 100, // Convert to paise (smallest currency unit)
      redirectUrl: PG.PG_REDIRECT_URL,
      redirectMode: PG.PG_CALL_MODE,
      callbackUrl: PG.PG_CALLBACK_URL,
      mobileNumber: reqData.mobile,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // Encode payload as Base64
    const payload:string = JSON.stringify(data);
    const payloadMain:string = Buffer.from(payload).toString("base64");

    // Generate checksum
    const keyIndex:number = 1;
    const string:string = payloadMain + "/pg/v1/pay" + PG.PG_SALT_KEY;
    const sha256:string = crypto.createHash("sha256").update(string).digest("hex");
    const checksum:string = `${sha256}###${keyIndex}`;

    // Define PhonePe API URL
    
      ;

    // API call options
    const options:any = {
      method: "POST",
      url: PG.PG_API_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    // Make the API call
    const response:any = await axios(options);

    // Return the response from PhonePe
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);

    // Handle errors
   // Handle errors: Narrow down the type of the `error` object
   const errorMessage = error instanceof Error ? error.message : "Unknown error";
   return NextResponse.json(
     { error: "Payment initiation failed", details: errorMessage },
     { status: 500 }
     );
  }
}