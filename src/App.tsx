import { Redirect, Route } from 'react-router-dom';
import { IonApp,IonIcon,IonLabel,IonRouterOutlet,IonTabBar,IonTabButton,IonTabs,      setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, construct, home, menu } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Suggestion from './pages/Suggestion';
import ConfiguracionMenu from './pages/ConfiguracionMenu';





/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();


const App: React.FC = () => (
  
 
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

       

          <Route exact path="/tab1">
            <Tab1 />
          </Route>

          <Route exact path="/tab2">
            <Tab2 />
          </Route>
      
          <Route path="/ConfiguracionMenu">
            <ConfiguracionMenu />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>

          <Route exact path="/Suggestion"> 
            <Suggestion />
            </Route>

         </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={calendar} />
            <IonLabel>Calendario</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ConfiguracionMenu" href="/ConfiguracionMenu">
            <IonIcon icon={menu} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default App;
