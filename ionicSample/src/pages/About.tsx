import { IonToolbar,IonTitle,IonPage,IonHeader,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import AboutContainer from '../components/AboutContainer';

import React from 'react';

const About: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>About Me</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">About Me</IonTitle>
            </IonToolbar>
          </IonHeader>
          <AboutContainer />
        </IonContent>
      </IonPage>
    );
  };
 export default About;