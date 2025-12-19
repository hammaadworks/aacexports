# Lark Client Module

A plug-and-play module for sending messages to Lark/Feishu webhooks from a client-side React/Next.js application.

## Features
- **Obfuscation:** Protects webhook URLs and prefixes using Base64 and XOR.
- **Retry Logic:** Automatically retries failed requests.
- **React Hook:** `useLark` for easy integration.

## Setup

1. Copy this entire `lark-client` folder to your project's `lib` directory.
2. Copy the contents of `env.example` to your `.env.local` file.
3. Follow the instructions in `env.example` to generate your obfuscated secrets.

## Usage

### Using the Hook (Recommended)

```tsx
import { useLark } from '@/lib/lark-client';

export function ContactForm() {
  const { sendMessage, loading, success } = useLark({
    webhookUrlEnv: process.env.NEXT_PUBLIC_LARK_WEBHOOK_URL,
    messagePrefixEnv: process.env.NEXT_PUBLIC_LARK_MESSAGE_PREFIX
  });

  const handleSubmit = async () => {
    await sendMessage("Hello from my app!");
  };
  
  // ...
}
```

### Direct Usage

```ts
import { sendLarkMessage, decodeSecret } from '@/lib/lark-client';

const url = decodeSecret(process.env.NEXT_PUBLIC_LARK_WEBHOOK_URL || '');
await sendLarkMessage("Hello!", url);
```
