
export default function NavTop() {
  return (
    <div className="nav-top flex justify-between bg-slate-200 px-8">
      <nav >
        <ul className="flex space-x-6">
          <li>
           About
          </li>
          <li>
           Doctors
          </li>
          <li>
          Contact
          </li>
          <li>
            FAQ
          </li>
        </ul>
      </nav>
      <div className="contact-info flex space-x-4">
        <p> +2349035682423</p>
        <p>✉️ medicare@support.org</p>
      </div>
    </div>
  );
}
