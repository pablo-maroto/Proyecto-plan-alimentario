
import React, { useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonButton, IonDatetime, IonItem, IonLabel} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import './Tab2.css';


const Tab2: React.FC = () => {

  const history = useHistory();

  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  

   const onIonChangeHandler = (selectedDate: string) => {
    // Change selected date format
    const formattedSelectedDate = format(parseISO(selectedDate), 'dd-MM-yyyy');

    // Go to next page Suggestion
    datetime.current?.confirm();
    history.push({ 
       pathname:'/Suggestion',
       state:{date:formattedSelectedDate}
    });
    window.location.reload();
  }

  return (
  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='Titulo'>Feed Your Baby</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  fullscreen> 
        <IonDatetime presentation='date' className='Calendario' ref={datetime} onIonChange={e => onIonChangeHandler(e.detail.value || '')}>
        </IonDatetime>
       
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
