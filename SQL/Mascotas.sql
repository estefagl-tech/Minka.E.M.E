CREATE TABLE mascotas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT,
    especie VARCHAR(50) NOT NULL,
    sexo ENUM('Hembra','Macho') NOT NULL,
    descripcion TEXT,
    foto VARCHAR(255),
    informacion TEXT,
    disponible BOOLEAN DEFAULT TRUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
