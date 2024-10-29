import { Footer } from "flowbite-react"
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble} from "react-icons/bs"

export default function FooterCom(){

  return (
    <div>
        <Footer container className="border border-t-8  border-teal-500">
          <div className="w-full max-w-7xl mx-auto">
             <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to={"/"} className='self-center whitespace-nowrap text-lg sm:-text-xl font-semibold dark:text-white'>
                   <span className='px-2 py-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-lg text-white'>SmartBrain's</span>
                      Blog
                 </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title="About"/>
                     <Footer.LinkGroup col>
                         <Footer.Link>
                            100 js projects
                         </Footer.Link>
                         <Footer.Link>
                            SmartBrains
                         </Footer.Link>
                     </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Follow us"/>
                     <Footer.LinkGroup col>
                         <Footer.Link>
                            Github
                         </Footer.Link>
                         <Footer.Link>
                            Discord
                         </Footer.Link>
                     </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Legal"/>
                     <Footer.LinkGroup col>
                         <Footer.Link>
                            Privecy Policy
                         </Footer.Link>
                         <Footer.Link>
                            terms &amp; Conditions
                         </Footer.Link>
                     </Footer.LinkGroup>
                    </div>
                    
                </div>
             </div>
             <Footer.Divider/>
             <div className="flex sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook}/>
                    <Footer.Icon href="#" icon={BsInstagram}/>
                    <Footer.Icon href="#" icon={BsTwitter}/>
                    <Footer.Icon href="#" icon={BsGithub}/>
                    <Footer.Icon href="#" icon={BsDribbble}/>
                </div>
             </div>
          </div>
        </Footer>
    </div>
  );
}
