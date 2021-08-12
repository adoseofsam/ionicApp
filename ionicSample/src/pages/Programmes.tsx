import { IonToolbar,IonTitle,IonPage,IonHeader,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import ProgramContainer from '../components/ProgramContainer';

import React from 'react';

const Programmes: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Undergraduate Programmes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Programmes</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ProgramContainer />
        </IonContent>
      </IonPage>
    );
  };
 export default Programmes;