import React from 'react';
function Createticket() {
    return (
      <div className='container p-5'>
      <div className='row mt-5 mb-5 p-5 '>
        <h1 className='fs-4 'style={{textAlign:'left'}}>To create a ticket, select a relevant topic</h1>
          
      </div>
      <div className='row'>
      <div className='col-4 mt-2 '>
          <h5 className=''>Accont Opening</h5>
          <ul>
          <li><a href=''>Resident individual</a></li>
          <li><a href=''>Minor</a></li>
          <li><a href=''>Non Resident Indian (NRI)</a></li>
          <li><a href=''>Company, Partnership, HUF and LLP</a></li>
          <li><a href=''>Glossary</a></li>
          </ul>
        </div>
      <div className='col-4 mt-2'>
        <h5 className=''>Your Zerodha Accont</h5>
        <ul>
          <li><a href=''>Your Profile</a></li>
          <li><a href=''>Account modification</a></li>
          <li><a href=''>Client Master Report (CMR) and Depository Participant (DP)</a></li>
          <li><a href=''>Nomination</a></li>
          <li><a href=''>Transfer and conversion of securities</a></li>
          </ul>
        </div>
      <div className='col-4 mt-2'>
        <h5 className=''>Console</h5>
        <ul>
          <li><a href=''>Portfolio</a></li>
          <li><a href=''>Corporate actions</a></li>
          <li><a href=''>Funds statement</a></li>
          <li><a href=''>Profiles</a></li>
          <li><a href=''>Segments</a></li>
          </ul>
        </div>
        </div>

      </div>
      );
}

export default Createticket;