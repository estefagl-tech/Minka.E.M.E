CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    tipo_documento ENUM(
        'CC',
        'TI',
        'CE',
        'PP'
    ) NOT NULL,
    numero_documento VARCHAR(50) UNIQUE NOT NULL,
    departamento VARCHAR(100),
    municipio VARCHAR(100),
    telefono VARCHAR(20),
    correo VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

