import { HeaderUi } from '@/app/__components/layout/HeaderUi'
import CreateNewProductUI from '@/app/__components/product/CreateNewProductUI'
import React from 'react'

const Create = () => {
  return (
    <div>
        <HeaderUi title="Create new Product"></HeaderUi>
        <CreateNewProductUI />
    </div>
  )
}

export default Create