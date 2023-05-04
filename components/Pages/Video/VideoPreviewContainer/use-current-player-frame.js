import { CallbackListener, PlayerRef } from "@remotion/player";
import { useCallback, useSyncExternalStore } from "react";

export function useCurrentPlayerFrame(ref) {
  const subscribe = useCallback(
    function (onStoreChange) {
      const current = ref.current;
      if (!current) {
        return function () {
          return undefined;
        };
      }
      const updater = function ({ detail }) {
        onStoreChange(detail.frame);
      };
      current.addEventListener("frameupdate", updater);
      return function () {
        current.removeEventListener("frameupdate", updater);
      };
    },
    [ref]
  );

  const data = useSyncExternalStore(
    subscribe,
    function () {
      return ref.current ? ref.current.getCurrentFrame() : 0;
    },
    function () {
      return 0;
    }
  );

  return data;
}
