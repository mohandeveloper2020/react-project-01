function Header() {
  return (
    <nav className="d-flex justify-content-between bg-primary px-3 py-2">
      <div className="text-white fw-bold">APP LOGO</div>
      <ul className="d-flex align-items-center mb-0 list-unstyled">
        <li className="px-3">Home</li>
        <li className="px-3">About me</li>
        <li className="px-3">Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
