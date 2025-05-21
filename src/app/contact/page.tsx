import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col pt-32">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-radial from-creme-purple/20 via-creme-pink/10 to-transparent opacity-60"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-white/50 uppercase text-sm tracking-wide">Contact us</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                Let's talk about your project
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Fill out the form and we'll get back to you within 24 hours. Or reach out directly via email.
              </p>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                <a
                  href="mailto:hello@creme.digital"
                  className="text-2xl font-medium hover:text-creme-pink transition-colors"
                >
                  hello@creme.digital
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://dribbble.com/cremedigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
                      <path d="M15.5 8.5C14.67 8.5 14 7.83 14 7C14 6.17 14.67 5.5 15.5 5.5C16.33 5.5 17 6.17 17 7C17 7.83 16.33 8.5 15.5 8.5ZM12 9.5C10.07 9.5 8.5 11.07 8.5 13C8.5 14.93 10.07 16.5 12 16.5C13.93 16.5 15.5 14.93 15.5 13C15.5 11.07 13.93 9.5 12 9.5Z" fill="white"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/itscreme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.397 20.9971V12.8011H16.162L16.573 9.59309H13.397V7.54809C13.397 6.62209 13.655 5.98809 14.984 5.98809H16.668V3.12709C15.8486 3.03918 15.0248 2.99851 14.201 3.00609C11.757 3.00609 10.079 4.49209 10.079 7.23109V9.58709H7.33203V12.7951H10.085V20.9971H13.397Z" fill="white"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/itscreme/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7.9C9.74 7.9 7.9 9.74 7.9 12C7.9 14.26 9.74 16.1 12 16.1C14.26 16.1 16.1 14.26 16.1 12C16.1 9.74 14.26 7.9 12 7.9ZM12 14.6C10.56 14.6 9.4 13.44 9.4 12C9.4 10.56 10.56 9.4 12 9.4C13.44 9.4 14.6 10.56 14.6 12C14.6 13.44 13.44 14.6 12 14.6Z" fill="white"/>
                      <path d="M16.6 8.5C17.1523 8.5 17.6 8.05228 17.6 7.5C17.6 6.94772 17.1523 6.5 16.6 6.5C16.0477 6.5 15.6 6.94772 15.6 7.5C15.6 8.05228 16.0477 8.5 16.6 8.5Z" fill="white"/>
                      <path d="M19.9 6.4C19.7 5.6 19.4 4.9 18.9 4.3C18.4 3.8 17.7 3.5 16.9 3.3C16.2 3.1 15.5 3 14.7 3C14 3 12.7 3 12 3C11.3 3 10 3 9.3 3C8.5 3 7.8 3.1 7.1 3.3C6.3 3.5 5.6 3.8 5.1 4.3C4.6 4.8 4.3 5.5 4.1 6.3C3.9 7 3.8 7.7 3.8 8.5C3.8 9.2 3.8 10.5 3.8 11.2C3.8 11.9 3.8 13.2 3.8 13.9C3.8 14.7 3.9 15.4 4.1 16.1C4.3 16.9 4.6 17.6 5.1 18.1C5.6 18.6 6.3 18.9 7.1 19.1C7.8 19.3 8.5 19.4 9.3 19.4C10 19.4 11.3 19.4 12 19.4C12.7 19.4 14 19.4 14.7 19.4C15.5 19.4 16.2 19.3 16.9 19.1C17.7 18.9 18.4 18.6 18.9 18.1C19.4 17.6 19.7 16.9 19.9 16.1C20.1 15.4 20.2 14.7 20.2 13.9C20.2 13.2 20.2 11.9 20.2 11.2C20.2 10.5 20.2 9.2 20.2 8.5C20.2 7.7 20.1 7 19.9 6.4ZM18.7 13.8C18.7 14.5 18.6 15.1 18.5 15.6C18.4 16.1 18.2 16.5 17.9 16.8C17.6 17.1 17.2 17.3 16.7 17.4C16.2 17.5 15.6 17.6 14.9 17.6C14.2 17.6 13 17.6 12.3 17.6C11.6 17.6 10.4 17.6 9.7 17.6C9 17.6 8.4 17.5 7.9 17.4C7.4 17.3 7 17.1 6.7 16.8C6.4 16.5 6.2 16.1 6.1 15.6C6 15.1 5.9 14.5 5.9 13.8C5.9 13.1 5.9 11.9 5.9 11.2C5.9 10.5 5.9 9.3 5.9 8.6C5.9 7.9 6 7.3 6.1 6.8C6.2 6.3 6.4 5.9 6.7 5.6C7 5.3 7.4 5.1 7.9 5C8.4 4.9 9 4.8 9.7 4.8C10.4 4.8 11.6 4.8 12.3 4.8C13 4.8 14.2 4.8 14.9 4.8C15.6 4.8 16.2 4.9 16.7 5C17.2 5.1 17.6 5.3 17.9 5.6C18.2 5.9 18.4 6.3 18.5 6.8C18.6 7.3 18.7 7.9 18.7 8.6C18.7 9.3 18.7 10.5 18.7 11.2C18.7 11.9 18.7 13.1 18.7 13.8Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
