import React from 'react'


// union


type DataFatchProps = {
    status: "Loading" | "error" | "success"
}

const DataFatch = ({status}: DataFatchProps) => {
    if(status === "Loading"){
        return <h2> Data Loading ....  </h2>
    } else if(status === "error"){
        return <h2> Data could not facthed</h2>
    }else {

    }

  return (
    <div>
       
        <h2> Data facthed successfull</h2>
    </div>
  )
}

export default DataFatch