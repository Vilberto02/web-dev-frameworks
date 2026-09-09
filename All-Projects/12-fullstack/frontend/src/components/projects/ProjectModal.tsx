import { Save } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import { Select } from "../common/Select";
import { useProjectStore } from "../../stores/useProjectStore";
import {
  type Project,
  type ProjectStatus,
  PROJECT_STATUS_OPTIONS,
} from "../../types/project.types";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectToEdit?: Project | null;
}

interface ProjectFormProps {
  projectToEdit?: Project | null;
  onClose: () => void;
}

function ProjectForm({ projectToEdit, onClose }: ProjectFormProps) {
  const isEditing = Boolean(projectToEdit);

  const [name, setName] = useState(projectToEdit?.name ?? "");
  const [description, setDescription] = useState(
    projectToEdit?.description ?? ""
  );
  const [status, setStatus] = useState<ProjectStatus>(
    projectToEdit?.status ?? "ACTIVO"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { addProject, updateProject } = useProjectStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      setErrorMessage("El nombre del proyecto es obligatorio");
      return;
    }

    if (trimmedName.length < 3) {
      setErrorMessage("El nombre debe tener al menos 3 caracteres");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (isEditing && projectToEdit) {
        await updateProject(projectToEdit.id, {
          name: trimmedName,
          description: description.trim() || undefined,
          status,
        });
        onClose();
        Swal.fire({
          title: "¡Actualizado!",
          text: "El proyecto ha sido actualizado correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        await addProject({
          name: trimmedName,
          description: description.trim() || undefined,
        });
        onClose();
        Swal.fire({
          title: "¡Creado!",
          text: "El proyecto ha sido creado correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al procesar la solicitud";
      setErrorMessage(message);
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {errorMessage && (
        <p
          role="alert"
          className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md"
        >
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label
          htmlFor="project-name"
          className="block text-sm font-medium text-stone-700"
        >
          Nombre:
          <input
            type="text"
            id="project-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Sistema de Facturación"
            required
            minLength={3}
            maxLength={80}
            disabled={isSubmitting}
            className="mt-1 block w-full border border-stone-300 rounded-md shadow-xs p-2 text-sm text-stone-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600 outline-none disabled:bg-stone-100 disabled:cursor-not-allowed"
          />
        </label>

        <label
          htmlFor="project-description"
          className="block text-sm font-medium text-stone-700"
        >
          Descripción:
          <textarea
            id="project-description"
            name="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Breve resumen del objetivo del proyecto"
            maxLength={500}
            disabled={isSubmitting}
            className="mt-1 block w-full border border-stone-300 rounded-md shadow-xs p-2 text-sm text-stone-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600 outline-none disabled:bg-stone-100 disabled:cursor-not-allowed"
          />
        </label>

        {isEditing && (
          <Select
            id="project-status"
            label="Estado:"
            value={status}
            onChange={setStatus}
            options={PROJECT_STATUS_OPTIONS}
            disabled={isSubmitting}
          />
        )}

        <menu className="flex justify-end gap-2 pt-2 m-0 p-0">
          <Button
            label="Cancelar"
            variant="ghost"
            onClick={onClose}
            disabled={isSubmitting}
          />
          <Button
            label={
              isSubmitting
                ? "Guardando..."
                : isEditing
                ? "Actualizar"
                : "Guardar"
            }
            icon={Save}
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          />
        </menu>
      </form>
    </>
  );
}

export function ProjectModal({
  isOpen,
  onClose,
  projectToEdit,
}: ProjectModalProps) {
  const isEditing = Boolean(projectToEdit);
  const modalTitle = isEditing ? "Editar Proyecto" : "Agregar Proyecto";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={modalTitle}
      maxWidth="md"
    >
      <ProjectForm
        key={projectToEdit?.id ?? "new-project"}
        projectToEdit={projectToEdit}
        onClose={onClose}
      />
    </Modal>
  );
}
