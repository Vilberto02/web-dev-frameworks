import React from "react";

type TypeElement = "" | "password" | "folder";

export type dataHeaderMainItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  typeElement: TypeElement;
  text: string;
};

export type HeaderMainProps = {
  userId: string;
};
