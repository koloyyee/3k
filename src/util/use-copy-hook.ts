import {useState} from "react";

export function useCopy() {
  const [copiedText, setCopyText] = useState<string>("");

  const copy = async(text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      
      await navigator.clipboard.writeText(text);
      setCopyText(text);
    } catch (e) {
      console.error(e);
    }
  }
  return [copiedText, copy] as const;
}