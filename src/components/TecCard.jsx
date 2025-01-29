function TecCard({ name, imgSrc }){
    return (
        <div className="flex flex-col justify-center items-center w-40 h-50 gap-4 bg-purple-400 p-0 rounded-2xl drop-shadow-2xl shadow-2xl border-amber-600 border-b-8">
            <img src={imgSrc} alt={name} className="w-20 h-20"/>
            <h2 className="text-white text-3xl">{name}</h2>
        </div>
    );
}

export default TecCard