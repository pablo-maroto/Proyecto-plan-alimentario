import {  IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import { useLocation } from "react-router-dom";
import './Suggestion.css';

function Sugerencias() {
    const DesayunoOptions = {
        //opcion(lista) cargar 10 o 5 hasta  q funcione. ver mas adelante elegir de "50 opciones 3 por ejemplo"
        header: 'Desayuno',
        subHeader: 'Seleccione el alimento indicado segun sus preferencias',
        message: 'Elija solo uno',
        translucent: true,
        options: [
            {id: 'bacon', name: 'Galletas de agua'},
            {id: 'onions', name: 'Quiwi y frutilla'},
            {id: 'pepperoni', name: 'Bizcochuelo de limón'},
            {id: 'pablo', name: 'Pablo picasso'},
            {id: 'nano', name: 'Neino'},
        ]
    };
    function shuffleDesayunoOptions() {
      // Shuffle array
      const shuffled = DesayunoOptions.options.sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled
      let selectedElement = 3;
      let selected = shuffled.slice(0, selectedElement);
      return selected
    }
    
    
  
    const AlmuerzoOptions = {
      //opcion(lista) cargar 10 o 5 hasta  q funcione
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

  // Get date
  let location = useLocation<{ date: 'default' }>();
  
  //  useEffect(() => {
  //    console.log(location.state.date);
  // }, [location]);

  return (
  <IonPage>
    <div className='DateBox'>
    <IonTitle className='TituloFecha'>Fecha: {location.state?.date}</IonTitle>
    </div>
    <IonList className='boton'>        
      <IonItem className='ListFoods'>
        <IonLabel className='text'>Desayuno</IonLabel>
        <IonSelect className='select' interfaceOptions={DesayunoOptions} interface="alert" placeholder="Seleccione un alimento">
          {shuffleDesayunoOptions().map(item => (
            <IonSelectOption value={item.id}>{item.name}</IonSelectOption>
          ))}
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
  </IonPage>
    
  );
};
export default Sugerencias ;
