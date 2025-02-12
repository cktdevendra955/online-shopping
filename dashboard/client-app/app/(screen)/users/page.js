import { HeaderUi } from '@/app/__components/layout/HeaderUi'
import ListOfProductUi from '@/app/__components/product/ListOfProductUi'
import React from 'react'

const Users = () => {
  return (
    <>
    <HeaderUi title={"Users"}></HeaderUi>    
    <ListOfProductUi ></ListOfProductUi>
    </>
  )
}

export default Users