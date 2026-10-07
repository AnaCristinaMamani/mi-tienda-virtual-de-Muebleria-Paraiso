// ============================================================
// DATOS DE MUEBLERÍA PARAÍSO — catálogo de 30 productos
// - NEGOCIO: datos de contacto en UN solo lugar (cámbialos aquí).
// - productos: nombre, material, detalles (medidas, niveles, marca...),
//   precio en soles (precioPEN) e imagen.
// - Para cambiar una foto: reemplaza la ruta/URL del campo "imagen".
// - Si un producto no tiene precio, deja precioPEN en null.
// ============================================================
const NEGOCIO = {
  nombre: 'Mueblería Paraíso',
  whatsapp: '51931451286'   // código de país 51 + número. Cámbialo por el número real si corresponde.
};

const productos = [
  {id:"CA01",categoria:"Camas y tarimas",nombre:"Tarima delgada 2 plazas",descripcion:"Estructura resistente, acabado liso, ideal para colchón estándar. Fácil limpieza.",material:"Madera de pino",detalles:"Medidas: 1.90 x 1.50 m",precioPEN:250,imagen:"./img/tarjeta7.jpg"},
  {id:"CA02",categoria:"Camas y tarimas",nombre:"Tarima gruesa 2 plazas",descripcion:"Madera más robusta y duradera, mayor soporte. Acabado pulido natural.",material:"Madera de cedro",detalles:"Medidas: 1.90 x 1.50 m",precioPEN:350,imagen:"./img/tarjeta8.webp"},
  {id:"CA03",categoria:"Camas y tarimas",nombre:"Cama armable Modelo Básico",descripcion:"Sin necesidad de pernos, ensamble rápido. Incluye base de soporte.",material:"Fierro con cabecera tapizada",detalles:"Medidas: 1.90 x 1.50 m",precioPEN:500,imagen:"./img/tarjeta9.webp"},
  {id:"CA04",categoria:"Camas y tarimas",nombre:"Cama armable Modelo Confort",descripcion:"Montaje sin herramientas. Cabecera con relleno suave, diseño elegante.",material:"Fierro reforzado con cabecera acolchada",detalles:"Medidas: 1.90 x 1.50 m",precioPEN:550,imagen:"./img/tarjeta7.jpg"},
  {id:"CA05",categoria:"Camas y tarimas",nombre:"Cama armable Modelo Premium",descripcion:"Diseño amplio y estable, acabado de alta calidad.",material:"Fierro anticorrosión con cabecera de tela gruesa",detalles:"Medidas: 2.00 x 1.60 m",precioPEN:600,imagen:"./img/tarjeta8.webp"},
  {id:"CA06",categoria:"Camas y tarimas",nombre:"Cama clásica de madera 2 plazas",descripcion:"Cabecera tallada, estructura sólida. Incluye base lista para colchón.",material:"Madera de cedro",detalles:"Medidas: 1.90 x 1.50 m",precioPEN:720,imagen:"./img/tarjeta9.webp"},
  {id:"RO01",categoria:"Roperos",nombre:"Ropero pequeño infantil",descripcion:"Repisas y compartimentos, ideal para habitación de niños. Fácil limpieza.",material:"Melamina",detalles:"Tamaño: 2 puertas, 1.50 m de alto",precioPEN:800,imagen:"./img/tsrjeta10.webp"},
  {id:"RO02",categoria:"Roperos",nombre:"Ropero mediano estándar",descripcion:"Espacio amplio, barra para colgar ropa y repisas. Acabado liso.",material:"Melamina / Madera",detalles:"Tamaño: 3 puertas, 1.80 m de alto",precioPEN:900,imagen:"./img/tsrjeta10.webp"},
  {id:"RO03",categoria:"Roperos",nombre:"Ropero familiar 4 puertas",descripcion:"Doble sección, cajones inferiores, gran capacidad de almacenamiento.",material:"Melamina / Madera seleccionada",detalles:"Tamaño: 4 puertas, 2.00 m de alto",precioPEN:1000,imagen:"./img/tsrjeta10.webp"},
  {id:"RO04",categoria:"Roperos",nombre:"Ropero grande 5 piezas",descripcion:"Amplio, diseño robusto, acabado fino. Ideal para toda la familia.",material:"Cedro / Melamina premium",detalles:"Tamaño: 5 puertas, 2.10 m de alto",precioPEN:1200,imagen:"./img/tsrjeta10.webp"},
  {id:"TO01",categoria:"Cómodas y tocadores",nombre:"Cómoda sin espejo",descripcion:"Diseño sencillo, amplio espacio de almacenamiento.",material:"Melamina",detalles:"Detalles: 4 cajones",precioPEN:550,imagen:"./img/tarjeta11.webp"},
  {id:"TO02",categoria:"Cómodas y tocadores",nombre:"Cómoda con espejo",descripcion:"Espejo claro, estructura firme, acabado pulido.",material:"Madera de pino",detalles:"Detalles: 4 cajones + espejo rectangular",precioPEN:600,imagen:"./img/tarjeta11.webp"},
  {id:"TO03",categoria:"Cómodas y tocadores",nombre:"Tocador básico con silla",descripcion:"Tamaño compacto, ideal para espacios reducidos.",material:"Melamina",detalles:"Detalles: Espejo sencillo + silla tapizada",precioPEN:450,imagen:"./img/tarjeta12.webp"},
  {id:"TO04",categoria:"Cómodas y tocadores",nombre:"Tocador estándar con silla acolchonada",descripcion:"Silla incluida, acabado cómodo y elegante.",material:"Madera",detalles:"Detalles: Asiento suave + espejo mediano",precioPEN:500,imagen:"./img/tarjeta12.webp"},
  {id:"TO05",categoria:"Cómodas y tocadores",nombre:"Tocador con luz LED",descripcion:"Iluminación moderna y uniforme, acabado de lujo.",material:"Madera premium",detalles:"Detalles: Luz integrada + silla tapizada",precioPEN:650,imagen:"./img/tarjeta12.webp"},
  {id:"RE01",categoria:"Reposteros, estantes y auxiliares",nombre:"Repostero pequeño",descripcion:"Compacto, ideal para cocina o sala.",material:"Melamina",detalles:"Niveles: 2 pisos",precioPEN:100,imagen:"./img/tarjeta19.jpg"},
  {id:"RE02",categoria:"Reposteros, estantes y auxiliares",nombre:"Repostero mediano",descripcion:"Resistente, perfecto para utensilios y vajilla.",material:"Melamina",detalles:"Niveles: 3 pisos",precioPEN:250,imagen:"./img/tarjeta19.jpg"},
  {id:"RE03",categoria:"Reposteros, estantes y auxiliares",nombre:"Estante de 2 niveles",descripcion:"Versátil, para libros, adornos o almacenamiento.",material:"Madera",detalles:"Niveles: 2 pisos",precioPEN:150,imagen:"./img/tarjeta16.png"},
  {id:"RE04",categoria:"Reposteros, estantes y auxiliares",nombre:"Estante de 4 niveles",descripcion:"Robusto y decorativo, gran capacidad.",material:"Madera de cedro",detalles:"Niveles: 4 pisos",precioPEN:350,imagen:"./img/tarjeta16.png"},
  {id:"RE05",categoria:"Reposteros, estantes y auxiliares",nombre:"Librero amplio",descripcion:"Capacidad completa, diseño elegante para sala o estudio.",material:"Madera seleccionada",detalles:"Niveles: 6 repisas",precioPEN:500,imagen:"./img/tarjeta17.jpg"},
  {id:"RE06",categoria:"Reposteros, estantes y auxiliares",nombre:"Mesa de noche con cajón",descripcion:"Espaciosa, con cajón, acabado natural.",material:"Madera de pino",detalles:"Medidas: 45 x 40 x 55 cm",precioPEN:280,imagen:"./img/tarjeta20.webp"},
  {id:"CO01",categoria:"Colchones y ropa de cama",nombre:"Colchón Básico",descripcion:"Firme, para uso diario, tela transpirable.",material:"",detalles:"Marca: Cebra | Plaza: 1 plaza",precioPEN:280,imagen:"./img/dormitorio3.webp"},
  {id:"CO02",categoria:"Colchones y ropa de cama",nombre:"Colchón Confort",descripcion:"Mayor grosor, acolchado suave, descanso cómodo.",material:"",detalles:"Marca: Paraíso | Plaza: 1.5 plazas",precioPEN:420,imagen:"./img/dormitorio3.webp"},
  {id:"CO03",categoria:"Colchones y ropa de cama",nombre:"Colchón Premium",descripcion:"Alta densidad, soporte óptimo, mayor vida útil.",material:"",detalles:"Marca: Paraíso | Plaza: 2 plazas",precioPEN:750,imagen:"./img/dormitorio3.webp"},
  {id:"CO04",categoria:"Colchones y ropa de cama",nombre:"Juego de sábanas estándar",descripcion:"Tejido resistente, disponible en varios diseños.",material:"",detalles:"Contenido: Sábana + 2 fundas | Plaza: 1.5 plazas",precioPEN:45,imagen:"./img/dormitorio3.webp"},
  {id:"CO05",categoria:"Colchones y ropa de cama",nombre:"Colcha completa 3 piezas",descripcion:"Diseño estampado, textura suave y agradable.",material:"",detalles:"Contenido: Colcha + sábana + 2 fundas | Plaza: 2 plazas",precioPEN:150,imagen:"./img/dormitorio3.webp"},
  {id:"CO06",categoria:"Colchones y ropa de cama",nombre:"Almohada de confort",descripcion:"Se adapta a la forma del cuello, mayor comodidad al dormir.",material:"Espuma viscoelástica",detalles:"Tamaño: Estándar",precioPEN:50,imagen:"./img/dormitorio3.webp"},
  {id:"SI01",categoria:"Sillas, mesas y cocina",nombre:"Silla ergonómica reforzada",descripcion:"Mayor soporte, fácil limpieza, ideal para uso diario.",material:"Fierro pintado + asiento de caucho endurecido",detalles:"Uso: Individual",precioPEN:55,imagen:"./img/tarjeta14.jpg"},
  {id:"SI02",categoria:"Sillas, mesas y cocina",nombre:"Mesa de comedor para 6 personas",descripcion:"Superficie amplia, estructura firme y estable.",material:"Tablero de madera + patas de fierro",detalles:"Medidas: 140 x 90 cm",precioPEN:480,imagen:"./img/tarjeta13.webp"},
  {id:"SI03",categoria:"Sillas, mesas y cocina",nombre:"Estante organizador de verduras",descripcion:"Permite ventilación, fácil de limpiar, se desmonta para transportar.",material:"Fierro + cestas de plástico",detalles:"Niveles: 3 niveles",precioPEN:120,imagen:"./img/mueble.jpg"}
];
