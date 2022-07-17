
import React, { useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonButton, IonDatetime, IonItem, IonLabel} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tab2.css';


const Tab2: React.FC = () => {

  const history = useHistory();

  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
   const reset = () => {
     datetime.current?.reset();
   }
   const cancel = () => {
     datetime.current?.cancel();
   }
   const confirm = () => {
     datetime.current?.confirm();
     history.push('/Suggestion')
     window.location.reload();
   }
   
   
  return (
  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='Titulo'>Feed Your Baby</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
        <IonDatetime className='Calendario' ref={datetime}>
          <IonButtons slot="buttons">
            <IonButton color="danger" onClick={reset}>Reiniciar</IonButton>
            <IonButton color="primary" onClick={cancel}>Cancelar</IonButton>
            <IonButton className='color' onClick={confirm} >Confirmar</IonButton>
          </IonButtons>
        </IonDatetime>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
