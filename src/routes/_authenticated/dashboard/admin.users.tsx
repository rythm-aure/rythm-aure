import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DashShell } from "@/components/dash-shell";
import { adminListUsers, adminSetRole } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard/admin/users")({ component: Page });

function Page() {
  const list = useServerFn(adminListUsers);
  const setRole = useServerFn(adminSetRole);
  const qc = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ["admin_users"], queryFn: () => list() });

  async function toggleAdmin(id: string, isAdmin: boolean) {
    try {
      await setRole({ data: { user_id: id, role: "admin", grant: !isAdmin } });
      toast.success("Updated"); qc.invalidateQueries({ queryKey: ["admin_users"] });
    } catch (e) { toast.error((e as Error).message); }
  }

  return (
    <DashShell>
      <h1 className="font-display text-3xl">Users</h1>
      <div className="mt-6 overflow-hidden rounded-2xl border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left"><tr><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Roles</th><th className="p-3"></th></tr></thead>
          <tbody>
            {data.map((u: any) => {
              const isAdmin = u.roles.includes("admin");
              return (
                <tr key={u.id} className="border-t">
                  <td className="p-3">{u.full_name ?? "—"}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.roles.join(", ") || "user"}</td>
                  <td className="p-3 text-right">
                    <Button size="sm" variant={isAdmin ? "outline" : "default"} onClick={() => toggleAdmin(u.id, isAdmin)} className={isAdmin ? "" : "bg-accent text-accent-foreground hover:bg-accent/90"}>
                      {isAdmin ? "Revoke admin" : "Make admin"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashShell>
  );
}
