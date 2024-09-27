import { toast } from "@/components/hooks/use-toast";

export const copyClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  toast({
    title: "Value copied ✅",
  });
};
