import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { DataTableItems } from "@/components/shared/DataTableItems";

export default async function FavouritePage() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user?.email,
    },
    include: {
      elements: {
        where: {
          isFavourite: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user || !user?.elements) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-xs md:text-xl font-semibold">Lista de favoritos</h1>
      <DataTableItems element={user.elements}></DataTableItems>
    </div>
  );
}
