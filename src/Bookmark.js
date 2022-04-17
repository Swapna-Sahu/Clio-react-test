import Card from "./components/card";

const Bookmark = ({data}) => {

console.log("Bookmark data",data);
  return (
    <div style={{padding:"100px 50px"}}>
      {data.map((item,index) => {
         return <Card data={item} key={index} id={index} addItem={null} deleteItem={null}/>;
        })}
    </div>
  );
}
export default Bookmark;