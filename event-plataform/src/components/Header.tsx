import React, { useState } from "react";
import { Logo } from "./Logo";
import {FaBars} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";;
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import '../styles/menu.css';
import classNames from "classnames";





export function Header() {

  const [style, setStyle] = useState("nav-slide");
  const [stylebutton, setButton] = useState("button");
  const [stylebuttonClose, setButtonClose] = useState("stylebuttonClose");

  const { data } = useGetLessonsQuery()


  function changeStyle (){
        setStyle("nav-slide-2");
        setButton("button2");
        setButtonClose('setButtonClose2');

  };
  

  function CloseMenu(){
        setStyle("nav-slide");
        setButton("button");
        setButtonClose("stylebuttonClose");
  };

  return (

    <div className="w-full">
      <header className="lg:w-full lx:w-full 2lx:w-full lg:py-5 xl:py-5 2xl:py-5 flex lg:items-center lg:justify-center xl:items-center xl:justify-center 2xl:items-center 2xl:justify-center bg-gray-700 border-b border-gray-600 md:justify-between md:p-2 sm:justify-between  sm:max-w-full sm:max-h-full sm:p-2">
        <div>
          <Logo />
        </div>
        <div className="hover:text-blue-500 xl:hidden 2xl:hidden lg:hidden cursor-pointer">
          <FaBars className={stylebutton} onClick={changeStyle}/>
          <IoMdClose className={stylebuttonClose} onClick={CloseMenu}/>
        </div>

      </header>
      <div className={style}>
        <div className="flex xl:hidden 2xl:hidden lg:hidden absolute md:z-10 sm:z-10 border border-white">
            <aside className={classNames('w-[348px] h-full bg-gray-700 p-6 border-l border-gray-600 ')}>
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                    Cronograma de Aulas
                </span>
                <div className="flex flex-col gap-8 ">
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
        </div>
      </div>
  );
}

