import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({totalCourse, coursePerPage, setCurrentPage, currentPage}) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalCourse / coursePerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center'>
        <nav aria-label="Page navigation" className='p-3 border-1'>
            <ul className='pagination'>
            <button className="page-item" disabled={currentPage === 1} onClick={()=>{setCurrentPage(currentPage-1)}}>Previous</button>
                    {pageNumbers?.map((number)=>{
                        return <button key={number} className="page-item" onClick={()=>{
                            setCurrentPage(number) 
                            console.log(number)
                        }}>
                            {number}
                        </button>
                    })}
            <button className="page-item" disabled={currentPage === Math.ceil(totalCourse / coursePerPage)} onClick={()=>{setCurrentPage(currentPage+1)}}>Next</button>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Pagination