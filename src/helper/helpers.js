export const callmultipleEndpoints = async (endpoints) => {
    const mapIt = endpoints.map((d) => fetch(d));
    try {
      let allEndpoints = await Promise.all(mapIt);
      let res = await Promise.all(allEndpoints.map((e) => e.json()));
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const mapMoviesByDateAndSortFromEarliestToNewest = (data) => {
    return data
      .map((d) => {
        return {
          ...d,
          modifiedReleasedDate: new Date(d.release_date),
        };
      })
      .sort((a, b) => a.modifiedReleasedDate - b.modifiedReleasedDate);
  };
  