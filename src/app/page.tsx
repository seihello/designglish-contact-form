import Image from "next/image";

const privacyPolicies = [
  {
    title: "Introduction",
    body: "Thank you for using Designglish. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and manage your information when you use the App.",
  },
  {
    title: "Personal Data",
    body: "Designglish doesn't collect or share any type of personal data.",
  },
  {
    title: "Changes to Privacy Policy",
    body: "Please note that this Privacy Policy may be subject to change. Any changes will be reflected in this document, and your continued use of the App after any modifications indicates your acceptance of the updated Privacy Policy.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about the Privacy Policy you can contact us through the form below.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-16 items-center px-4 py-12 md:py-24 max-w-[700px] mx-auto">
      <div className="flex items-center gap-x-2">
        <img src="icon.png" alt="" className="w-12 rounded-lg" />
        <h1 className="text-2xl font-semibold">Designglish Support Page</h1>
      </div>
      <div className="flex flex-col gap-y-8">
        <h2 className="text-center text-xl font-semibold">Privacy Policy</h2>
        {privacyPolicies.map((privacyPolicy, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold">
              {i + 1}. {privacyPolicy.title}
            </h3>
            <hr className="border-t-4 border-primary-700 mb-2" />
            <p>{privacyPolicy.body}</p>
          </div>
        ))}
      </div>
      <form className="w-full flex flex-col gap-y-4 items-stretch" action="https://getform.io/f/nbdeeeya" method="POST">
        <h2 className="text-center text-xl font-semibold">Contact Us</h2>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-800">
            Name
          </label>
          <input type="text" name="name" className="border p-2"></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-800">
            E-mail
          </label>
          <input type="email" name="email" className="border p-2"></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-800">
            Message
          </label>
          <textarea name="message" className="border h-32 p-2"></textarea>
        </div>
        <button type="submit" className="bg-primary-900 font-semibold text-white rounded-md py-2 min-w-24">
          Send
        </button>
      </form>
    </main>
  );
}
