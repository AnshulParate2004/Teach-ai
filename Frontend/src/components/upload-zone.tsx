import { useCallback, useRef, useState } from "react";
import { FileCode2, UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function UploadZone({
  onFile,
  file,
  onClear,
}: {
  onFile: (file: File) => void;
  file: File | null;
  onClear: () => void;
}) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      const f = files?.[0];
      if (f) onFile(f);
    },
    [onFile],
  );

  if (file) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-primary/35 bg-primary/5 p-4">
        <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary">
          <FileCode2 className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-mono text-sm">{file.name}</p>
          <p className="font-mono text-xs text-muted-foreground">
            {(file.size / 1024).toFixed(0)} KB · ready to submit
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onClear}
          aria-label="Remove file"
        >
          <X className="size-4" />
        </Button>
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed p-10 text-center transition-colors",
        dragging
          ? "border-primary bg-primary/10"
          : "border-border bg-surface hover:border-primary/40",
      )}
    >
      <UploadCloud className="size-7 text-muted-foreground" />
      <p className="text-sm font-medium">
        Drag & drop your <span className="font-mono">.ipynb</span> here
      </p>
      <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
        Solve independently using your own compute or Google Colab, then upload your
        final notebook here.
      </p>
      <input
        ref={inputRef}
        type="file"
        accept=".ipynb"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
