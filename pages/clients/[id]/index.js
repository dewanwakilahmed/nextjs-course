import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // router.push("/clients/max/project-a");
    router.push({
      pathname: "/clients/[id]/[clientsprojectid]",
      query: { id: "max", clientsprojectid: "project-a" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;
