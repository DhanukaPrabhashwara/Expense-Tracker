import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
    return <div className="flex">
        <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
            <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
            {children}
        </div>

        <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="absolute w-96 h-96 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.4)_80%,_rgba(88,28,135,1))] top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="absolute w-48 h-48 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.4)_80%,_rgba(88,28,135,1))] top-4 right-2 opacity-60" />
        <div className="absolute w-24 h-24 rounded-full bg-[radial-gradient(closest-side,_rgba(168,85,247,0)_30%,_rgba(147,51,234,0.4)_80%,_rgba(88,28,135,1))] top-64 right-12 opacity-60" />


            <div className="grid grid-cols-1 z-20">
                <StatsInfoCard
                  icon={<LuTrendingUpDown />}
                  label="Track Your Income & Expenses"
                  value="430,000"
                  color="bg-primary"  
                />
            </div>

            <img
                src={CARD_2}
                className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-xl"
            />
        </div>
    </div>;
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
    return <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
        <div
            className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
        >
         {icon}   
        </div>
    <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span>
    </div>
    </div>
}