function Footer() {
  return (
    <>
      <footer className="footer bg-base-100 w-full fixed bottom-0 left-0 flex items-center justify-between p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved Kyoto-Kyoto
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
