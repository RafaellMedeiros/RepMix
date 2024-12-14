'use client'

import React from "react";
import { Song, SongList } from "../../components/SongList";
import { getSongs } from "../../services/song";
import { Button } from "../../@/components/ui/button"
import { Modal } from "../../components/Modal";

export const SongsContainer = () => {
  const [songs, setSongs] = React.useState<Song[]>([]);

  React.useEffect(() => {
    getSongs().then((songs) => setSongs(songs ?? []));
  }, []);

  if (songs.length == 0) return null;

  return (
    <div>
        <Button variant="outline">Salvar</Button>
        <Button variant="outline">Adicionar música</Button>
        <Modal />
        <SongList songs={songs} setSongs={setSongs} />
    </div>
);
};
