import { useEffect, useState } from 'react'
import './App.css'

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
});

async function download() {
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
  }
}

function App() {
  const [nav, setNav] = useState(false)
  const [features, setFeatures] = useState([])



  useEffect(() => {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const isApple = /iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    const isPushSupported = 'PushManager' in window;

    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    const featuresList = [];

    if (isApple) {
      featuresList.push('Vous etes sur un produit apple donc utiliser Safari pour pouvoir installer l\'application');
    } else {
      featuresList.push('Vous etes sur un produit qui n\'est pas apple donc utiliser Chrome pour pouvoir installer l\'application');
    }

    if (isMobile) featuresList.push('Installation sur l\'écran d\'accueil à l\'aide du boutton en haut à droite');
    if (isStandalone) featuresList.push('Mode plein écran');
    if (isPushSupported) featuresList.push('Notifications push');
    if (isMobile && !isApple) {
      featuresList.push('Des vibration de votre appareil');
      featuresList.push('Acceder aux contact de l\'appareil');
    }
    setFeatures(featuresList);

  })

  return (
    <div className="App">
      <div className='flex justify-between'>
        <h3>Cette application est un PWA (une application web progessive) </h3>
        <button onClick={() => download()}>install PWA</button>
      </div>
      <div>
        <h3 className='mb-4'>Liste des fonctionnalités (pas axhaustive, manque de temps pour tout lister mais voilà un peu l'idée)</h3>
        <ul>
          {features.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App
