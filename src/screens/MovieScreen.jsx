import {data} from "./../component/data"

function MovieScreen(){


    return(
        <div className="flex flex-col gap-10 justify-center items-center py-11" style={{backgroundColor:"#6e6e6d"}}>
            {data.map((item,index)=>{
                return(
                    <div style={{width:"80%",height:"600px",backgroundImage:`url(${item.backgroundImage})`,backgroundSize:"cover"}} className="text-white p-10 rounded-md">
                        <div className="flex gap-9">
                            <div>
                                <img src={item.moviePoster} alt="" style={{width:"180px",height:"250px"}} className="rounded-md" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>
                                    <h1 className="text-5xl text-white">{item.movieName}</h1>
                                </span>
                                <span>
                                    <p className="text-2xl text-white">{item.year},{item.actor}</p>
                                </span>
                                <span>
                                    <p><span className="border p-1 rounded-md">{item.time}</span> <span>{item.type}</span></p>
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="pt-10 text-xl">{item.about}</p>
                        </div>
                        <div style={{color:"#6e6e6d", marginTop:"100px"}} className="flex gap-5">
                            <span>
                            <i class="fa-solid fa-share-nodes text-2xl cursor-pointer"></i>
                            </span>
                            <span>
                            <i class="fa-solid fa-heart text-2xl cursor-pointer"></i>
                            </span>
                            <span>
                            <i class="fa-solid fa-message text-2xl cursor-pointer"></i>
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

 export default MovieScreen;