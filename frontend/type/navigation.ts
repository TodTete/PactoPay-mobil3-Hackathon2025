export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  Detail: { id: string }; // Para AgreementDetail

  // Pantallas principales
  Dashboard: undefined;
  Agreements: undefined;
  AgreementDetail: { id: string };
  CreateAgreement: undefined;
  Create: undefined;

  // Otros
  ReviewOffer: undefined;
  Payment: undefined;
  Support: undefined;
  Profile: undefined;
  Settings: undefined;
};
