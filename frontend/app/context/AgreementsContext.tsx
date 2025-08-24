import React, { createContext, useContext, useState, ReactNode } from "react";

export type AgreementStatus = "active" | "pending" | "completed" | "rejected";

export interface Collaborator {
  email: string;
  percentage: number;
  status: "accepted" | "pending" | "rejected";
  reason?: string;
}

export interface Agreement {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: AgreementStatus;
  clientEmail: string;
  collaborators: Collaborator[];
  date: string;
}

type AgreementsContextType = {
  agreements: Agreement[];
  addAgreement: (agreement: Omit<Agreement, "id" | "date">) => void;
};

const AgreementsContext = createContext<AgreementsContextType | undefined>(undefined);

export const AgreementsProvider = ({ children }: { children: ReactNode }) => {
  const [agreements, setAgreements] = useState<Agreement[]>([
    {
      id: "1",
      title: "Proyecto NFT",
      description: "Desarrollo y lanzamiento de NFT",
      status: "active",
      amount: 1500,
      clientEmail: "cliente1@ejemplo.com",
      collaborators: [
        { email: "colab1@ejemplo.com", percentage: 60, status: "accepted" },
        { email: "colab2@ejemplo.com", percentage: 40, status: "pending" },
      ],
      date: "2025-08-23",
    },
    {
      id: "2",
      title: "Diseño DAPP",
      description: "Interfaz para aplicación descentralizada",
      status: "pending",
      amount: 1000,
      clientEmail: "cliente2@ejemplo.com",
      collaborators: [
        { email: "colab3@ejemplo.com", percentage: 100, status: "pending" },
      ],
      date: "2025-08-22",
    },
    {
      id: "3",
      title: "Marketing",
      description: "Campaña de marketing digital",
      status: "completed",
      amount: 500,
      clientEmail: "cliente3@ejemplo.com",
      collaborators: [
        { email: "colab4@ejemplo.com", percentage: 50, status: "accepted" },
        { email: "colab5@ejemplo.com", percentage: 50, status: "accepted" },
      ],
      date: "2025-08-20",
    },
  ]);

  const addAgreement = (agreement: Omit<Agreement, "id" | "date">) => {
    const newAgreement: Agreement = {
      ...agreement,
      id: (agreements.length + 1).toString(),
      date: new Date().toISOString().split("T")[0],
    };
    setAgreements([...agreements, newAgreement]);
  };

  return (
    <AgreementsContext.Provider value={{ agreements, addAgreement }}>
      {children}
    </AgreementsContext.Provider>
  );
};

export const useAgreements = () => {
  const context = useContext(AgreementsContext);
  if (!context) throw new Error("useAgreements debe usarse dentro de AgreementsProvider");
  return context;
};
