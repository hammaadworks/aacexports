import { useState } from 'react';
import { sendLarkMessage, decodeSecret, decryptXor } from './core';

interface UseLarkOptions {
    webhookUrlEnv: string | undefined;
    messagePrefixEnv?: string | undefined;
    xorKey?: string;
}

interface UseLarkResult {
    sendMessage: (content: string) => Promise<boolean>;
    loading: boolean;
    success: boolean;
    error: string | null;
}

/**
 * A React hook to simplify sending messages to Lark.
 * Handles decoding/decrypting secrets and managing loading states.
 *
 * @param {UseLarkOptions} options - Configuration options (env vars).
 * @returns {UseLarkResult} Functions and state variables.
 */
export function useLark({ webhookUrlEnv, messagePrefixEnv, xorKey = "aacexports" }: UseLarkOptions): UseLarkResult {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (content: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const webhookUrl = decodeSecret(webhookUrlEnv || '');
            if (!webhookUrl) {
                throw new Error("Webhook URL is missing or invalid.");
            }

            const prefix = messagePrefixEnv ? decryptXor(messagePrefixEnv, xorKey) : '';
            const envTag = typeof window !== 'undefined' ? `[${process.env.NODE_ENV || 'development'}]` : '';
            
            const finalMessage = `${prefix} ${envTag}\n\n${content}`;

            const result = await sendLarkMessage(finalMessage, webhookUrl);
            
            if (result) {
                setSuccess(true);
            } else {
                throw new Error("Failed to send message to Lark.");
            }
            return result;
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error occurred");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading, success, error };
}
