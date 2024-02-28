import Card from "./Card";


const FeaturedServices = async() => {
    const res = await fetch("http://localhost:5000/api/v1/donation/all-donation");
    const data = await res.json()
    console.log(data)


    return <Card  donationItem = {data}></Card>
        
    
 
}

export default FeaturedServices;