import { notFound } from "next/navigation";
import React from "react";

async function ProjectDetails({ params }) {
  const projectId = (await params).projectId;

  if (parseInt(projectId) > 100) {
    notFound();
  }
  return <div>ProjectDetails is a {projectId}</div>;
}

export default ProjectDetails;
