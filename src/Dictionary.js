import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    //console.log(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    // console.log(response.data);
  }

  function search() {
    let apiKey = "f437a67519o9abbba5b8c7t03f34cda0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApi = "G27azHKVelIkEaoD4zm6tk7UFAXloTvZgioROQtydAnfowicqHCiBmoO";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    //let header = `Authorization: Bearer ${pexelsApi}`;

    axios
      .get(pexelsUrl, { headers: { Authorization: pexelsApi } })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggestions: pink, wine, nature...</div>
        </section>
        <Results results={results} />
        <Images pictures={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
