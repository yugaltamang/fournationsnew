const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
        <span className="inline-block w-2 h-2 bg-primary animate-blink" />
        Masters'Union
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#program" className="hover:text-primary transition-colors">Program</a>
        <a href="#nations" className="hover:text-primary transition-colors">4 Nations</a>
        <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
        <a href="#faculty" className="hover:text-primary transition-colors">Faculty</a>
        <a href="#outcomes" className="hover:text-primary transition-colors">Outcomes</a>
      </nav>
      <a href="#apply" className="bg-primary text-primary-foreground px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
        Apply →
      </a>
    </div>
  </header>
);

export default Nav;
