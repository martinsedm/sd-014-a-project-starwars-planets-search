import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <div>
      <div>
        Filter
        <input
          type="text"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ handleChange }
          placeholder="Filtre pelo nome"
        />
      </div>
      <select
        data-testid="column-filter"
        // onChange={ }
        // value={  }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        // onChange={  }
        // vale={  }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        // onChange={  }
        // value={  }
      />

      <button
        type="button"
        data-testid="button-filter"
        // onClick={ }
      >
        Filtrar
      </button>
    </div>

  );
}

export default Filter;
