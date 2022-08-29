export const exerciseOptions =  {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {

        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1159787d1fmsh6282811a41f0e71p132507jsnab0c4384aab4',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}