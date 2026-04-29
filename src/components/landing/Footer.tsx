const Footer = () => (
  <footer className="border-t border-border py-10 sm:py-12">
    <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-center md:text-left">
      <div className="w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start gap-2 font-display text-lg sm:text-xl font-semibold tracking-tight mb-2">
          <span className="inline-block w-2 h-2 bg-primary" />
          Masters'Union
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">© 2026 Masters' Union. Learn by doing.</p>
      </div>
      <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary">Privacy</a>
        <a href="#" className="hover:text-primary">Terms</a>
        <a href="#" className="hover:text-primary">Brochure</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
