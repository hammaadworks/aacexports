import React from 'react';
import { termsOfServiceContent } from '@/lib/termsOfServiceContent';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // To support GitHub Flavored Markdown

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-6 py-12 lg:py-16">
      <article className="prose lg:prose-xl max-w-none text-foreground">
        <Markdown remarkPlugins={[remarkGfm]}>
          {termsOfServiceContent}
        </Markdown>
      </article>
    </main>
  );
}
