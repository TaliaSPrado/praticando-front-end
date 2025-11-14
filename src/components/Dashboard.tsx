export const Dashboard = () => (
    <div className="w-full pl-3.75">    
        <div className="flex items-center justify-between p-5 w-full h-17.5">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <h4>This week  ^</h4>
        </div>
        <section className="bg-[#0F0B15] h-[calc(97% - 70px - 70px)] w-[96%] rounded-3xl">
            <div className="pt-5 pl-3.75 h-[7%]">
                <h4>Projeto Festival Fashion ^</h4>
            </div>
            <div className="h-[35%] gap-2.5 w-full p-3.75 flex justify-around">
                <div className="bg-[#110c1a] h-full w-full p-3.75 rounded-xl border border-white/70 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h4>Total</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="text-[6vw] ml-2.5">68</h1>
                </div>
                <div className="bg-[#110c1a] h-full w-full p-3.75 rounded-xl border border-white/70 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h4>Finalizado</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="text-[6vw] ml-2.5">22</h1>
                </div>
                <div className="bg-[#110c1a] h-full w-full p-3.75 rounded-xl border border-white/70 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h4>Em andamento</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="text-[6vw] ml-2.5">8</h1>
                </div>
                <div className="bg-[#110c1a] h-full w-full p-3.75 rounded-xl border border-white/70 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <h4>Pendente</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="text-[6vw] ml-2.5">2</h1>
                </div>
            </div>
            <div className="flex gap-2.5 h-[58%] p-3.75 ">
                <div className="h-full w-[65%] flex flex-col">
                    <h4 className="bg-[#110c1a] rounded-xl border border-white/70 p-2 pl-3 w-full mb-2.5">Progresso do projeto</h4>
                </div>
                <div className="h-full p-3.75 pt-5 w-[35%] rounded-xl border border-white/70 flex flex-col justify-between bg-[#110c1a]">
                    <div className="flex justify-between pb-2.5">
                        <h4>Membros de Time</h4>
                        <h3>+</h3>
                    </div>
                    <div className="grow">
                        <div className="flex items-center ">
                            <h1 className="w-20 text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-12.5">🗑️</h3>
                        </div>
                        <div className="flex items-center ">
                            <h1 className="w-20 text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-12.5">🗑️</h3>
                        </div>
                        <div className="flex items-center ">
                            <h1 className="w-20 text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-12.5">🗑️</h3>
                        </div>
                    </div>                    
                    <div className="self-end">
                        <h6>Ver todos os membros</h6>
                    </div>                   
                </div>
            </div>
        </section>
    </div>
);
