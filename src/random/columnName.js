export default function columnName(column) {
  switch (column) {
  case 'population':
    return 'População';
  case 'orbital_period':
    return 'Período Orbital';
  case 'diameter':
    return 'Diâmetro';
  case 'rotation_period':
    return 'Período de Rotação';
  case 'surface_water':
    return 'Superície de Água';
  case 'name':
    return 'Planeta';
  case 'climate':
    return 'Clima';
  case 'gravity':
    return 'Gravidade';
  case 'films':
    return 'Filmes';
  case 'created':
    return 'Criado em';
  case 'edited':
    return 'Editado em';
  case 'url':
    return 'URL';
  case 'residents':
    return 'Residentes';
  case 'terrain':
    return 'Terreno';
  default:
    return column;
  }
}
