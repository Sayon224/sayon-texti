// ════════════════════════════════════════════════════════════
//   CONFIGURATION FIREBASE – SAYON MOTO TAXI EXPRESS
//
//   ÉTAPES POUR CONFIGURER :
//   1. Aller sur https://console.firebase.google.com
//   2. Cliquer "Ajouter un projet" → donner un nom → Créer
//   3. Cliquer l'icône Web  </> → Enregistrer l'application
//   4. Copier les valeurs du firebaseConfig dans ce fichier
//   5. Dans Firebase : Realtime Database → Créer une base
//      → choisir "Mode test" → Activer
//   6. Copier l'URL de la base (ressemble à :
//      https://VOTRE_PROJET-default-rtdb.firebaseio.com )
//
//   REMPLACEZ chaque "VOTRE_..." par votre vraie valeur
// ════════════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDCaicdObAmJd0mnijo2fDLvnFDBTbNVig",
  authDomain: "sayontaxi-express.firebaseapp.com",
  databaseURL: "https://sayontaxi-express-default-rtdb.firebaseio.com/",
  projectId: "sayontaxi-express",
  storageBucket: "sayontaxi-express.firebasestorage.app",
  messagingSenderId: "464683166556",
  appId: "1:464683166556:web:31ea21d4186d747029af99"
};