import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='md:px-20 px-5'>
        <h1 className='text-2xl font-bold text-blue-700 mb-5'>
            تمرینی بنویسید که : 
        </h1>
        <ul className='mb-5'>
            <li>
                1.
                حالت فروشکاهی داشته باشه و اطلاعات رو از fakestoreapi بگیره و محصولات رو نشون بده
            </li>
            <li>
                2. 
                شامل دو تا لی اوت باشه. روت های داخلی تر لی اوت شون فرق کنه
            </li>
        </ul>
        <Link href='/tamrin1/view1' className='py-2 bg-blue-600 text-white px-5 inline-block rounded'>مشاهده تمرین</Link>
    </div>
  )
}

export default index