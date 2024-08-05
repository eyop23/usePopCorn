import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerString() === key.toLowerString()) {
          action();
        }
      }
      document.addEventListener(key, callback);
      return () => document.removeEventListener(key, callback);
    },
    [action, key]
  );
}
