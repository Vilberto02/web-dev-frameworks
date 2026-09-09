import { ProjectTableRow } from "./ProjectTableRow";
import { ProjectEmptyState } from "./ProjectEmptyState";
import type { Project, ProjectStatus } from "../../types/project.types";

export interface ProjectTableProps {
  projects: Project[];
  isLoading: boolean;
  filterStatus: ProjectStatus | "TODOS";
  onEdit: (project: Project) => void;
  onDelete: (id: string, name: string) => void;
  onCreateProject: () => void;
}

export function ProjectTable({
  projects,
  isLoading,
  filterStatus,
  onEdit,
  onDelete,
  onCreateProject,
}: ProjectTableProps) {
  return (
    <section
      aria-label="Lista de proyectos"
      className="border border-stone-200 rounded-lg overflow-hidden bg-white shadow-xs"
    >
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-150">
          <thead className="bg-stone-100 border-b border-stone-200">
            <tr>
              <th
                scope="col"
                className="p-3 text-xs sm:text-sm font-semibold text-stone-700 uppercase tracking-wider"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="p-3 text-xs sm:text-sm font-semibold text-stone-700 uppercase tracking-wider"
              >
                Descripción
              </th>
              <th
                scope="col"
                className="p-3 text-xs sm:text-sm font-semibold text-stone-700 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                scope="col"
                className="p-3 text-xs sm:text-sm font-semibold text-stone-700 uppercase tracking-wider text-center"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {isLoading && projects.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-12 text-stone-500">
                  <span className="flex flex-col items-center justify-center gap-2">
                    Cargando proyectos...
                  </span>
                </td>
              </tr>
            ) : projects.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-0">
                  <ProjectEmptyState
                    filterStatus={filterStatus}
                    onCreateProject={onCreateProject}
                  />
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <ProjectTableRow
                  key={project.id}
                  project={project}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
