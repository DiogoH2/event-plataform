
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

import { useState } from "react";


export function NavBar() {

    const { data } = useGetLessonsQuery()

    const [style, setStyle] = useState("nav-slide");
    
    return (
        <div className="flex justify-end items-end w-[348px] h-full bg-gray-700 p-6 border-l border-gray-600">
            <aside className={style}>
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                    Cronograma de Aulas
                </span>
                <div className="flex flex-col gap-8">
                    {data?.lessons.map(lesson => {
                        return (
                            <Lesson
                                key={lesson.id}
                                title={lesson.title}
                                slug={lesson.slug}
                                availableAt={new Date(lesson.availableAt)}
                                type={lesson.lessonType}
                            />

                        )
                    })}
                </div>
            </aside>
        </div>

    )
}