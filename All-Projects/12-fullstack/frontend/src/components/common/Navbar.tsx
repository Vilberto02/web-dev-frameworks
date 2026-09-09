export function Navbar() {
  return (
    <header className="flex flex-col gap-1 pb-4">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
        TaskFlow TI
      </h1>
      <p className="text-sm sm:text-base text-stone-600">
        Sistema de gestión y seguimiento de proyectos de software.
      </p>
    </header>
  );
}