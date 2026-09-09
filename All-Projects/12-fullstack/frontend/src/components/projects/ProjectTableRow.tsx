import { Pencil, Trash } from "lucide-react";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import type { Project } from "../../types/project.types";

export interface ProjectTableRowProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string, name: string) => void;
}

export function ProjectTableRow({
  project,
  onEdit,
  onDelete,
}: ProjectTableRowProps) {
  return (
    <tr className="hover:bg-stone-50/80 transition-colors">
      <td className="p-3 font-medium text-stone-900 text-sm">
        {project.name}
      </td>
      <td className="p-3 text-stone-600 text-sm max-w-md truncate">
        {project.description || (
          <span className="italic text-stone-400">Sin descripción</span>
        )}
      </td>
      <td className="p-3">
        <span className="inline-flex items-center gap-2">
          <Badge status={project.status} />
        </span>
      </td>
      <td className="p-3 text-right">
        <menu className="inline-flex items-center gap-1.5 justify-end p-0 m-0">
          <Button
            label="Editar"
            icon={Pencil}
            variant="ghost"
            size="sm"
            ariaLabel={`Editar proyecto ${project.name}`}
            onClick={() => onEdit(project)}
          />
          <Button
            label="Eliminar"
            icon={Trash}
            variant="destructive"
            size="sm"
            ariaLabel={`Eliminar proyecto ${project.name}`}
            onClick={() => onDelete(project.id, project.name)}
          />
        </menu>
      </td>
    </tr>
  );
}
