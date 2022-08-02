import React from 'react';
import { IonMenu, IonApp, IonButtons, IonLabel, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton,IonList, IonItem } from '@ionic/react';
import './ConfiguracionMenu.css';



const ConfiguracionMenu: React.FC = () => {
  return(
    <>
     <IonApp>
      <IonMenu side="start" content-id="main-content">
        <IonHeader>
          <IonToolbar className='translucent'>
            <IonTitle>Configuración</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon name="settings" slot="start"></IonIcon>
              <IonLabel>
                <IonButtons slot='start' >Configuración de Horarios</IonButtons>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon name="notifications" slot="start"></IonIcon>
              <IonLabel>Notificación</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon name="heart" slot="start"></IonIcon>
              <IonLabel>Comidas Favoritas</IonLabel>
            </IonItem>
           
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton className='BotonMenu'>Menu</IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
     
      </div>
      
      <IonTitle className='MensajeMenu'>Configura los horarios y verás aquí el detalle</IonTitle>
    </IonApp>

    </>

    );
};
export default ConfiguracionMenu ;