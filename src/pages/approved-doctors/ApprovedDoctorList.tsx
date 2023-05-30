import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import HeaderButtons from "../../components/HeaderButtons";
import ApprovedDoctorsCard from "../../components/doctor-card/ApprovedDoctorsCard";

const ApprovedDoctorList: React.FC = () => {
  const array: number[] = [1, 2, 3, 4, 5];
  return (
    <IonPage>
      <HeaderButtons pageName='Doctors' Showbutton={false} url='' />
      <IonContent className='ion-padding'>
        {array.map((item, index) => (
          <React.Fragment key={index}>
            <ApprovedDoctorsCard mt={index === 0} />
          </React.Fragment>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ApprovedDoctorList;
