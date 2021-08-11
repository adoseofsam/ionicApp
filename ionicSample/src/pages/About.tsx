import { IonIcon,IonButton,IonLabel,IonItem,IonList,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { star } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sample Ionic Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href='/home'>Go Back</IonButton>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
