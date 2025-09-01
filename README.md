# 💸 PactoPay

**Pagos transparentes y automatizados para freelancers en Latinoamérica**  
Repositorio oficial del proyecto para el **Hackathon Mobil3 2025**.

[![Repo](https://img.shields.io/badge/GitHub-TodTete-blue?logo=github)](https://github.com/TodTete/PactoPay-mobil3-Hackathon2025)
[![Status](https://img.shields.io/badge/status-en%20desarrollo-orange)](#estado)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 🚀 Descripción

PactoPay es una **plataforma Web3** que convierte acuerdos de trabajo en **contratos inteligentes**.  
Los pagos se liberan automáticamente cuando se cumplen los entregables, garantizando que:

- 🧑‍💻 **Freelancers** reciban su dinero de forma segura, rápida y sin fraudes.  
- 💼 **Clientes** solo paguen cuando el trabajo ha sido aprobado.  

Cada transacción queda registrada en **blockchain**, asegurando transparencia total y confianza en cada proyecto.

---

## 📌 Problema

Según el *Global Freelancer Report 2024*:  

- El **48% de los freelancers experimenta retrasos o pérdidas en sus pagos**.  
- En América Latina, los sistemas tradicionales son lentos, costosos y poco transparentes.  

---

## 💡 Nuestra Solución

- 🔒 **Contratos inteligentes** que aseguran pagos justos.  
- ⚡ **Pagos sin gas** gracias a la **0x Gasless API**.  
- 👤 **Onboarding simple** con **Reown AppKit** (registro con email o redes sociales).  
- 🤝 **Distribución automática de pagos** entre todos los colaboradores según porcentajes definidos.  

---

## ⚙️ Cómo Funciona

1. El **cliente** crea un acuerdo con monto y porcentajes.  
2. Los **freelancers** reciben invitación para aceptar o rechazar.  
3. Una vez aceptado, el **cliente paga** con un solo clic.  
4. El contrato inteligente reparte automáticamente los fondos.  

✅ Transparente, rápido y sin riesgos.

---

## 🌍 Impacto

- **Freelancers:** pagos garantizados, sin riesgo de fraude.  
- **Clientes:** eliminan retrasos y conflictos, pagan solo al aprobar.  
- **Sociedad:** fomenta transparencia, igualdad y combate la corrupción.  

📌 Alineado con los **ODS 8, 10 y 16 de la ONU**.

---

## 🎯 Mercado Objetivo

- Freelancers y equipos en **Latinoamérica**.  
- Profesionales en **tecnología, diseño, marketing, redacción, consultoría**.  
- Agencias pequeñas que colaboran por proyectos.  

📊 **Datos clave:**  
- 1.5B freelancers en el mundo.  
- 25M en LatAm.  
- Mercado de **50B USD** con 15% de crecimiento anual.  

---

## 👥 Equipo

- Ricardo Vallejo Sánchez  

---

## 🏆 Tracks & Bounties (Hackathon)

- **Track Principal:** Pagos  
- **Bounty Reown:** Mejor onboarding y UX  
- **Bounty 0x:** Gasless API  
- **Bounty BGA (ODS ONU):** Impacto social y transparencia laboral  

---

## 📂 Estructura del Proyecto

```

PactoPay-mobil3-Hackathon2025/
├─ PactoPay/          # Despliegue principal
├─ backend/           # Lógica backend (API, servicios)
├─ contracts/         # Contratos inteligentes en Solidity
│  └─ GoalSaver.sol
├─ frontend/          # Interfaz web
├─ scripts/           # Scripts de automatización/deploy
├─ .gitignore
├─ README.md
└─ package.json

````

---

## 📜 Contratos Inteligentes

En la carpeta [`contracts/`](contracts/) encontrarás los **smart contracts** escritos en Solidity.  
Ejemplo:  
- `GoalSaver.sol` → contrato encargado de gestionar acuerdos y liberar pagos.  

---

## 🔮 Próximos pasos

- [ ] Desarrollar MVP funcional con contratos inteligentes en Solidity.  
- [ ] Integrar **Reown AppKit** y **0x Gasless API**.  
- [ ] Probar casos reales con freelancers y clientes.  
- [ ] Desplegar en red de pruebas y luego en mainnet.  

---

## 🛠️ Tecnologías utilizadas

- **Solidity** → contratos inteligentes.  
- **Next.js / React** → frontend.  
- **Node.js / Express** → backend.  
- **Reown AppKit** → onboarding sencillo.  
- **0x Gasless API** → transacciones sin gas.  
- **Hardhat** → compilación, pruebas y despliegue.  

---

## 👨‍💻 Contribución

¡Las contribuciones son bienvenidas! 🙌  

1. Haz un **fork** del repositorio.  
2. Crea tu rama de feature:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
````
````
3. Haz commit de tus cambios:

   ```bash
   git commit -m "feat: agregada nueva funcionalidad"
   ```
4. Haz push a la rama:

   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** 🚀

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.
Consulta el archivo [`LICENSE`](LICENSE) para más información.
