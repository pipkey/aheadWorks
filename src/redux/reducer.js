let initialState = [
  {
    id: Date.now(),
    anotation: `kskskk`,
    weather: `+1200`,
    city: `Minsk`,
    date: `2213322`,
    time: `wwwe311`,
  },
  {id: 1231231231211,
    anotation: `wwwqqwwq`,
    weather: `+100`,
    city: `Minsk`,
    date: `22sds3322`,
    time: `ww11`,},
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      let newCard = {
        id: Date.now(),
        anotation: action.payload,
        weather: `+160`,
        city: `Minsk`,
        date: `22.12.2020`,
        time: `10/43/45`,
      };
      return [...state, newCard];
    case "DELETE_CARD":
    
      return state.filter(el=> el.id !== action.id)
  
    default:
      return state;
  }
};
