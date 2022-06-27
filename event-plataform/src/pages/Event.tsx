import { DefaultUi, Player, Youtube } from "@vime/react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug
                    ? <Video lessonSlug={slug} />
                    : <div className="flex-1">
                        <div className="bg-black flex justify-center">
                            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                                <Player>
                                    <Youtube videoId="S5Qvi23VqaQ" />
                                    <DefaultUi />
                                </Player>
                            </div>
                        </div>
                        <div className="p-8 max-w-[1100px] mx-auto">
                            <div className="flex items-start gap-16">
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold">
                                        Introdução Ao <strong className="text-purple-600">Rocketseat</strong>
                                    </h1>
                                    <p className="mt-4 leading-relaxed text-gray-300">
                                        Fala dev!

                                        Ao embarcar aqui no canal da Rocketseat, você vai navegar por um universo de conteúdos sobre programação, produzidos especialmente pra ajudar toda a comunidade no maior desafio que nós temos como programadoras ou programadores: nunca parar de aprender.

                                        Essa é uma comunidade incrível de devs que estão sempre em busca do próximo nível. E por isso, não importa há quantos anos você programa ou qual é a sua stack: aqui você vai encontrar uma grade de conteúdos diversa, sobre as mais diferentes tecnologias, para os diferentes momentos da sua carreira.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>}
                <Sidebar />
            </main>

        </div>
    )
}