import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);

    return (
        <div className="flex gap-5 bg-purple-100 border-b border-purple-200 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
            <button
                className="block lg:hidden text-purple-900"
                onClick={() => setOpenSideMenu(!openSideMenu)}
            >
                {openSideMenu ? (
                    <HiOutlineX className="text-2xl" />
                ) : (
                    <HiOutlineMenu className="text-2xl" />
                )}
            </button>

            <h2 className="text-lg font-medium text-purple-900">
                ExpenseMate
            </h2>

            {openSideMenu && (
                <div className="fixed top-[61px] -ml-4 bg-purple-100">
                    <SideMenu activeMenu={activeMenu} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
