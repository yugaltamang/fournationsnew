const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight mb-2">
          <span className="inline-block w-2 h-2 bg-primary" />
          Masters'Union
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Masters' Union. Learn by doing.</p>
      </div>
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-primary">Privacy</a>
        <a href="#" className="hover:text-primary">Terms</a>
        <a href="#" className="hover:text-primary">Brochure</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
