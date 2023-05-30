import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";
import useWindowSize from "../hooks/useWindowSize";
import { Size } from "../hooks/useWindowSize";
type Props = {
  pageName: string;
  Showbutton?: boolean;
  url?: string;
};
const HeaderButtons: React.FC<Props> = ({
  pageName,
  Showbutton = false,
  url,
}) => {
  const windowSize: any = useWindowSize();
  const router = useIonRouter();
  return (
    <IonHeader>
      <IonToolbar color='primary' style={{ padding: "0px 5px" }}>
        <IonMenuToggle slot='start'>
          <IonMenuButton></IonMenuButton>
        </IonMenuToggle>
        {windowSize.width > 992 ? (
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
        ) : (
          ""
        )}
        <IonTitle>{pageName}</IonTitle>
        {Showbutton && (
          <IonButton
            fill='clear'
            slot='end'
            style={{ color: "#fff" }}
            onClick={() => router.push(url, "root")}
          >
            <IonIcon icon={add} slot='start' />
          </IonButton>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderButtons;
