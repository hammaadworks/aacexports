'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footerContent?: React.ReactNode; 
  className?: string; 
}

/**
 * A reusable modal component built on top of the Shadcn Dialog primitive.
 * 
 * Provides consistent styling for headers, content, and footers.
 * Supports custom footer content or defaults to a "Close" button.
 * 
 * @param isOpen - Controls the visibility of the modal.
 * @param onClose - Handler called when the modal is closed.
 * @param title - The title displayed in the header.
 * @param description - Optional description text below the title.
 * @param children - The main content of the modal.
 * @param footerContent - Optional custom elements for the footer (e.g., action buttons).
 * @param className - Optional additional classes for the DialogContent wrapper.
 */
const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footerContent,
  className,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          "w-full max-w-full sm:max-w-lg max-h-[80vh] overflow-y-auto p-6", 
          // Responsive width override for mobile-first feel:
          "!w-[calc(100vw-2rem)] sm:!w-full", 
          className
        )}
      >
        <DialogHeader className="px-4 pt-10">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription className="mt-1">{description}</DialogDescription>}
        </DialogHeader>
        <div className="px-4">
          {children}
        </div>
        {footerContent && (
          <DialogFooter className="px-4 pb-4">
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
