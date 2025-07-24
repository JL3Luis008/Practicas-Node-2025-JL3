USE semana8_db;

SET @estadoID = (SELECT id FROM estados WHERE nombre='Aguascalientes');

INSERT INTO municipios (nombre,estado_id) VALUES
  ('Aguascalientes', (@estadoID)),
  ('Asientos' , (@estadoID)),
  ('Calvillo' , (@estadoID)),
  ('Cosío' , (@estadoID)),
  ('El Llano' , (@estadoID)),
  ('Jesús María' , (@estadoID)),
  ('Pabellón de Arteaga' , (@estadoID)),
  ('Rincón de Romos' , (@estadoID)),
  ('San Francisco de los Romo' , (@estadoID)),
  ('San José de Gracia' , (@estadoID)),
  ('Tepezalá' , (@estadoID));


SELECT a.id, a.nombre AS 'Municipio',
    b.nombre AS 'Estado'
FROM municipios a INNER JOIN
    estados b ON a.estado_id=b.id
WHERE b.nombre LIKE '%tes%'
ORDER BY b.nombre

-- Consulta completa con join
SELECT
    e.nombre as estado,
    m.nombre as municipio,
    u.nombre as usuario
FROM estados e
JOIN municipios m ON e.id = m.estado_id
LEFT JOIN usuarios u ON m.id = u.municipio_id
ORDER BY e.nombre, m.nombre;

