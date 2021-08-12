import './ProgramContainer.css';
import { IonListHeader,IonToolbar,IonTitle,IonPage,IonHeader,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import React from 'react';
interface ContainerProps { }

const ProgramContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
    <IonList>

      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

  </IonContent>
);
  };

export default ProgramContainer;
