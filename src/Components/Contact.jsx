import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { useDispatch } from 'react-redux';
import { constructionContact } from '../Redux/Slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const formRef = useRef();
    const contactRef = useRef();
    const [isWhatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
    const [whatsAppMessage, setWhatsAppMessage] = useState("");
    const dispatch=useDispatch()
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            dispatch(constructionContact(contactRef.current.getBoundingClientRect().top));
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1soo7ax', 'template_2jpnbxa', formRef.current, {
                publicKey: 'rmIynNeCP4YQEqtlH',
            })
            .then((result) => {
                toast.success("Message sent successfully!", {
                    position:"top-center",
                    autoClose:1500
                });
            }, (error) => {
                toast.error(`Error: ${error.text}`, {
                    position: "top-center",
                    autoClose: 1500,
                });
            });

        e.target.reset();
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const encodedMessage = encodeURIComponent(whatsAppMessage);
        window.open(`https://wa.me/+923446768426?text=${encodedMessage}`, '_blank');
        setWhatsAppModalOpen(false);
        setWhatsAppMessage(""); // Reset the message
    };

    const handlebutton=()=>{
        toast.success("Hello world",{
            position:"top-center",
            autoClose:1500
        })
    }

    return (
        <>
            <ToastContainer/>
            <div id='consContact' ref={contactRef} className='bg-gray-200 contactSection'>
                <section className="">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">Have a question or need support? We're here to help. Reach out to us with any queries, feedback, or concerns and we'll get back to you as soon as possible!</p>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Name</label>
                                <input name="name" type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Shafiq Ahmad" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                                <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="ali3523@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                                <input name="subject" type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                                <textarea name='message' id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                    </div>
                </section>

            </div>

            {/* <div onClick={() => setWhatsAppModalOpen(true)} className='w-[50px] cursor-pointer fixed right-9 bottom-[60px]'>
                <img className='w-full h-full' src={watsapp} alt="" />
            </div> */}

            {/* WhatsApp Message Modal */}
            {/* {isWhatsAppModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Send WhatsApp Message</h3>
                        <form onSubmit={handleWhatsAppSubmit}>
                            <textarea
                                value={whatsAppMessage}
                                onChange={(e) => setWhatsAppMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="w-full p-2 border rounded-md mb-4"
                                rows="4"
                                required
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setWhatsAppModalOpen(false)}
                                    className="py-2 px-4 bg-gray-400 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-lg">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}
        </>
    );
}

export default Contact;
