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
  headerClassName?: string;
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
 * @param headerClassName - Optional additional classes for the DialogHeader.
 */
const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footerContent,
  className,
  headerClassName,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={cn(
          // Mobile: Full screen to avoid keyboard issues
          "!fixed !top-0 !left-0 !translate-x-0 !translate-y-0 !w-full !h-[100dvh] !max-w-none !max-h-none !rounded-none !border-0",
          // Tablet/Desktop: Restore centered modal
          "sm:!fixed sm:!top-[50%] sm:!left-[50%] sm:!translate-x-[-50%] sm:!translate-y-[-50%] sm:!w-full sm:!max-w-lg sm:!h-auto sm:!max-h-[80vh] sm:!rounded-lg sm:!border",
          "overflow-y-auto p-6", 
          className
        )}
      >
        <DialogHeader className={cn("pt-4", headerClassName)}>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription className="mt-1">{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {footerContent && (
          <DialogFooter className="pb-4">
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
