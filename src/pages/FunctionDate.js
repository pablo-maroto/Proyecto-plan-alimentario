import { DatePicker } from '@material-ui/pickers';
import { useState } from 'react';
import './Suggestion.css';


// Agregar fecha al inicio en esta pantalla.
const Apps = () => {
  const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());

return (
  <div className='contenedor'>
    <div className='grupo'>
      <label className='color'>Fecha</label>
      <DatePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} />
    </div>
  </div>
);
}

export default Apps;