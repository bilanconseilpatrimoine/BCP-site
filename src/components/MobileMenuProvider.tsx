"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { MobileMenu } from "./MobileMenu";

interface MobileMenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
};

interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
      {/* Le menu est rendu au niveau global pour couvrir tout le site */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </MobileMenuContext.Provider>
  );
};
