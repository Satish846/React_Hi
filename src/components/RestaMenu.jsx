import { useEffect, useState } from "react"
// import "./Menu.css"
import { useParams } from "react-router-dom"
const RestaMenu = () =>{

  const [menu,setMenu] = useState(null)

  const id = useParams()
  console.log(id)

  useEffect(()=>{
    fetchMenu()
  },[])

  const fetchMenu = async()=>{
    const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.52843&lng=78.262702&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"+id)
    const json = await data.json()
    // console.log(json)
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    let dat = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setMenu(dat[0])
  }

  return(
    <div className="menu-card">
      <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menu?.info?.cloudinaryImageId}/>
          
      <h1>{menu?.info?.name}</h1>
      
      <h3>{menu?.info?.cuisines?.join(", ")}</h3>
      <h3>Cost for two: {menu?.info?.costForTwo}</h3>
       <h4>{menu?.info?.avgRating}</h4>
       <h3>Total Rating :{menu?.info?.totalRatingsString}</h3>
       <h5>{menu?.info?.sla?.deliveryTime} min</h5>
       <h3>{menu?.info?.locality} </h3>
     
    </div>
  )
}

export default RestaMenu