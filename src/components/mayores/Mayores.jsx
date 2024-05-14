import React from 'react'
import MayorItem from './MayorItem'

function Mayores({arrayCuentas}) {
  return (
    <>
        <h4 className="text-blue-600 font-bold text-3xl mx-3 mb-4">Mayores:</h4>
    <div className="flex flex-wrap">
      
      {arrayCuentas.map((cuenta,index) => {
        return (

        <MayorItem key={index} cuentaContable={cuenta}/>
        )
      })}
      
    </div>
    </>
  )
}

export default Mayores
