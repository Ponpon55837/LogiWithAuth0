import React from 'react'
import { Pagination } from 'react-bootstrap'
// import { paginationStyle } from '../style'

const PageCount = ({ page, setPage, arrs }) => {

  return (
    <Pagination>
      {arrs.map(arr => (
        <Pagination.Item key={arr} title={`第${arr}頁`} onClick={() => setPage(arr)}>{arr}</Pagination.Item>
      ))}
    </Pagination>
  )
}

export default PageCount
