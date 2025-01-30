import { ChevronsUp } from "lucide-react";

function ReturnMainButton({ activeSection, scrollToSection }){
    if(activeSection == "main"){
        return
    }

    return (
        <div className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 cursor-pointer fixed bottom-13 right-5 hover:p-4 duration-500 text-white hover:text-emerald-400" onClick={() => scrollToSection('main')}>
            <ChevronsUp className="size-10"></ChevronsUp>
        </div>
    );
}

export default ReturnMainButton