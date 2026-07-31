// Nombres de los meses en minúscula para coincidir con el nombre del archivo .json
  const monthNames = [
    "january", "february", "march", "april", "may", "june", 
    "july", "august", "september", "october", "november", "december"
  ];
  const currentMonth = monthNames[today.getMonth()]; // "july", "august", etc.

  // --------------------------------------------------------------------------
  // RUTAS DEL JSON:
  // --------------------------------------------------------------------------
  
  // 1. RUTA ACTUAL (Hardcodeada para pruebas de hoy 31 de Julio):
  const jsonPath = 'assets/data/lectio-august-2026.json';

  // 2. RUTA AUTOMÁTICA (Descomentar mañana para producción):
  // const jsonPath = `assets/data/lectio-${currentMonth}-${year}.json`;
  
  // --------------------------------------------------------------------------