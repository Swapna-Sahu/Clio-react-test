import bookmark from "../../src/assets/bookmark-white.png";

const Card = ({ data,id,addItem,deleteItem }) => {
  return (
    <div className="card">
        <div style={{paddingLeft:"30px"}}>
            <img src={data.imageUrl} width="180px" height="180px"/>
        </div>
        <div style={{paddingLeft:"30px"}}>
            <h1>{data.title}</h1>
            <p>{data.year}</p>
            <p>{data.description}</p>
            {data.topics.map((item,index) => {
               return <span key={index}>{item.name}&nbsp;&nbsp;&nbsp;</span>
            })}
        </div>
        <div className="menu"  onClick={() =>{!data.bookmark ? addItem(id):deleteItem(id)} }>
            <img src={bookmark} style={data.bookmark ? {backgroundColor:"pink"}: null} className="bookmark" width="20px" height="20px" />
        </div>
    </div>
  );
}
 
export default Card;