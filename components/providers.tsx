"use client";

import React from "react";
import { ModalProvider, useModal } from "@/lib/modal-context";
import { EnquiryModal } from "@/components/enquiry-modal";

const ModalWrapper = () => {
  const { isOpen, closeModal } = useModal();
  return <EnquiryModal isOpen={isOpen} onClose={closeModal} />;
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ModalWrapper />
    </ModalProvider>
  );
}
