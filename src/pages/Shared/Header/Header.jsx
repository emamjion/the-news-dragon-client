import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <img src={logo} />
                <h5 className='mt-4' style={{color: '#706F6F'}}>Journalism Without Fear or Favour</h5>
                <p className='fs-5 fw-semibold' style={{color: '#706F6F'}}>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;