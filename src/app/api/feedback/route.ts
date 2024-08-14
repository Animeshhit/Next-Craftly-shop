import { NextRequest, NextResponse } from "next/server";

// Define the type for your feedback entries (Optional, if using TypeScript)
type Feedback = {
  name: string;
  username: string;
  feedback: string;
};

export function GET(req: NextRequest) {
  const feedbackData: Feedback[] = [
    {
      name: "Jane Doe",
      username: "janed123",
      feedback:
        "I absolutely love the gifts I purchased! They were beautifully wrapped and the quality was top-notch. Highly recommend this shop!",
    },
    {
      name: "John Smith",
      username: "johnsmitty",
      feedback:
        "Great variety of gifts and excellent customer service. My order arrived quickly and exceeded my expectations. Will definitely be shopping here again!",
    },
    {
      name: "Alice Brown",
      username: "aliceb89",
      feedback:
        "Such a delightful shopping experience! The gifts were unique and beautifully crafted. My friends and family loved them. Thank you!",
    },
    {
      name: "Michael Lee",
      username: "michaellee78",
      feedback:
        "Amazing products and fast delivery. The gift wrapping was a lovely touch. I'm very pleased with my purchase and will be coming back for more.",
    },
    {
      name: "Emily White",
      username: "emilyw",
      feedback:
        "Fantastic selection of gifts for all occasions. The customer service team was very helpful in assisting me with my order. Highly satisfied!",
    },
    {
      name: "John Smith",
      username: "johnsmitty",
      feedback:
        "Great variety of gifts and excellent customer service. My order arrived quickly and exceeded my expectations. Will definitely be shopping here again!",
    },
  ];

  return NextResponse.json(feedbackData);
}
