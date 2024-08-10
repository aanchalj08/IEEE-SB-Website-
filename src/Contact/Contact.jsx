import { useForm } from 'react-hook-form';
import contactUS from '../assets/contactUS.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();
  const notify = () => toast("Email Sent!");

  const onSubmit = (data, e) => {
    e.preventDefault();
    data.reply_to = data.email
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMP_ID, form.current, {
        publicKey: import.meta.env.VITE_API_KEY,
      })
      .then(
        () => {
          notify();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
		<div className="w-full h-screen flex justify-center">
			<div
				className="w-[900px] h-[600px] mt-16 mb-28 max-xl:ml-20 max-lg:ml-0 max-sm:h-[650px] max-md:w-[600px] max-sm:w-[430px] flex justify-center items-center bg-cover bg-no-repeat bg-center rounded-lg brightness-[120%] "
				style={{
					backgroundImage:
						window.innerWidth > 640 ? `url(${contactUS})` : "none",
				}}>
				<ToastContainer />
				<div className="w-[70%] flex">
					<div className="h-[500px] ml-4">
						<div className="p-5 mt-[-10px]">
							<h2 className="text-5xl text-black sm:text-white font-extrabold pb-3 mt-[-10px] ml-12 max-sm:text-3xl max-sm:ml-3 ">
								Contact us☎️
							</h2>
							<p className="text-lg text-black sm:text-white mb-[-10px] font-semi-bold">
								For more details and answers to your queries, contact us!
							</p>
						</div>
						<form
							ref={form}
							className="mt-4 space-y-6 "
							onSubmit={handleSubmit(onSubmit)}>
							<div className="rounded-md shadow-sm -space-y-px ">
								<div>
									<label htmlFor="name" className="sr-only">
										Name
									</label>
									<input
										id="name"
										name="name"
										type="text"
										autoComplete="name"
										{...register("name")}
										className="appearance-none rounded-none h-12 relative block w-full px-3 py-2 bg-gray-200  border border-gray-700 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Name"
									/>
								</div>
								<div>
									<label htmlFor="email" className="sr-only">
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										{...register("email", { required: true })}
										className="appearance-none rounded-none h-12 relative block w-full px-3 py-2 bg-gray-200 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Email"
									/>
								</div>
								<div>
									<label htmlFor="subject" className="sr-only">
										Subject
									</label>
									<input
										id="subject"
										name="subject"
										type="text"
										autoComplete="subject"
										{...register("subject")}
										className="appearance-none rounded-none h-12 relative block w-full px-3 py-2 bg-gray-200 border border-gray-700 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Subject"
									/>
								</div>
								<div>
									<label htmlFor="message" className="sr-only">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="4"
										{...register("message")}
										className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-200 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
										placeholder="Message"
									/>
								</div>
							</div>
							{errors.email && (
								<span className="text-red-500 text-sm ">Email is required</span>
							)}
							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-semibold rounded-lg items-center text-white h-16 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Send Message
								</button>
							</div>
							<div className="text-center text-sm text-black sm:text-white">
								This site is protected by reCAPTCHA and the Google{" "}
								<a
									href="https://policies.google.com/privacy"
									className="underline">
									Privacy Policy
								</a>{" "}
								and{" "}
								<a
									href="https://policies.google.com/terms"
									className="underline">
									Terms of Service
								</a>{" "}
								apply.
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact