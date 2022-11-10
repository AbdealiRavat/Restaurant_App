import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  RemoveFavorite: (id) => {},
});  


function FavoriteContextProvider({ children }) {
  const [FavoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function RemoveFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [
      currentFavIds.filter((mealId) => mealId !== id),
    ]);
    }
    const value = 
        {
        ids: FavoriteMealIds,
        addFavorite: addFavorite,
        RemoveFavorite: RemoveFavorite,
    }
  return <FavoriteContext.Provider value = {value}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContextProvider;
