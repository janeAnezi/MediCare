

export default function NavMain() {
  return (
    <div className="flex justify-between items-center px-8 bg-slate-300 py-2">
      <div className="logo font-bold text-4xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-600">Medicare</div>
      <div className="nav-links">
        <ul className="flex space-x-8 font-medium text-lg text-indigo-950 ">
            <li className="hover:text-violet-800 cursor-pointer">Home</li>
            <li className="hover:text-violet-800 cursor-pointer">Doctors</li>
            <li className="hover:text-violet-800 cursor-pointer">Services</li>
            <li className="hover:text-violet-800 cursor-pointer">Blog</li>
            <li className="hover:text-violet-800 cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <button className="bg-indigo-400 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r from-indigo-600 uppercase font-medium">Book Appointment</button>
    </div>
  )
}
