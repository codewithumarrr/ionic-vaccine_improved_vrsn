import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonCheckbox,
} from "@ionic/react";
import HeaderButtons from "../../components/HeaderButtons";
interface IParam {
  match: {
    params: {
      id: number;
      name: string;
      isspecial: string;
      infinite: string;
    };
  };
}
const EditVaccine: React.FC<IParam> = ({
  match: {
    params: { id },
  },
}) => {
  const [name, setName] = useState("");
  const [isSpeical, setisSpeical] = useState("");
  const [infinite, setinfinite] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", name, isSpeical, infinite);
  };

  return (
    <IonPage>
      <HeaderButtons pageName="Update Vaccine"></HeaderButtons>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel color="primary" position="floating">
              Name
            </IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel color="primary">Is-Special</IonLabel>
            <IonCheckbox
              value={isSpeical}
              placeholder="Select One"
              onIonChange={(e) => setisSpeical(e.detail.value)}
              slot="end"
            ></IonCheckbox>
          </IonItem>

          <IonItem>
            <IonLabel color="primary">Infinite</IonLabel>
            <IonCheckbox
              value={infinite}
              placeholder="Select One"
              onIonChange={(e) => setinfinite(e.detail.value)}
              slot="end"
            ></IonCheckbox>
          </IonItem>

          <IonButton
            type="submit"
            fill="solid"
            color="primary"
            slot="start"
            expand="full"
            strong
          >
            Update
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditVaccine;
function useIonRouter() {
  throw new Error("Function not implemented.");
}
