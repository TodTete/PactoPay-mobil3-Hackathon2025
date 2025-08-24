export const mockAgreements = [
  {
    id: "1",
    title: "Proyecto NFT",
    description: "Desarrollo y lanzamiento de NFT",
    status: "active",
    amount: 1500,
    clientEmail: "cliente1@ejemplo.com",
    collaborators: [
      { email: "colab1@ejemplo.com", percentage: 60, status: "accepted" },
      { email: "colab2@ejemplo.com", percentage: 40, status: "pending" }
    ]
  },
  {
    id: "2",
    title: "Diseño DAPP",
    description: "Interfaz para aplicación descentralizada",
    status: "pending",
    amount: 1000,
    clientEmail: "cliente2@ejemplo.com",
    collaborators: [
      { email: "colab3@ejemplo.com", percentage: 100, status: "pending" }
    ]
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
      { email: "colab5@ejemplo.com", percentage: 50, status: "accepted" }
    ]
  },
];
