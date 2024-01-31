import React from "react";

const Footer: React.FC = () => {
  return (
<footer className="py-12 mb-6 text-white bg-blue-600">

    <div className="container grid grid-cols-2 gap-4 px-4 mx-auto md:grid-cols-4">
        <div></div>
        <div>
            <h3 className="mb-2 text-2xl font-bold">Coding-School-Blog</h3>
            <ul className="space-y-2">
                <li>
                    <div>Siemenstraße 20</div>
                    <div>9020 Klagenfurt am Wörthersee</div>
                    <div>0676 8432 23249</div>
                </li>
                
            </ul>
        </div>
        <div>
            <h3 className="pt-5 mb-2 text-lg font-bold">Lass uns Freunde bleiben</h3>
            <ul className="space-y-2">
                <li><a href="" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="" className="text-gray-300 hover:text-white">IN</a></li>
            </ul>   
        </div>
    </div>
    <div className="p-4 mt-16 text-center text-white bg-blue-600">@2024 / Coding-School am Wörthersee</div>

</footer>
  );
};

export default Footer;