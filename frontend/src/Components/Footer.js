import React from 'react'

const Footer = ({ title }) => {
  return (
    <>
      <footer className="bg-white fixed bottom-0 w-full z-50 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-3 lg:py-6 md:grid-cols-4 items-start">
            
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-light text-sm space-y-2">
                <li><a href="#" className="hover:underline">{title}</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Brand Center</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-light text-sm space-y-2">
                <li><a href="#" className="hover:underline">Discord Server</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-light text-sm space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Licensing</a></li>
                <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-light text-sm space-y-2">
                <li><a href="#" className="hover:underline">iOS</a></li>
                <li><a href="#" className="hover:underline">Android</a></li>
                <li><a href="#" className="hover:underline">Windows</a></li>
                <li><a href="#" className="hover:underline">MacOS</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
