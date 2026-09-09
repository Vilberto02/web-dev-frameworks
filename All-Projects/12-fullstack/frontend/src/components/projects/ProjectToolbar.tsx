import { Plus } from "lucide-react";
import { Button } from "../common/Button";
import { Select } from "../common/Select";
import {
  type ProjectStatus,
  PROJECT_STATUS_OPTIONS,
} from "../../types/project.types";

const FILTER_OPTIONS = [
  { value: "TODOS" as const, label: "Todos los estados" },
  ...PROJECT_STATUS_OPTIONS,
];

export interface ProjectToolbarProps {
  filterStatus: ProjectStatus | "TODOS";
  onFilterChange: (status: ProjectStatus | "TODOS") => void;
  onCreateProject: () => void;
}

export function ProjectToolbar({
  filterStatus,
  onFilterChange,
  onCreateProject,
}: ProjectToolbarProps) {
  return (
    <nav
      aria-label="Filtros y acciones de proyectos"
      className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-white p-4 rounded-lg border border-stone-200 shadow-xs"
    >
      <fieldset className="flex flex-col sm:flex-row sm:items-center gap-2 border-0 p-0 m-0">
        <label
          htmlFor="filter-status"
          className="text-sm font-semibold text-stone-700 whitespace-nowrap"
        >
          Filtrar por estado:
        </label>
        <Select<ProjectStatus | "TODOS">
          id="filter-status"
          ariaLabel="Filtrar por estado de proyecto"
          value={filterStatus}
          onChange={onFilterChange}
          options={FILTER_OPTIONS}
          className="w-full sm:w-48"
        />
      </fieldset>

      <menu className="flex items-center gap-2 justify-end p-0 m-0">
        <Button
          label="Agregar proyecto"
          icon={Plus}
          variant="default"
          onClick={onCreateProject}
        />
      </menu>
    </nav>
  );
}
