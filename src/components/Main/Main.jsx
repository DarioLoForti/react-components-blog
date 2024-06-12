import mainStyle from "./Main.module.css";
import Card from "../Cards/Card";
import posts from "../../data/posts.json";

const Main = () => {
  return (
    <main className={mainStyle.main}>
       {
        posts.map((p, i) => {
          return <Card title={p.title} content={p.content} key={i} image="https://static.vecteezy.com/system/resources/previews/002/367/440/non_2x/new-post-neon-signs-style-text-free-vector.jpg"></Card>
        })
       }
        
    </main>
  );
}

export default Main;