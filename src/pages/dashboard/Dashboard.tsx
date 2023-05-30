import {
  IonCard,
  IonCardHeader,
  IonPage,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
} from "@ionic/react";
import React from "react";
import HeaderButtons from "../../components/HeaderButtons";
import "./dashboard.css";
import DashboardSlides from "../../components/slider/DashboardSlides";

const Dashboard: React.FC = () => {
  return (
    <IonPage style={{ justifyContent: "flex-start" }}>
      <HeaderButtons pageName='Dashboard' />
      <IonCard>
        <IonCardHeader>
          <DashboardSlides />
        </IonCardHeader>
        <IonGrid style={{ fontWeight: "bold" }}>
          <IonRow>
            <IonCol size='12' sizeMd='6'>
              <IonCard
                color='secondary'
                routerLink='/members/vaccine'
                routerDirection='forward'
              >
                <IonHeader className='custom-header-style'>
                  <IonCardTitle>12</IonCardTitle>
                  <IonCardTitle style={{ marginTop: "8px" }}>
                    Active Vaccine
                  </IonCardTitle>
                </IonHeader>
              </IonCard>
            </IonCol>
            <IonCol size='12' sizeMd='6'>
              <IonCard
                style={{ background: "#187da0" }}
                routerLink='/members/doctor/approved'
                routerDirection='forward'
              >
                <IonHeader className='custom-header-style'>
                  <IonCardTitle>22</IonCardTitle>
                  <IonCardTitle style={{ marginTop: "8px" }}>
                    Active Doctors
                  </IonCardTitle>
                </IonHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonPage>
  );
};

export default Dashboard;
