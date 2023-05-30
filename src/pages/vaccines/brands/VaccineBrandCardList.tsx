import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import HeaderButtons from "../../../components/HeaderButtons";
import VaccineBrandCard from "../../../components/vaccine-card/brand-card/VaccineBrandCard";

export interface IBrandData {
  Id: number;
  Name: string;
  VaccineId: number;
}

const VaccineBrandCardList: React.FC = (props: any) => {
  const [data, setData] = useState<IBrandData[]>([]);
  const [renderList, setRenderList] = useState<boolean>(false);
  useEffect(() => {
    fetchVaccineData();
  }, []);

  const fetchVaccineData = async () => {
    fetch("https://myapi.fernflowers.com/api/Brand/brand_name/1")
      .then((response) => response.json())
      .then((data: IBrandData[]) => setData(data));
  };
  // console.log(data[0]);
  return (
    <IonPage>
      <HeaderButtons
        pageName='Vaccine Brands'
        Showbutton={true}
        url='/members/vaccine/1/brands/add'
      />
      <IonContent className='ion-padding'>
        {data &&
          data.map((item, index) => (
            <React.Fragment key={index * item.Id + 1}>
              <VaccineBrandCard
                Id={item.Id}
                Name={item.Name}
                VaccineId={item.VaccineId}
                mt={index === 0}
              />
            </React.Fragment>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default VaccineBrandCardList;
