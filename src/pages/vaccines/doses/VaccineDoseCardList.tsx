import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import HeaderButtons from "../../../components/HeaderButtons";
import VaccineDoseCard from "../../../components/vaccine-card/dose-card/VaccineDoseCard";

const VaccineDoseCardList: React.FC = () => {
  const array: number[] = Array(5).fill(1);
  return (
    <IonPage>
      <HeaderButtons
        pageName='Doses'
        Showbutton={true}
        url='/members/vaccine/1/doses/add'
      />
      <IonContent className='ion-padding'>
        {array.map((item, index) => (
          <React.Fragment key={index}>
            <VaccineDoseCard mt={index === 0} />
          </React.Fragment>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default VaccineDoseCardList;
