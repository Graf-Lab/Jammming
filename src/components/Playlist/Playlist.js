import React from "react";
import { useCallback } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange],
  );

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList />
      <button className="Playlis-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};
