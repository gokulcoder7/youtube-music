import type { YoutubePlayer } from '@/types/youtube-player';
import type { GetState, QueueItem } from '@/types/datahost-get-state';

type StoreState = GetState;
type Store = {
  dispatch: (obj: {
    type: string;
    payload?: {
      items?: QueueItem[];
    };
  }) => void;

  getState: () => StoreState;
  replaceReducer: (param1: unknown) => unknown;
  subscribe: (callback: () => void) => unknown;
}

export type QueueElement = HTMLElement & {
  dispatch(obj: {
    type: string;
    payload?: unknown;
  }): void;
  queue: QueueAPI;
};
export type QueueAPI = {
  getItems(): unknown[];
  store: {
    store: Store,
  };
  continuation?: string;
  autoPlaying?: boolean;
};
export type AppElement = HTMLElement & AppAPI;
export type AppAPI = {
  queue_: QueueAPI;
  playerApi_: YoutubePlayer;
  openToast: (message: string) => void;

  // TODO: Add more
};

export type Profile = {
  id: string;
  handleId: string;
  name: string;
  thumbnail: string;
};
export type VideoData = {
  videoId: string;
  ownerId: string;
};
export type Permission = 'host-only' | 'playlist' | 'all';

export const getDefaultProfile = (connectionID: string, id: string = Date.now().toString()): Profile => {
  const name = `Guest ${id.slice(0, 4)}`;

  return {
    id: connectionID,
    handleId: `#music-together:${id}`,
    name,
    thumbnail: `https://ui-avatars.com/api/?name=${name}&background=random`
  };
};
