import { Keyboard } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 p-2 text-sm text-muted-foreground">
      <Keyboard className="h-4 w-4 animate-pulse" />
      <span>Someone is typing...</span>
    </div>
  );
};