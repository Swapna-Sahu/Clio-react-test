import Card from "./components/card";

const Home = ({data, addItem,deleteItem}) => {
  return (
    <div style={{padding:"100px 50px"}}>
       {data.map((item,index) => {
         return <Card data={item}  key={index} id={index} addItem={addItem} deleteItem={deleteItem}/>;
        })}
    </div>
  );
}
 
export default Home;