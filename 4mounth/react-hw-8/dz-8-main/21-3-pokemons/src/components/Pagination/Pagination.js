import React from 'react'

const Pagination = ({ changeOffset, page, pageCount }) => {
  return (
    <div style={{margin: 'auto', width: 'max-content'}}>
        <button onClick={() => changeOffset('prev')}>
           Prev
        </button>
        {page}
        /
        {pageCount}
        <button onClick={() => changeOffset('next')}>
        Next
        </button>

    </div>
  )
}

export default Pagination