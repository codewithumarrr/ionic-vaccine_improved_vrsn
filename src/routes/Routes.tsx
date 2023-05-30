import { IonPage, IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import VaccineCardList from "../pages/vaccines/VaccineCardList";
import Dashboard from "../pages/dashboard/Dashboard";
import EditVaccine from "../pages/vaccines/EditVaccine";
import VaccineDoseCardList from "../pages/vaccines/doses/VaccineDoseCardList";
import AddVaccine from "../pages/vaccines/AddVaccine";
import VaccineBrandCardList from "../pages/vaccines/brands/VaccineBrandCardList";
import { RenderDoctor } from "../pages/render-doctors/RenderDoctors";

const Routes: React.FC = () => {
  return (
    <>
      <IonRouterOutlet id='main-content'>
        <Route exact path='/members/dashboard' component={Dashboard} />
        <Route exact path='/members/vaccine' component={VaccineCardList} />
        <Route exact path='/members/vaccine/add' component={AddVaccine} />
        <Route exact path='/members/vaccine/edit/:id' component={EditVaccine} />
        <Route
          exact
          path='/members/vaccine/:id/doses'
          component={VaccineDoseCardList}
        />
        <Route
          exact
          path='/members/vaccine/:id/doses/add'
          component={AddBrand}
        />
        <Route
          exact
          path='/members/vaccine/:id/brands'
          component={VaccineBrandCardList}
        />
        <Route
          exact
          path='/members/vaccine/:id/brands/add'
          component={AddBrand}
        />
        <Route exact path='/members/doctor/approved' component={RenderDoctor} />
        <Route
          exact
          path='/members/doctor/unapproved'
          component={RenderDoctor}
        />
        <Route exact path='/members'>
          <Redirect to='/members/dashboard' />
        </Route>
      </IonRouterOutlet>
    </>
  );
};

const AddBrand = () => (
  <IonPage>
    <h1>adding brand</h1>
  </IonPage>
);
export default Routes;
