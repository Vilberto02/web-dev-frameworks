import { FolderKanban, Plus } from "lucide-react";
import { Button } from "../common/Button";
import type { ProjectStatus } from "../../types/project.types";

export interface ProjectEmptyStateProps {
  filterStatus: ProjectStatus | "TODOS";
  onCreateProject: () => void;
}

export function ProjectEmptyState({
  filterStatus,
  onCreateProject,
}: ProjectEmptyStateProps) {
  const isFiltered = filterStatus !== "TODOS";

  return (
    <section className="flex flex-col items-center justify-center gap-3 max-w-sm mx-auto p-10 text-center">
      <span className="p-3 bg-stone-100 rounded-full text-stone-400 inline-flex">
        <FolderKanban size={32} aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-stone-800">
        {isFiltered
          ? `No hay proyectos con estado "${filterStatus}"`
          : "No hay proyectos registrados todavía"}
      </h3>
      <p className="text-xs text-stone-500 leading-relaxed">
        {isFiltered
          ? "Prueba cambiando el filtro de estado o registrando un nuevo proyecto."
          : "Comienza creando tu primer proyecto para gestionar sus tareas y métricas."}
      </p>
      {!isFiltered && (
        <Button
          label="Crear Proyecto"
          icon={Plus}
          variant="default"
          onClick={onCreateProject}
          className="mt-2"
        />
      )}
    </section>
  );
}
