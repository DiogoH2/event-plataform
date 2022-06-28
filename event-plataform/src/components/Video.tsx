import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";


import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";




interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando.....</p>
            </div>
        )
    }
    return (
        <div className="flex-1">
            <div className="bg-black flex flex-1 justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video md:z-0 sm:z-0 sm:max-w-[723px] md:max-w-[1023px] md:justify-center sm:justify-center">
                    <Player >
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto sm:max-w-[600px]">
                <div className="flex items-start gap-16 md:flex-col sm:flex-col flex-1">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="h-16 2-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="" />

                                <div>
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}r</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4  sm:gap-10 md:gap-10">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="" className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2 md:flex sm:flex md:flex-col sm:flex-col">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos da Maratona Explorer e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}