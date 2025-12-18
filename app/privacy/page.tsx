"use client";

import React from 'react';
import { privacyPolicyContent } from '@/lib/privacyPolicyContent';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageHeaderBadge } from '@/components/ui/PageHeaderBadge';
import { ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-24">
       {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <main className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <PageHeaderBadge icon={ShieldCheck} className="mb-6">
              Data Protection
            </PageHeaderBadge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We value your trust. This policy outlines how we collect, use, and protect your personal information in compliance with global standards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <article className="prose prose-stone dark:prose-invert max-w-none 
              prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:bg-secondary/10 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            >
              <Markdown remarkPlugins={[remarkGfm]}>
                {privacyPolicyContent}
              </Markdown>
            </article>
            
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground gap-2">
                <Lock className="h-4 w-4" />
                <span>Securely processed and stored.</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}