import Area from "../comum/Area";
import Depoimento from "./Depoimento";

export default function Depoimentos() {
    return (
        <Area id="depoimentos" className={`
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20
        `}>
            <div className={`flex flex-col justify-center items-center`}>
                <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
                    As pessoas estão dizendo...
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Juliana Moraes"
                        titulo="Diretora Comercial"
                        texto="Esse aplicativo mudou minha abordagem em relação ao dinheiro. Antes, vivia no escuro sobre minhas finanças.  Recomendo para todos que buscam controle financeiro."
                    />

                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Rafael Vieira"
                        titulo="Servidor Público"
                        texto="Eu sempre evitei lidar com números, mas esse aplicativo facilitou tanto o gerenciamento do meu dinheiro. Agora, consigo estabelecer metas realistas, economizar para as coisas que realmente importam e até começar a construir uma reserva de emergência."
                        destaque
                    />

                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        nome="Gabriel Junior"
                        titulo="Desenvolvedor de Software"
                        texto="Eu realmente não sabia para onde meu dinheiro estava indo até começar a usar o Meu DRE. Agora, consigo ver todas as minhas despesas e receitas de forma clara. Estou economizando mais e até consegui investir um pouco!"
                    />
                </div>
            </div>
        </Area>
    )
}