"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import confetti from "canvas-confetti";

interface ModalContextType {
  isOpen: boolean
  openModal: (event?: React.MouseEvent<HTMLElement> | React.UIEvent) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (event?: React.MouseEvent<HTMLElement> | React.UIEvent) => {
    if (event && 'currentTarget' in event) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        colors: ["#EAB308", "#303F2D", "#FFFFFF"],
      });
    }
    setIsOpen(true);
  }
  const closeModal = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
