import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './starContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState('');

  const planetApi = async () => {
      const responseJson = await response.json();
      if (responseJson.meals === null) {
        throw new Error(ERROR_MESSAGE);
      }
      setFoodAndDrinks(responseJson.meals);
    } catch (error) {
      global.alert(ERROR_MESSAGE);
      return error;
    }
  };


  const values = {
    radioButtonOption,
    setRadioButtonOption,
    inputSearch,
    setInputSearch,
    foodAndDrinks,
    setFoodAndDrinks,
    redirect,
    setRedirect,
    foodAPISearch,
    drinkAPISearch,
    favorites,
    setFavorites,
    done,
    setDone,
    copy,
    recipe,
    setRecipe,
    getRecipe,
  };

  return (
    <div>
      <main>
        <StarContext.Provider value={ values }>
          {children}
        </StarContext.Provider>
      </main>
    </div>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
