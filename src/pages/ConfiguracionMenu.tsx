import React from 'react';
import { IonMenu, IonRouterOutlet,IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import './ConfiguracionMenu.css';



const ConfiguracionMenu: React.FC = () => {
  return(
    <><IonMenu side="end" type="push">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu><IonRouterOutlet></IonRouterOutlet></>

    );
};
export default ConfiguracionMenu ;