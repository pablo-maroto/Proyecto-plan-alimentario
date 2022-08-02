import { IonContent, IonHeader,IonImg, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './Tab1.css';


const Tab1: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='Titulo'>Welcome to Feed Your Baby</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
      <a href="https://freeimage.host/es"><img src="https://iili.io/S4FtIe.png" alt="S4FtIe.png"  /></a> 
      
          <IonCardHeader>
          <IonCardTitle className='CardTitle'>Alimenta a tu bebé</IonCardTitle>
          <IonCardSubtitle>Feed Your Baby</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          Esta app está dedicada a tod@s aquellos padres, madres o tutores con poco tiempo para pensar que cocinar para nuestros hijos. Solo son sugerencias de ayuda. Esperamos les sea util.<br /><br />This app is dedicated to all those fathers, mothers or guardians with little time to think about what to cook for our children. They are just suggestions for help. We hope it will be useful to you.
      </IonCardContent>
        </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;


