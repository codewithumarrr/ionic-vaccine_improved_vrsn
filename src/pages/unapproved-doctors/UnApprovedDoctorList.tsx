import {
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import HeaderButtons from "../../components/HeaderButtons";
import UnApprovedDoctorsCard from "../../components/doctor-card/UnApprovedDoctorsCard";

const UnApprovedDoctorList: React.FC = () => {
  const array: number[] = [1, 2, 3];
  return (
    <IonPage>
      <HeaderButtons pageName='Doctors' Showbutton={false} url='' />
      <IonContent className='ion-padding'>
        {array.map((item, index) => (
          <React.Fragment key={index}>
            <UnApprovedDoctorsCard mt={index === 0} />
          </React.Fragment>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default UnApprovedDoctorList;
