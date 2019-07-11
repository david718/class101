import React from 'react'
import console = require('console');

const ChooseCoupon = () => {
  return (
    <div>
      <select value={'none'} onChange={()=>{console.log('change coupon')}}>
        <option value={'none'}>없음</option>
        <option value={'amount'}>10,000원</option>
        <option value={'rate'}>15%</option>
      </select>
    </div>
  )
}

export default ChooseCoupon
