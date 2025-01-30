function CourseCard({ name, subTitle, date, description, imgSrc, courseSrc }){
    return (
        <div className="w-[60vw] h-60 bg-purple-700 flex gap-10 shadow-2xl rounded-2xl">
            <a href={courseSrc} target="_blank">
                <img src={imgSrc} alt={name} className="w-[11vw] h-60 bg-white rounded-l-2xl" />
            </a>
            <div className="p-5">
                <div className="flex flex-col gap-3">
                    <div>
                        <h2 className="text-white text-5xl">{name}</h2>
                        <h3>
                            <a
                                href={courseSrc}
                                target="_blank"
                                className="text-white text-2xl"
                                >{subTitle}
                            </a>
                        </h3>
                    </div>
                    <p className="text-white text-[1.3em]">{date}</p>
                    <p className="text-white text-[1.1em]">{description}</p>
                </div>


            </div>
        </div>
    );
}

export default CourseCard