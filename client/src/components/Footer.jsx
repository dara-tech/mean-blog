import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsTelegram } from 'react-icons/bs';


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8  border-purple-800 shadow-lg '>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Dara
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://findanyimage.netlify.app/page.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Find Any Image
                </Footer.Link>
                <Footer.Link
                  href='https://findanyimage.netlify.app/removebg.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Remove Background Images
                </Footer.Link>
                <Footer.Link
                  href='https://findanyimage.netlify.app/resume.html'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Resume Builder
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/dara-tech'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
                <Footer.Link
                  href='https://daracheol.netlify.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                <Footer.Link href='#'>References</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Sovandara's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
          <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100005683637175&mibextid=dGKdO6"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/sovandara-choel-a44a712a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.github.com/dara-tech"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://t.me/vanlrn"
              icon={BsTelegram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
