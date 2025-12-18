import React from 'react';
import { privacyPolicyContent } from '@/lib/privacyPolicyContent';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // To support GitHub Flavored Markdown

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-6 py-12 lg:py-16">
      <article className="prose lg:prose-xl max-w-none text-foreground">
        <Markdown remarkPlugins={[remarkGfm]}>
          {privacyPolicyContent}
        </Markdown>
      </article>
    </main>
  );
}
