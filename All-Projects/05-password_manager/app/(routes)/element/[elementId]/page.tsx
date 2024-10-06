import { FormEditElement } from "@/components/shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ElementPage({
  params,
}: {
  params: { elementId: string };
}) {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return redirect("/");
  }

  const element = await db.element.findUnique({
    where: {
      id: params.elementId,
    },
  });

  if (!element) {
    redirect("/");
  }

  return (
    <div>
      <FormEditElement dataElement={element}></FormEditElement>
    </div>
  );
}
