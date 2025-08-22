// import { useParams } from "react-router-dom";
// import LearnMorePlanets from "./LearnMorePlanets";
// import LearnMorePeople from "./LearnMorePeople";
// import LearnMoreVehicles from "./LearnMoreVehicles";

export function LearnMore() {
  const { tipo, id } = useParams();

  // if (tipo === "planets") {
  //   return <LearnMorePlanets id={id} />;
  // } else if (tipo === "people") {
  //   return <LearnMorePeople id={id} />;
  // } else if (tipo === "vehicles"){
  //   return <LearnMoreVehicles id={id}/>
  // }
  // else {
  //   return <div>No se reconoce el tipo: {tipo}</div>;
  // }

  return <></>
}