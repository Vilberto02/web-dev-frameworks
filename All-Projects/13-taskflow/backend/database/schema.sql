-- ============================================================
-- Base de datos: tasks_db
-- Puedes ejecutar este script directamente en pgAdmin (Query Tool)
-- ============================================================

-- PASO 1 (Opcional si creas la base por la interfaz visual de pgAdmin):
-- Crear la base de datos tasks_db (ejecutar conectado a la base 'postgres'):
-- CREATE DATABASE tasks_db;

-- PASO 2:
-- Conéctate a la base de datos 'tasks_db' en pgAdmin
-- y ejecuta la creación de la tabla:

CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    autor VARCHAR(100) NOT NULL,
    prioridad VARCHAR(20) NOT NULL CHECK (prioridad IN ('Baja', 'Media', 'Alta')),
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente' CHECK (estado IN ('Pendiente', 'En progreso', 'Resuelto')),
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices para optimizar consultas frecuentes
CREATE INDEX IF NOT EXISTS idx_tasks_fecha_creacion ON tasks(fecha_creacion DESC);
CREATE INDEX IF NOT EXISTS idx_tasks_estado ON tasks(estado);
