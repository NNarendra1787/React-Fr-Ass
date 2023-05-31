import React from 'react'
import Navbar from '../Navbar'

function Student() {
  return (
    <div>
        <Navbar />
      <h1>Student Details</h1>
      <button id='btn'>Add new student</button>
      <table className='myTable'>
        <thead>
            <tr>
                <th className='name'>Name</th>
                <th className='re'>Age</th>
                <th className='re'>Cource</th>
                <th className='re'>Batch</th>
                <th>Change</th>
            </tr>
        </thead>
        <hr />
        <tbody>
            <tr>
                <td>John</td>
                <td className='cha'>26</td>
                <td className='ch'>MERN</td>
                <td className='chb'>October</td>
                <td className='ch'>Edit</td>
            </tr>
        <hr />

            <tr>
                <td>Doe</td>
                <td className='cha'>25</td>
                <td className='ch'>MERN</td>
                <td className='chb'>November</td>
                <td className='ch'>Edit</td>
            </tr>
        <hr />
            
            <tr>
                <td>Biden</td>
                <td className='cha'>26</td>
                <td className='ch'>MERN</td>
                <td className='chb'>Septebmer</td>
                <td className='ch'>Edit</td>
            </tr>
            
        <hr />
            <tr>
                <td>Barar</td>
                <td className='cha'>22</td>
                <td className='ch'>MERN</td>
                <td className='chb'>October</td>
                <td className='ch'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>Christ</td>
                <td className='cha'>23</td>
                <td className='ch'>MERN</td>
                <td className='chb'>October</td>
                <td className='ch'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>Elent</td>
                <td className='cha'>24</td>
                <td className='ch'>MERN</td>
                <td className='chb'>November</td>
                <td className='ch'>Edit</td>
            </tr>
        <hr />
            <tr>
                <td>Harshit Sharma</td>
                <td className='cha'>24</td>
                <td className='ch'>MERN</td>
                <td className='chb'>October</td>
                <td className='ch'>Edit</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student
