"use client";

import React from 'react';
import { termsOfServiceContent } from '@/lib/termsOfServiceContent';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageHeaderBadge } from '@/components/ui/PageHeaderBadge';
import { Scale, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { BlurFade } from '@/components/ui/blur-fade';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background relative pt-32 pb-24">
       {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <main className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                    <PageHeaderBadge icon={Scale}>
                    Legal Agreement
                    </PageHeaderBadge>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-foreground">
                Terms of Service
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Please review the terms and conditions that govern your use of our website and services.
                </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm">
                <article className="prose prose-stone dark:prose-invert max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary prose-blockquote:bg-secondary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                >
                <Markdown remarkPlugins={[remarkGfm]}>
                    {termsOfServiceContent}
                </Markdown>
                </article>

                <div className="mt-12 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Last reviewed: December 2025</span>
                </div>
            </div>
          </BlurFade>
        </div>
      </main>
    </div>
  );
}
