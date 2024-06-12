import mainStyle from "./Main.module.css";
import Card from "../Cards/Card";

const Main = () => {
  return (
    <main className={mainStyle.main}>
       <Card />
    </main>
  );
}

export default Main;