import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import { ProjectModal } from "../projects/ProjectModal";
import { ProjectToolbar } from "../projects/ProjectToolbar";
import { ProjectTable } from "../projects/ProjectTable";
import { useProjectStore } from "../../stores/useProjectStore";
import type { Project, ProjectStatus } from "../../types/project.types";

export function Container() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterStatus, setFilterStatus] = useState<ProjectStatus | "TODOS">(
    "TODOS"
  );

  const {
    projects,
    isLoading,
    error,
    fetchProjects,
    deleteProject,
  } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleOpenCreateModal = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleDeleteProject = async (id: string, name: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `El proyecto "${name}" será eliminado permanentemente.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await deleteProject(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El proyecto ha sido eliminado correctamente.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err: unknown) {
        Swal.fire({
          title: "Error",
          text:
            err instanceof Error
              ? err.message
              : "No se pudo eliminar el proyecto.",
          icon: "error",
        });
      }
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (filterStatus === "TODOS") return true;
    return project.status === filterStatus;
  });

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 gap-6 max-w-7xl mx-auto w-full">
      <Navbar />

      <main className="flex-1 flex flex-col gap-6">
        <ProjectToolbar
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
          onCreateProject={handleOpenCreateModal}
          onRefresh={() => fetchProjects()}
          isLoading={isLoading}
        />

        {error && (
          <aside
            role="alert"
            className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          >
            <span>{error}</span>
            <button
              type="button"
              onClick={() => fetchProjects()}
              className="text-sm font-semibold underline hover:text-red-800 cursor-pointer"
            >
              Reintentar
            </button>
          </aside>
        )}

        <ProjectTable
          projects={filteredProjects}
          isLoading={isLoading}
          filterStatus={filterStatus}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteProject}
          onCreateProject={handleOpenCreateModal}
        />

        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          projectToEdit={selectedProject}
        />
      </main>

      <Footer />
    </div>
  );
}
