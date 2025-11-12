import { MenuAside } from "./components/MenuAside"

export function App() {
  return (
  <div className="flex w-screen h-screen ">
    <MenuAside/>
    <main>
        <header> 
            <form action="">
                <input type="search" name="search" placeholder="🔎" />
            </form>
            <div className="menu-header">
                <a href="">🔔</a>
                <a href="">❔</a>
                <a href="">⚪</a>
            </div>
        </header>
        <div className="page-title">
            <h1>Dashoard</h1>
            <h4>This week  ^</h4>
        </div>
        <section>
            <div id="seletor">
                <h4>Projeto Festival Fashion ^</h4>
            </div>
            <div id="overview">
                <div className="box">
                    <div className="titulo">
                        <h4>Total</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="number">68</h1>
                </div>
                <div className="box">
                    <div className="titulo">
                        <h4>Finalizado</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="number">47</h1>
                </div>
                <div className="box">
                    <div className="titulo">
                        <h4>Em andamento</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="number">13</h1>
                </div>
                <div className="box">
                    <div className="titulo">
                        <h4>Pendente</h4>
                        <h5>↗️</h5>
                    </div>
                    <h1 className="number">2</h1>
                </div>
            </div>
            <div id="overview2">
                <div id="progress">
                    <h4>Progresso do projeto</h4>
                </div>
                <div id="members-time">
                    <div className="flex justify-between pb-[10px]">
                        <h4>Membros de Time</h4>
                        <h3>+</h3>
                    </div>
                    <div className="grow">
                        <div className="flex items-center ">
                            <h1 className="w-[80px] text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-[50px]">🗑️</h3>
                        </div>
                        <div className="flex items-center ">
                            <h1 className="w-[80px] text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-[50px]">🗑️</h3>
                        </div>
                        <div className="flex items-center ">
                            <h1 className="w-[80px] text-[40px]">🔴</h1>
                            <div className="w-full ">
                                <h4>Clark Griffin</h4>
                                <h6>Ul Designer</h6>
                            </div>
                            <h3 className="w-[50px]">🗑️</h3>
                        </div>
                    </div>                    
                    <div className="self-end">
                        <h6>Ver todos os membros</h6>
                    </div>                   
                </div>
                
            </div>
        </section>

    </main>
  </div>
  )
}
