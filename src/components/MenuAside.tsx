export const MenuAside = () => (
  <aside className="bg-[#0F0B15] text-white p-4 min-w-50 h-full flex flex-col justify-between ">
        <h1 className="h-20 m-2.5 text-center text-3xl font-bold">Kanary</h1>
        <nav className="flex flex-col grow gap-5 ml-[30%]">
            <div>
                <a href="#"> Dashboard</a>
            </div>
            <div>
                <a href="#">Board</a>
            </div>
            <div>
                <a href="#">Team</a>
            </div>
            <div>
                <a href="#">Project</a>
            </div>
            <div>   
                <a href="#">settings</a>
            </div>
        </nav>
        <div className="text-white decoration-0 mt-7.5 h-12.5 m-2.5 flex items-center justify-center">
            <a href="#">Log Out</a>
        </div>
    </aside>  
)