"use client"
import React, { useState } from 'react';
import axios from 'axios';
import crypto from 'crypto';

const PaymentForm = () => {
    const [transactionId, setTransactionId] = useState('');
    const [MUID, setMUID] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [redirectUrl, setRedirectUrl] = useState('');

    const saltKey = "dd29aaa2-f762-43f2-9146-83ffc4aba9b7";
    const saltIndex = 1;

    // Function to calculate the checksum
    const calculateChecksum = (payloadBase64: string) => {
        const stringToHash = payloadBase64 + '/pg/v1/pay' + saltKey;
        return crypto.createHash('sha256').update(stringToHash).digest('hex') + '###' + saltIndex;
    };

    // Function to handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        // Create the request payload
        const data = {
            merchantId: "M22VHVREF764V",
            merchantTransactionId: transactionId,
            merchantUserId: MUID,
            amount: parseInt(amount) * 100, // Amount in Paise
            redirectUrl: "https://www.thecraftly.shop",
            redirectMode: "REDIRECT",
            callbackUrl: "https://www.thecraftly.shop/payments",
            paymentInstrument: { type: "PAY_PAGE" },
            mobileNumber,
        };

        const payload = JSON.stringify(data);
        const payloadBase64 = Buffer.from(payload).toString('base64');
        const checksum = calculateChecksum(payloadBase64);

        // Making the API request to PhonePe payment endpoint
        try {
            const response = await axios.post('https://api.phonepe.com/apis/hermes/pg/v1/pay', {
                request: payloadBase64
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-VERIFY': checksum
                }
            });

            if (response.data.success) {
                // If payment is initiated successfully, store and log the redirect URL
                const url = response.data.data.instrumentResponse.redirectInfo.url;
                setRedirectUrl(url);
                console.log('Redirect URL:', url);  // Log the redirect URL to the console
            } else {
                setError('Payment initiation failed.');
            }
        } catch (error) {
            setError('Error processing payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-center">Payment Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">Transaction ID</label>
                    <input
                        type="text"
                        id="transactionId"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="MUID" className="block text-sm font-medium text-gray-700">MUID</label>
                    <input
                        type="text"
                        id="MUID"
                        value={MUID}
                        onChange={(e) => setMUID(e.target.value)}
                        required
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (INR)</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 disabled:bg-indigo-300"
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </div>

                {error && <p className="text-red-500 text-center">{error}</p>}
            </form>

            {redirectUrl && (
                <div className="mt-4 text-center">
                    <p>Redirecting to payment page...</p>
                    <a
                        href={redirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800"
                    >
                        Click here if not redirected
                    </a>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
