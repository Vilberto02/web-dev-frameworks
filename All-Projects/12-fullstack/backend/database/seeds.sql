-- database/seeds.sql

INSERT INTO tags (id, name, color_hex) VALUES
('a0000000-0000-0000-0000-000000000001', 'Bug', '#EF4444'),
('a0000000-0000-0000-0000-000000000002', 'Feature', '#10B981'),
('a0000000-0000-0000-0000-000000000003', 'Backend', '#8B5CF6'),
('a0000000-0000-0000-0000-000000000004', 'Frontend', '#3B82F6'),
('a0000000-0000-0000-0000-000000000005', 'Urgente', '#F59E0B');

INSERT INTO projects (id, name, description, status) VALUES
('b0000000-0000-0000-0000-000000000001', 'Migracion Intranet TI', 'Actualizacion de sistemas legados a microservicios', 'ACTIVO'),
('b0000000-0000-0000-0000-000000000002', 'Portal de Soporte al Usuario', 'Sistema interno de tickets de soporte tecnico', 'ACTIVO'),
('b0000000-0000-0000-0000-000000000003', 'Auditoria Servidores 2025', 'Proyecto cerrado de revision de infraestructura', 'ARCHIVADO');

INSERT INTO tasks (id, project_id, title, description, priority, status, due_date, completed_at) VALUES
('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'Configurar pool de PostgreSQL', 'Crear conexion con pg y variables de entorno', 'ALTA', 'COMPLETADA', CURRENT_DATE + 3, CURRENT_TIMESTAMP),
('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000001', 'Disenar API de autenticacion JWT', 'Implementar middleware de verificacion de tokens', 'ALTA', 'EN_PROCESO', CURRENT_DATE + 5, NULL),
('c0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000001', 'Crear interfaz responsiva en Tailwind', 'Maquetar dashboard con cards y modales', 'MEDIA', 'PENDIENTE', CURRENT_DATE + 7, NULL),
('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002', 'Integrar notificaciones por correo', 'Envio automatico al cambiar estado de ticket', 'BAJA', 'PENDIENTE', CURRENT_DATE + 10, NULL);

INSERT INTO task_tags (task_id, tag_id) VALUES
('c0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000003'),
('c0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000002'),
('c0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000003'),
('c0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000005'),
('c0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000004');
