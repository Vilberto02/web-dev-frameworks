export function Footer() {
  return (
    <footer className="pt-6 pb-2 flex items-center justify-center text-center">
      <p className="text-xs sm:text-sm text-stone-500">
        &copy; {new Date().getFullYear()} TaskFlow TI. Todos los derechos reservados.
      </p>
    </footer>
  );
}