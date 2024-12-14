"use client";

import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "./styles.module.css";

type SongListProps = {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
};

export type Song = {
  id: number;
  title: string;
  tone: string;
};

export const SongList = ({ songs, setSongs }: SongListProps) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(songs);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setSongs(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul
            className={styles.songList}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {songs?.map((song, index) => (
              <Draggable
                key={song.id}
                draggableId={String(song.id)}
                index={index}
              >
                {(provided) => (
                  <li
                    className={styles.songItem}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span className={styles.dragHandle}>⋮⋮</span>
                    <span className={styles.songName}>{song.title}</span>
                    <span className={styles.songTone}>{song.tone}</span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
