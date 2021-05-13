
import { useEffect, useState } from "react";

import axios from "axios"

const GetCategoryData = (url) => {
     const [ data, setData ] = useState(null)
     useEffect(() => {
          axios.get(url)
          .then( res => {
               setData(res.data.category.data)
               res.data.category.data.map( cat => {
                    
                    
               })
          })
          .catch( err => {
               console.log(err)
          })
     },[url])

     return {
          data
     }
}

export default GetCategoryData;