import {  IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';

import './Suggestion.css';
import './FunctionDate.js';

// Agregar fecha al inicio en esta pantalla.


function Sugerencias() {
    const DesayunoOptions = {
        header: 'Desayuno',
        subHeader: 'Seleccione el alimento indicado segun sus preferencias',
        message: 'Elija solo uno',
        translucent: true
    };
  
    const AlmuerzoOptions = {
      header: 'Desayuno',
      subHeader: 'Seleccione el alimento indicado segun sus preferencias',
      message: 'Elija solo uno',
      translucent: true
    };

    const MeriendaOptions = {
      header: 'Desayuno',
      subHeader: 'Seleccione el alimento indicado segun sus preferencias',
      message: 'Elija solo uno',
      translucent: true
    };

    const CenaOptions = {
      header: 'Desayuno',
      subHeader: 'Seleccione el alimento indicado segun sus preferencias',
      message: 'Elija solo uno',
      translucent: true
    };
  return (
    <IonList className='boton'>        
      <IonItem className='ListFoods'>
        <IonLabel className='text'>Desayuno</IonLabel>
        <IonSelect className='select' interfaceOptions={DesayunoOptions} interface="alert" placeholder="Seleccione un alimento">
          <IonSelectOption value="bacon">Galletas de agua</IonSelectOption>
          <IonSelectOption value="onions">Quiwi y frutilla</IonSelectOption>
          <IonSelectOption value="pepperoni">Bizcochuelo de limón</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem className='ListFoods'>
        <IonLabel className='text'>Almuerzo</IonLabel>
        <IonSelect className='select' interfaceOptions={AlmuerzoOptions} interface="alert" placeholder="Seleccione un alimento">
          <IonSelectOption value="bacon">Albondiga de pollo c/zanahoria y lechuga</IonSelectOption>
          <IonSelectOption value="onions">Bastones de merluza c/batata</IonSelectOption>
          <IonSelectOption value="pepperoni">Guizo de lentejas</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem className='ListFoods'>
        <IonLabel className='text'>Merienda</IonLabel>
        <IonSelect className='select' interfaceOptions={MeriendaOptions} interface="alert" placeholder="Seleccione un alimento">
          <IonSelectOption value="bacon">Panqueque de banana</IonSelectOption>
          <IonSelectOption value="onions">Compota de pera</IonSelectOption>
          <IonSelectOption value="pepperoni">Budin de manzana</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem className='ListFoods'>
        <IonLabel className='text'>Cena</IonLabel>
        <IonSelect className='select' interfaceOptions={CenaOptions} interface="alert" placeholder="Seleccione un alimento">
          <IonSelectOption value="bacon">Higado c/zapallito</IonSelectOption>
          <IonSelectOption value="onions">Arroz primavera</IonSelectOption>
          <IonSelectOption value="pepperoni">Milanesa al horno c/batata</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>         
    
    
  );
};
export default Sugerencias ;
