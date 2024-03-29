import { useContext, useState } from 'react'
import { AnimationContext } from '../context/animationContext'
import { SiJsonwebtokens, SiFirebase } from 'react-icons/si'
const jwt = require('../assets/jwt.png')
const firebase = require('../assets/firebase.png')
const TagCloud = () => {
  const { animationSwipe, animationFade } = useContext(AnimationContext)

  const [name, setName] = useState('')
  const [icon, setIcon] = useState(null)
  const [desc, setDesc] = useState('')
  const [color, setColor] = useState('')
  const [active, setActive] = useState(false)

  const loadData = (
    isLoading: any,
    name: any,
    color: any,
    desc: any,
    icon: any,
  ) => {
    setActive(isLoading)
    setName(name)
    setColor(color)
    setDesc(desc)
    setIcon(icon)
  }

  return (
    <div className='select-none flex'>
      <div
        className='hidden lg:grid lg:grid-cols-2  gap-x-2'
        onMouseLeave={() => {
          setActive(false)
        }}
      >
        <div className='rounded-md'>
          <div className='select-none  '>
            <h2 className='px-3 text-3xl text-white/90 rounded-md'>skills</h2>

            {/* left icons flex */}
            <div
              className={` py-4 flex flex-wrap justify-evenly gap-x-10 gap-y-4 text-4xl  select-none `}
            >
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'react',
                    'text-react',
                    'git is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-react',
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
                    'bootstrap',
                    'text-violet-400',
                    'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-bootstrap',
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
                    'fa-brands fa-js-square',
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
                    'text-red-500',
                    'Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.',
                    'fa-brands fa-git-alt',
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
                    'css',
                    'text-orange-400',
                    'CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.',
                    'fa-brands fa-css3',
                  )
                }}
                className={` ${
                  name === 'css' && active
                    ? ` ${color} opacity-100 rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-css3 text-5xl  transition-all duration-300`}
              ></i>

              <SiFirebase
                onMouseOver={() => {
                  loadData(
                    true,
                    'firebase',
                    'text-amber-600',
                    'Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.',
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'firebase' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   text-5xl  transition-all duration-300`}
              />

              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'html',
                    'text-sky-500',
                    'HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-html5',
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
                    'fa-brands fa-node-js',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'node js' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-node-js text-5xl  transition-all duration-300`}
              ></i>
              <SiJsonwebtokens
                onMouseOver={() => {
                  loadData(
                    true,
                    'jwt',
                    'text-pink-600',
                    'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties, JWT.IO allows you to decode, verify and generate JWT.',
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'jwt' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }    text-5xl  transition-all duration-300`}
              />
              <i
                onMouseOver={() => {
                  loadData(
                    true,
                    'github',
                    'text-white/80',
                    'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018.',
                    'fa-brands fa-github',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'github' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-github text-5xl  transition-all duration-300`}
              ></i>
              {/* <SiMaterialui
                onMouseOver={() => {
                  loadData(
                    true,
                    'mui',
                    'text-blue-600',
                    `Material UI is an open-source React component library that implements Google's Material Design It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.`,
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'mui' && active
                    ? ` ${color} opacity-100 -rotate-[16deg]`
                    : 'opacity-30'
                }   fa-brands fa-node-js text-5xl  transition-all duration-300`}
              /> */}
            </div>

            {/* left span keywords */}
            <div className=' flex flex-wrap gap-x-5  gap-y-5  items-center text-gray-400  tracking-wider'>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'react',
                    'text-react',
                    'react is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.',
                    'fa-brands fa-react',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'react' && active
                    ? 'opacity-100 border-react/70 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
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
                    'fa-brands fa-js-square',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'javascript' && active
                    ? 'opacity-100 border-amber-400/70 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                javascript
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'git',
                    'text-red-500',
                    'Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development.',
                    'fa-brands fa-git-alt',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'git' && active
                    ? 'opacity-100 border-red-500/70  -rotate-[12deg] text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                git
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'css',
                    'text-orange-400',
                    'css, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-css3',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'css' && active
                    ? 'opacity-100 border-orange-400  -translate-y-2 rotate-3 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                css
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'html',
                    'text-sky-500',
                    'HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, its worth noting that HTML is not considered a programming language as it cant create dynamic functionality.',
                    'fa-brands fa-html5',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'html' && active
                    ? 'opacity-100 border-sky-400/70 -translate-y-1  -rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid border-secondary px-4 py-2 `}
              >
                html
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'jwt',
                    'text-pink-600',
                    'JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties, JWT.IO allows you to decode, verify and generate JWT.',
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'jwt' && active
                    ? 'opacity-100 border-pink-600 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                jwt
              </span>

              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'mui',
                    'text-blue-600',
                    `Material UI is an open-source React component library that implements Google's Material Design It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.`,
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'mui' && active
                    ? 'opacity-100 border-blue-600 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                mui
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'github',
                    'text-white',
                    'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018. ',
                    'fa-brands fa-github',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'github' && active
                    ? 'opacity-100 border-white/70 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                gihtub
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'node js',
                    'text-green-400/70',
                    'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
                    'fa-brands fa-bootstrap',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'node js' && active
                    ? 'opacity-100 border-green-400/70 translate-y-1  rotate-6 text-white/80 text-2xl border-[2px]'
                    : 'opacity-40 border-secondary border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                node Js
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'firebase',
                    'text-amber-600',
                    'Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.',
                    '',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'firebase' && active
                    ? 'opacity-100 border-amber-600  -rotate-6  text-xl border-[2px]'
                    : 'opacity-40 border-secondary  border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                firebase
              </span>
              <span
                onMouseOver={() => {
                  loadData(
                    true,
                    'bootstrap',
                    'text-violet-400',
                    'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version.',
                    'fa-brands fa-bootstrap',
                  )
                }}
                className={`transition-all duration-500 ${
                  name === 'bootstrap' && active
                    ? 'opacity-100 border-violet-400  -rotate-6  text-xl border-[2px]'
                    : 'opacity-40 border-secondary  border-[1px]'
                } flex justify-center  rounded-md border-solid  px-4 py-2 `}
              >
                bootstrap
              </span>
            </div>
          </div>
        </div>

        {/* right popUp panel */}
        <div className=''>
          <div className={` ${animationFade} h-full`}>
            <div className=' flex gap-4 items-center justify-end text-2xl  select-none rounded-md px-4 mt-2'>
              {(() => {
                if (active) {
                  switch (name) {
                    case 'jwt':
                      return (
                        <SiJsonwebtokens
                          className={`text-6xl animate-spin-slow ${color}`}
                        />
                      )
                    // case 'mui':
                    //   return (
                    //     <SiMaterialui
                    //       className={`text-6xl animate-spin-slow ${color}`}
                    //     />
                    //   )
                    case 'firebase':
                      return (
                        <SiFirebase
                          className={`text-6xl animate-spin-slow ${color}`}
                        />
                      )

                    default:
                      return (
                        <i
                          className={`${
                            active
                              ? `${animationFade} ${color} text-6xl animate-spin-slow`
                              : 'hidden'
                          }   ${icon}  `}
                        ></i>
                      )
                  }
                }
              })()}

              <h2
                className={`${
                  active ? `${animationFade}` : 'hidden'
                }  text-secondary rounded-md  tracking-wider text-3xl`}
              >
                {name}
              </h2>
            </div>
            <div className='mt-2 text-secondary'>
              <p
                className={`${
                  active ? `${animationFade} ` : 'hidden'
                }  font-console font-bold   text-lg pr-5 text-right rounded-md  `}
              >
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden mt-28 w-full grid-cols-2 pr-3'>
        <div className='bg-gray-200/40 h-52 flex flex-wrap gap-x-2 gap-y-1 text-sm'>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            html
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            css
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            javasscript
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            firebase
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            node
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            express
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            mongo db
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            react
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            mui
          </span>
          <span className='border-2 border-solid border-secondary px-3 flex items-center rounded-md'>
            bootstrap
          </span>
        </div>
        <div className='bg-variant1 h-full row-span-2'>stuff</div>
        <div className='bg-blue-400/40 h-52 flex items-center justify-center'>
          <SiFirebase className='text-8xl animate-spin-slow' />
        </div>
      </div>
    </div>
  )
}

export default TagCloud
