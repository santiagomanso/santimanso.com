import jwt from '../assets/jwt.png'
import firebase from '../assets/firebase.png'
import { useContext, useState } from 'react'
import { AnimationContext } from '../context/animationContext'

const TagCloud = () => {
  const [
    animation1,
    animation2,
    animation3,
    setAnimation1,
    setAnimation2,
    setAnimation3,
  ] = useContext(AnimationContext)

  const [name, setName] = useState('')
  const [icon, setIcon] = useState(null)
  const [desc, setDesc] = useState('')
  const [color, setColor] = useState('')
  const [active, setActive] = useState(false)

  const loadData = (isLoading, name, color, desc, icon) => {
    setActive(isLoading)
    setName(name)
    setColor(color)
    setDesc(desc)
    setIcon(icon)
  }

  return (
    <div className='select-none'>
      <div
        className='mt-2 grid grid-cols-2 gap-x-2'
        onMouseLeave={() => {
          setActive(false)
        }}
      >
        <div className='  rounded-md'>
          <div className='select-none  '>
            <h2 className='px-3  text-3xl text-white/90 rounded-md'>skills</h2>

            <div className={` py-4 flex justify-evenly text-4xl  select-none `}>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'bootstrap',
                    'text-violet-400',
                    'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-bootstrap'
                  )
                }}
                className={` ${
                  name === 'bootstrap' && active
                    ? ` ${color} opacity-100 rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-bootstrap text-5xl transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'javascript',
                    'text-amber-400',
                    'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.',
                    'fa-brands fa-js-square'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'javascript' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-js-square text-5xl  transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'git',
                    'text-red-400',
                    'git is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-git-alt'
                  )
                }}
                className={` ${
                  name === 'git' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-git-alt text-5xl  transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'react',
                    'text-react',
                    'git is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-react'
                  )
                }}
                className={` ${
                  name === 'react' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-react text-5xl  transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'css',
                    'text-orange-400',
                    'CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.',
                    'fa-brands fa-css3'
                  )
                }}
                className={` ${
                  name === 'css' && active
                    ? ` ${color} opacity-100 rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-css3 text-5xl  transition-all duration-300`}
              ></i>

              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'html',
                    'text-sky-500',
                    'HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-html5'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'html' && active
                    ? ` ${color} opacity-100 rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-html5 text-5xl  transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'node js',
                    'text-green-500/80',
                    'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
                    'fa-brands fa-node-js'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'node js' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-node-js text-5xl  transition-all duration-300`}
              ></i>
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'github',
                    'text-white/80',
                    'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018.',
                    'fa-brands fa-github'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'github' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-github text-5xl  transition-all duration-300`}
              ></i>
            </div>
            <div className=' flex flex-wrap gap-x-7  gap-y-5  items-center text-gray-400  tracking-wider'>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'react',
                    'text-react',
                    'react is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.',
                    'fa-brands fa-react'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'react' && active
                    ? 'opacity-100 border-react/70 translate-y-1  rotate-6 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                react
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'javascript',
                    'text-amber-400',
                    'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.',
                    'fa-brands fa-js-square'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'javascript' && active
                    ? 'opacity-100 border-amber-400/70 translate-y-1  rotate-6 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                javascript
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'html',
                    'text-sky-500',
                    'HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-html5'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'html' && active
                    ? 'opacity-100 border-sky-400/70 -translate-y-1  -rotate-6 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid border-secondary px-6 py-2 `}
              >
                html
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'github',
                    'text-white',
                    'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018. ',
                    'fa-brands fa-github'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'github' && active
                    ? 'opacity-100 border-white/70 translate-y-1  rotate-6 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                gitub
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'css',
                    'text-orange-400',
                    'css, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-css3'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'css' && active
                    ? 'opacity-100 border-orange-400  -translate-y-2 rotate-3 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                css
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'git',
                    'text-green-400/70',
                    'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
                    'fa-brands fa-git-alt'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'git' && active
                    ? 'opacity-100 border-red-400/70  -rotate-[12deg] text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                git
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'node js',
                    'text-green-400/70',
                    'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
                    'fa-brands fa-bootstrap'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'node js' && active
                    ? 'opacity-100 border-green-400/70 translate-y-1  rotate-6 text-white/80 text-3xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                node Js
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'bootstrap',
                    'text-violet-400',
                    'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-bootstrap'
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'bootstrap' && active
                    ? 'opacity-100 border-violet-400  -rotate-6  text-xl border-[2px]'
                    : 'opacity-40 border-secondary  border-[1px]'
                } flex justify-center  rounded-md border-solid  px-6 py-2 `}
              >
                bootstrap
              </span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className={` ${animation2} h-full`}>
            <div className=' flex gap-2 items-center justify-end text-2xl  select-none rounded-md px-4 mt-2'>
              <i
                className={`${
                  active
                    ? `${animation2} ${color} text-4xl animate-spin-slow`
                    : 'hidden'
                }   ${icon}  `}
              ></i>
              <h2
                className={`${
                  active ? `${animation2}` : 'hidden'
                }  text-secondary rounded-md  tracking-wider text-3xl`}
              >
                {name}
              </h2>
            </div>
            <div className='mt-2 text-secondary'>
              <p
                className={`${
                  active ? `${animation2} ` : 'hidden'
                }  font-console font-bold   text-lg  rounded-md `}
              >
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TagCloud
