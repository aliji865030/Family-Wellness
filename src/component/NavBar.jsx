import Button from "./Button";

function NavBar(){
return (
    <div className="w-full flex justify-center">
        <div className="w-10/12  ">
        {/* for text content */}
        <div className="text-start p-4 pl-0 pr-0">
            <h1 style={{color:"#991f48"}} className="text-4xl p-2 pl-0">Family Wellness</h1>
            <p>MASSAGE THERAPY</p>
        </div>
        {/* for nav content */}
        <div className="flex gap-1 ">
            <Button backgroundColor="#991f48" padding="10px 100px">HOME</Button>
            <Button backgroundColor="#a4a09c" padding="10px 100px">ABOUT</Button>
            <Button backgroundColor="#a4a09c" padding="10px 100px">SERVICES</Button>
            <Button backgroundColor="#a4a09c" padding="10px 100px">FAQ</Button>
            <Button backgroundColor="#a4a09c" padding="10px 100px">CONTACT</Button>
        </div>

        <div className="w-full flex justify-center ">
            <img className="w-8/12 p-9" src="https://images.unsplash.com/photo-1655185497004-f3018eab9cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
    </div>
    </div>
)
}

export default NavBar;