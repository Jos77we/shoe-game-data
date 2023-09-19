import React, {useState, useEffect} from 'react'
import axios from 'axios'

const GetTotalProducts = () => {
const [total, setTotal] = useState([]);

const fetchAllTotal = async () => {
    try {
        const res = await axios.get("http://localhost:5000/product/total")
        setTotal(res.data)
        console.log(total)
     } catch (error) {
        console.log(error)
     }
}

useEffect(() => {
fetchAllTotal()
})

const sortedData = total.sort((a, b) => a.count - b.count);
const formattedData = sortedData.map((item) => item.count).join(', ');


  return (
    <div>
        <p>Here is the total</p>
       <div>
       <p>{`${formattedData}`}</p>

        </div>
      </div>
  )
}

export default GetTotalProducts