import { useEffect } from "react";
import ClientRoutes from "./components/ClientRoutes/ClientRoutes";
import store from "./globalState/state";
import { getAllItems } from "./services/API";


export const App = () => {

  const [items, setItems] = store.useGlobalState("items")

  useEffect(() => {
    if(!items){
      try{
        getAllItems().then(res => {setItems(res)})
      }catch(error){console.log(error.message)}
    }
  },[items, setItems])

  return (
    <> 
    {items && <ClientRoutes />}
    </>
  );
};
