import React, { useContext } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { use } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import CharAvatar from '../Cards/CharAvatar';

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout();
            return;
        }

        navigate(route);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };


    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20 relative overflow-hidden shadow-lg">
            {/* Decorative background circles (behind the menu) */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
                <div className="absolute w-40 h-40 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.28)_80%,_rgba(88,28,135,1))] -top-8 -right-6 opacity-20" />
                <div className="absolute w-28 h-28 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.24)_80%,_rgba(88,28,135,1))] top-20 -right-20 opacity-20" />
                <div className="absolute w-16 h-16 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.18)_80%,_rgba(88,28,135,1))] bottom-8 -left-0 opacity-20" />
                <div className="absolute w-50 h-50 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.2)_80%,_rgba(88,28,135,1))] bottom-0 -right-8 opacity-20" />
            </div>

            {/* Menu content (above the decorative shapes) */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img
                        src={user?.profileImageUrl || ""}
                        alt="Profile Image"
                        className="w-20 h-20 bg-slate-400 rounded-full"
                    />
                ) : (
                    <CharAvatar
                        fullName={user?.fullName}
                        width="w-20"
                        height="h-20"
                        style="text-xl"
                    />
                )}

                <h5 className="text-gray-950 font-medium leading-6">
                    {user?.fullName || ""}
                </h5>
            </div>

            <div className="relative z-20">
                {SIDE_MENU_DATA.map((item, index) => (
                    <button
                        key={`menu_${index}`}
                        className={`w-full flex items-center gap-4 text-[15px] ${activeMenu == item.label ? "text-white bg-primary" : ""
                            } py-3 px-6 rounded-lg mb-3`}
                        onClick={() => handleClick(item.path)}
                    >
                        <item.icon className="text-xl" />
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;